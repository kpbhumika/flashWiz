import getFlashcards from "../src/apiClient/getFlashcards";
import PublicFlashcards from "../src/components/PublicFlashcards";
import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ deckId: 1 }),
}));

jest.mock("../src/apiClient/getFlashcards");

beforeEach(() => {
  jest.clearAllMocks();
  getFlashcards.mockResolvedValue({
    deckTitle: "Deck 1",
    flashcards: [
      {
        question: "Question 1",
        answer: "Answer 1",
      },
      {
        question: "Question 2",
        answer: "Answer 2",
      },
      {
        question: "Question 3",
        answer: "Answer 3",
      },
    ],
  });
});

test("renders PublicFlashcards component", async () => {
  render(<PublicFlashcards />);
  await waitFor(() => {
    expect(screen.getByText("Flashcards for Deck 1")).toBeInTheDocument();
    expect(screen.getByText("Question 1")).toBeInTheDocument();
    expect(screen.queryByText("Question 2")).not.toBeInTheDocument();
  });
});

test("renders next flashcard", async () => {
  render(<PublicFlashcards />);
  await waitFor(() => {
    expect(screen.getByText("Question 1")).toBeInTheDocument();
  });
  screen.getByText("Next").click();
  await waitFor(() => {
    expect(screen.getByText("Question 2")).toBeInTheDocument();
  });
});
