import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../src/auth/provider/AuthProvider";
import getUserDecks from "../src/apiClient/getUserDecks";
import deleteDeck from "../src/apiClient/deleteDeck";
import updateDeckVisibility from "../src/apiClient/updateDeckVisibility";
import Decks from "../src/components/Decks";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => jest.fn(),
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
        }
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
        </AuthContext.Provider>
    );
    await waitFor(() => {
        expect(screen.getByText("Deck 1")).toBeInTheDocument();

        // click the next page button to test the pagination
        screen.getByText("1").click();
        expect(screen.getByText("Deck 2")).toBeInTheDocument();
    });
});


