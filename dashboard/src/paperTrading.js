const PAPER_TRADING_KEY = "paperTradingAccount";
const DEFAULT_OPENING_BALANCE = 100000;

const defaultAccount = {
  openingBalance: DEFAULT_OPENING_BALANCE,
  payin: 0,
  withdrawals: 0,
  usedMargin: 0,
  orders: [],
};

export const formatMoney = (value) =>
  Number(value || 0).toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

export const getPaperAccount = () => {
  const storedAccount = localStorage.getItem(PAPER_TRADING_KEY);
  if (!storedAccount) return defaultAccount;

  try {
    return { ...defaultAccount, ...JSON.parse(storedAccount) };
  } catch (_error) {
    return defaultAccount;
  }
};

export const savePaperAccount = (account) => {
  localStorage.setItem(PAPER_TRADING_KEY, JSON.stringify(account));
  window.dispatchEvent(new Event("paperTrading:update"));
};

export const getAvailableCash = (account = getPaperAccount()) =>
  account.openingBalance + account.payin - account.withdrawals - account.usedMargin;

export const addPaperFunds = (amount) => {
  const account = getPaperAccount();
  const nextAccount = {
    ...account,
    payin: account.payin + Number(amount || 0),
  };
  savePaperAccount(nextAccount);
  return nextAccount;
};

export const withdrawPaperFunds = (amount) => {
  const account = getPaperAccount();
  const value = Number(amount || 0);

  if (value > getAvailableCash(account)) {
    throw new Error("Withdraw amount is more than available cash.");
  }

  const nextAccount = {
    ...account,
    withdrawals: account.withdrawals + value,
  };
  savePaperAccount(nextAccount);
  return nextAccount;
};

export const placePaperOrder = ({ name, qty, price, mode }) => {
  const account = getPaperAccount();
  const quantity = Number(qty || 0);
  const orderPrice = Number(price || 0);
  const requiredMargin = quantity * orderPrice;

  if (!name || quantity <= 0 || orderPrice <= 0) {
    throw new Error("Enter a valid quantity and price.");
  }

  if (requiredMargin > getAvailableCash(account)) {
    throw new Error("Insufficient paper trading balance.");
  }

  const order = {
    id: Date.now(),
    name,
    qty: quantity,
    price: orderPrice,
    mode,
    margin: requiredMargin,
    createdAt: new Date().toISOString(),
  };

  const nextAccount = {
    ...account,
    usedMargin: account.usedMargin + requiredMargin,
    orders: [order, ...account.orders],
  };

  savePaperAccount(nextAccount);
  return order;
};
