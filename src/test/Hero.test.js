import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

//Test Suite 
describe("Hero Component", () => {
  //Test Case 1: Check if the Hero component renders without crashing
  test("renders hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/homeHero.png");
  });
});

describe("renders Signup button", () => {
  //Test Case 1: Check if the Hero component renders without crashing
  test("renders signup button", () => {
    render(<Hero />);
    const signupButton = screen.getByRole("button", { name: "/Signup Now/i" });
    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toHaveClass("btn-primary");
  });
});
