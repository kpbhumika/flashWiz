import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { AuthContext } from "../src/auth/provider/AuthProvider";
import getUserDecks from "../src/apiClient/getUserDecks";
import deleteDeck from "../src/apiClient/deleteDeck";
import updateDeckVisibility from "../src/apiClient/updateDeckVisibility";
import Decks from "../src/components/Decks";
import userEvent from "@testing-library/user-event";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(), // mock the useNavigate hook
}));
jest.mock("../src/apiClient/getUserDecks");
jest.mock("../src/apiClient/deleteDeck");
jest.mock("../src/apiClient/updateDeckVisibility");

beforeEach(() => {
  jest.clearAllMocks();
  getUserDecks.mockResolvedValue([
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
    {
      id: 4,
      title: "Deck 4",
      description: "Description 4",
      isPublic: false,
      categoryId: 4,
    },
  ]);
  deleteDeck.mockResolvedValue();
  updateDeckVisibility.mockResolvedValue();
});

test("renders Decks component", async () => {
  render(
    <AuthContext.Provider value={{ isUserFetched: true }}>
      <Router>
        <Decks />
      </Router>
    </AuthContext.Provider>,
  );
  await waitFor(() => {
    expect(screen.getByText("Deck 1")).toBeInTheDocument();

    // click the next page button to test the pagination
    screen.getByText("1").click();
    expect(screen.getByText("Deck 2")).toBeInTheDocument();
  });
});

test("handles deck click", async () => {
  const navigate = jest.fn();
  useNavigate.mockReturnValue(navigate);

  render(
    <AuthContext.Provider value={{ isUserFetched: true }}>
      <Router>
        <Decks />
      </Router>
    </AuthContext.Provider>,
  );

  await waitFor(() => {
    expect(screen.getByText("Deck 1")).toBeInTheDocument();
  });

  userEvent.click(screen.getByText("Description 1"));

  await waitFor(() => {
    expect(navigate).toHaveBeenCalledWith("/decks/1/flashcards");
  });
});

test("handles add flashcard", async () => {
  const navigate = jest.fn();
  useNavigate.mockReturnValue(navigate);

  render(
    <AuthContext.Provider value={{ isUserFetched: true }}>
      <Router>
        <Decks />
      </Router>
    </AuthContext.Provider>,
  );

  await waitFor(() => {
    expect(screen.getByText("Deck 1")).toBeInTheDocument();
  });

  const addFlashcardButtons = screen.getAllByText("Add Flashcard");
  expect(addFlashcardButtons.length).toBeGreaterThan(0);
  userEvent.click(addFlashcardButtons[0]);

  await waitFor(() => {
    expect(navigate).toHaveBeenCalledWith("/decks/1/add-flashcard");
  });
});

test("handles toggle visibility", async () => {
  render(
    <AuthContext.Provider value={{ isUserFetched: true }}>
      <Router>
        <Decks />
      </Router>
    </AuthContext.Provider>,
  );

  // Wait for the decks to render
  await waitFor(() => {
    expect(screen.getByText("Deck 1")).toBeInTheDocument();
  });

  // Find and click the kebab menu for the first deck
  const kebabMenus = screen.getAllByTestId("kebab-menu-deck-options");
  expect(kebabMenus.length).toBeGreaterThan(0);

  const firstKebabMenu = kebabMenus[0];

  userEvent.click(firstKebabMenu.querySelector("button"));

  const confirmSpy = jest
    .spyOn(window, "confirm")
    .mockImplementation(() => true);
  // Wait for the dropdown menu and click the toggle visibility item
  await waitFor(() => {
    const toggleVisibilityOption = screen.getByText("Set to Private");
    userEvent.click(toggleVisibilityOption);
  });

  await waitFor(() => {
    // Wait for the window confirm dialog to appear
    expect(confirmSpy).toHaveBeenCalledWith(
      "Are you sure you want to change the visibility of this deck?",
    );
  });

  // Wait for the visibility to be toggled
  await waitFor(() => {
    expect(updateDeckVisibility).toHaveBeenCalledWith(1, false);
  });
});

test("handles delete deck", async () => {
  render(
    <AuthContext.Provider value={{ isUserFetched: true }}>
      <Router>
        <Decks />
      </Router>
    </AuthContext.Provider>,
  );

  await waitFor(() => {
    expect(screen.getByText("Deck 1")).toBeInTheDocument();
  });

  const kebabMenus = screen.getAllByTestId("kebab-menu-deck-options");
  expect(kebabMenus.length).toBeGreaterThan(0);

  const firstKebabMenu = kebabMenus[0];
  userEvent.click(firstKebabMenu.querySelector("button"));

  await waitFor(() => {
    const deleteOption = screen.getByText("Delete");
    userEvent.click(deleteOption);
  });
  const confirmSpy = jest
    .spyOn(window, "confirm")
    .mockImplementation(() => true);
  await waitFor(() => {
    // Wait for the window confirm dialog to appear
    expect(confirmSpy).toHaveBeenCalledWith(
      "Are you sure you want to delete this deck?",
    );
  });
  await waitFor(() => {
    expect(deleteDeck).toHaveBeenCalledWith(1);
    expect(screen.queryByText("Deck 1")).not.toBeInTheDocument();
  });
});
