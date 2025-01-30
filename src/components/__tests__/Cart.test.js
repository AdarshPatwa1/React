import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => 
    Promise.resolve({
        jsom: () => Promise.resolve(MOCK_DATA_NAME),
    })
);


it("Should load Restaurant Menu Component", async () => {

    await act(async() => render(
    <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        <RestaurantMenu/>
        <Cart/>
        </Provider>
    </BrowserRouter>    
    ));

    const accordianHeader = screen.getByText("Veg Pizza (14)");

    fireEvent.click(accordianHeader);

    // screen.getAllByTestId("foodItems").length;

    expect(screen.getAllByTestId("foodItems").length).toBe(14);

    const addBtns = screen.getByRole("button", {name: "Add +"});
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).length.toBeInTheDocument();

    fireEvent.click(addBtns[1]);

    expect(screen.getByText("Cart - (2 items)")).length.toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(14);

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}));

});