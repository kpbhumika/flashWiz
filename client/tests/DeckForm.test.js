import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import DeckForm from "../src/components/DeckForm";
import { AuthContext } from "../src/auth/provider/AuthProvider";
import getCategories from "../src/apiClient/getCategories";
import getDeckById from "../src/apiClient/getDeckById";
import { useParams } from "react-router-dom";

jest.mock("../src/apiClient/getCategories");
jest.mock("../src/apiClient/getDeckById");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));

const mockUseParams = useParams;

const categories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
];

const currentUser = {
  id: 1,
  name: "Test User",
};

const deck = {
  title: "Test Deck",
  description: "Test Description",
  isPublic: true,
  categoryId: 1,
};

beforeEach(() => {
  jest.clearAllMocks();
  mockUseParams.mockReturnValue({ deckId: "1" });
  getCategories.mockResolvedValue(categories);
  getDeckById.mockResolvedValue(deck);
});

const renderComponent = (isEditing = false) => {
  return render(
    <AuthContext.Provider value={{ isUserFetched: true, currentUser }}>
      <Router>
        <DeckForm isEditing={isEditing} />
      </Router>
    </AuthContext.Provider>,
  );
};

test("renders edit deck form in edit mode", async () => {
  renderComponent(true);
  await waitFor(() => {
    const button = screen
      .getAllByText("Update Deck")
      .find((element) => element.tagName === "BUTTON");
    const heading = screen
      .getAllByText("Edit Deck")
      .find((element) => element.tagName === "H2");
    expect(button).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});

test("renders create deck form in create mode", async () => {
  renderComponent(false);
  await waitFor(() => {
    const elements = screen.getAllByText("Create Deck");
    const button = elements.find((element) => element.tagName === "BUTTON");
    const heading = elements.find((element) => element.tagName === "H2");
    expect(button).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});
