import { render,screen } from "@testing-library/react";
import RestaurantCard from "../Restaurantcard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render RestauranrCard component with props Data", () => {

    render(<RestaurantCard resData = {MOCK_DATA} />);

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument();
});