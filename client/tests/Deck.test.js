import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import {
  BrowserRouter as Router,
  useNavigate,
  useParams,
} from "react-router-dom";
import { AuthContext } from "../src/auth/provider/AuthProvider";
import Deck from "../src/components/Deck";
import userEvent from "@testing-library/user-event";
import getFlashcards from "../src/apiClient/getFlashcards";
import deleteFlashcard from "../src/apiClient/deleteFlashcard";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
  useParams: jest.fn().mockReturnValue({ deckId: 1 }),
}));
jest.mock("../src/apiClient/getFlashcards");
jest.mock("../src/apiClient/deleteFlashcard");

beforeEach(() => {
  jest.clearAllMocks();
  getFlashcards.mockResolvedValue({
    deckTitle: "Deck 1",
    flashcards: [
      { id: 1, question: "Q1", answer: "A1" },
      { id: 2, question: "Q2", answer: "A2" },
      { id: 3, question: "Q3", answer: "A3" },
    ],
  });
  deleteFlashcard.mockResolvedValue();
});

test("renders Deck component", async () => {
  render(
    <AuthContext.Provider value={{ isUserFetched: true }}>
      <Router>
        <Deck />
      </Router>
    </AuthContext.Provider>,
  );

  await waitFor(() => {
    expect(screen.getByText("Q1")).toBeInTheDocument();
    expect(screen.getByText("A1")).toBeInTheDocument();
  });
});

test("clicking Next button displays next flashcard", async () => {
  render(
    <AuthContext.Provider value={{ isUserFetched: true }}>
      <Router>
        <Deck />
      </Router>
    </AuthContext.Provider>,
  );

  await waitFor(() => {
    userEvent.click(screen.getByText("Next"));
    expect(screen.getByText("Q2")).toBeInTheDocument();
    expect(screen.getByText("A2")).toBeInTheDocument();
  });
});

test("clicking Previous button displays previous flashcard", async () => {
  render(
    <AuthContext.Provider value={{ isUserFetched: true }}>
      <Router>
        <Deck />
      </Router>
    </AuthContext.Provider>,
  );

  await waitFor(() => {
    userEvent.click(screen.getByText("Next"));
    userEvent.click(screen.getByText("Previous"));
    expect(screen.getByText("Q1")).toBeInTheDocument();
    expect(screen.getByText("A1")).toBeInTheDocument();
  });
});

test("clicking Edit button navigates to EditFlashcard page", async () => {
  const navigate = jest.fn();
  useNavigate.mockReturnValue(navigate);

  render(
    <AuthContext.Provider value={{ isUserFetched: true }}>
      <Router>
        <Deck />
      </Router>
    </AuthContext.Provider>,
  );

  await waitFor(() => {
    const hamburger = screen.getByText("⋮");
    userEvent.click(hamburger);
  });

  await waitFor(() => {
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });

  const spy = jest.spyOn(window, "confirm").mockImplementation(() => true);
  await waitFor(() => {
    userEvent.click(screen.getByText("Edit"));
    expect(spy).toHaveBeenCalled;

    // /decks/${deckId}/flashcards/${flashcardId}/edit
    expect(navigate).toHaveBeenCalledWith("/decks/1/flashcards/1/edit");
  });
});

test("clicking Delete button deletes flashcard", async () => {
  render(
    <AuthContext.Provider value={{ isUserFetched: true }}>
      <Router>
        <Deck />
      </Router>
    </AuthContext.Provider>,
  );
  await waitFor(() => {
    const hamburger = screen.getByText("⋮");
    userEvent.click(hamburger);
  });

  await waitFor(() => {
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  const spy = jest.spyOn(window, "confirm").mockImplementation(() => true);
  await userEvent.click(screen.getByText("Delete"));

  await waitFor(() => {
    expect(spy).toHaveBeenCalled();
    expect(deleteFlashcard).toHaveBeenCalled();
  });
});
