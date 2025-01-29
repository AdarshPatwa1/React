import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import  appStore  from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("Should load Header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    // const loginButton = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();

});

it("Should load Header component with a cart items 0 ", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0 items)");  // /Cart/ is a Rejex

    expect(cartItems).toBeInTheDocument();

});
  
it("Should load Header component with a cart item ", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);  // /Cart/ is a Rejex

    expect(cartItems).toBeInTheDocument();

});

it("Should change login button to logout onclick", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();

});