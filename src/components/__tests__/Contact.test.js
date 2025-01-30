import { render, screen } from "@testing-library/react"
import Contact from "../Contact";
import "@testing-library/jest-dom";

// test("Should load contact us component", () => {

//     render(<Contact/>);

//     const heading = screen.getByRole("heading");

//     //Assertion
//     expect(heading).toBeInTheDocument();
// });


describe("Contact Us Test cases", () =>{

    //Helper functions
    beforeAll(() => {
        //console.log("Before All");
        
    });
    afterAll(() => {
        //console.log("After All");
        
    });
    beforeEach(() => {
        //console.log("Before Each");
        
    });
    afterEach(() => {
        //console.log("After Each");
        
    });

    // decribe it/test is used to group the test caese according to section

    // you can write test as well as it. there is no difference in it
it("Should load contact us component", () => {

    render(<Contact/>);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
});

it("Should load button inside contact us component", () => {

    render(<Contact/>);

    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
});

it("Should load input inside contact us component", () => {

    render(<Contact/>);

    const input = screen.getByPlaceholderText("name");

    //Assertion
    expect(input).toBeInTheDocument();
});

it("Should load 2 input boxes in the contact us component", () => {
    
    render(<Contact/>);

    const inputBoxes = screen.getAllByRole("textbox");

    //Assertion
    expect(inputBoxes.length).toBe(2);
    expect(inputBoxes.length).not.toBe(3);

    
})

});