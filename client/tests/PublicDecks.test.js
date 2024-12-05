import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { AuthContext } from "../src/auth/provider/AuthProvider";
import getPublicDecksByCategories from "../src/apiClient/getPublicDecksByCategories";
import PublicDecks from "../src/components/PublicDecks";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));
jest.mock("../src/apiClient/getPublicDecksByCategories");

beforeEach(() => {
  jest.clearAllMocks();
  getPublicDecksByCategories.mockResolvedValue([
    {
      id: 1,
      title: "Deck 1",
      description: "Description 1",
      isPublic: true,
      categoryId: 1,
    },
    {
      id: 2,
      title: "Deck 2",
      description: "Description 2",
      isPublic: false,
      categoryId: 2,
    },
    {
      id: 3,
      title: "Deck 3",
      description: "Description 3",
      isPublic: true,
      categoryId: 3,
    },
  ]);
});

test("renders PublicDecks component", async () => {
  render(
    <AuthContext.Provider value={{ isUserFetched: true }}>
      <Router>
        <PublicDecks />
      </Router>
    </AuthContext.Provider>,
  );

  await waitFor(() => {
    expect(screen.getByText("Deck 1")).toBeInTheDocument();
    expect(screen.getByText("Deck 2")).toBeInTheDocument();
    expect(screen.getByText("Deck 3")).toBeInTheDocument();
  });
});
