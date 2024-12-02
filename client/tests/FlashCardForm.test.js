import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import FlashcardForm from "../src/components/FlashcardForm";
import { AuthContext } from "../src/auth/provider/AuthProvider";
import { useParams } from "react-router-dom";
import getFlashcardById from "../src/apiClient/getFlashcardById";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
}));
jest.mock("../src/apiClient/getFlashcardById");

const mockUseParams = useParams;


const currentUser = { id: 999, name: "Test User" };

const renderComponent = (isEditing = false) => {
  return render(
    <AuthContext.Provider value={{ isUserFetched: true, currentUser }}>
      <Router>
        <FlashcardForm isEditing={isEditing} />
      </Router>
    </AuthContext.Provider>
  );

}

beforeEach(() => {
  jest.clearAllMocks();
  mockUseParams.mockReturnValue({ deckId: "1234" });
  getFlashcardById.mockResolvedValue({ question: "Test Question", answer: "Test Answer" });

});


test("renders create flashcard form", async () => {
  renderComponent();
  await waitFor(() => {
    const elements = screen.getAllByText("Create Flashcard");
    console.log("elements found", elements); 
    const button = elements.find((element) => element.tagName === "BUTTON");
    const heading = elements.find((element) => element.tagName === "H2");
    console.log("button", button, "heading", heading);
    expect(button).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
  });
});




test("getFlashcardById is called when the form is in edit mode", async () => {
  mockUseParams.mockReturnValue({ deckId: "111", flashcardId: "222" });
  renderComponent(true);
  await waitFor(() => {
    expect(getFlashcardById).toHaveBeenCalledTimes(1);
    expect(getFlashcardById).toHaveBeenCalledWith("222");
  });
});