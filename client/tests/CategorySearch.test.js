import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CategorySearch from "../src/components/CategorySearch";
import getCategories from "../src/apiClient/getCategories";

jest.mock("../src/apiClient/getCategories");

beforeEach(() => {
  jest.clearAllMocks();
  getCategories.mockResolvedValue([
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
  ]);
});

test("renders CategorySearch component", async () => {
  render(<CategorySearch searchTerm="Category" />);
  await waitFor(() => {
    expect(getCategories).toHaveBeenCalledTimes(1);
  });
});
