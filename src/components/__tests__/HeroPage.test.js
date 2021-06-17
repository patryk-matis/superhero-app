import React from "react";
import {render, fireEvent} from "@testing-library/react";
import HeroPage from "../pages/HeroPage";

  
describe("HeroPage Test", () => {
    beforeAll(() => {
        global.matchMedia = global.matchMedia || function () {
            return {
                addListener: jest.fn(),
                removeListener: jest.fn(),
            };
        };
    });

    test("renders component", async () => {
        const {getByText} = render(<HeroPage/>)
        const linkElement = getByText(/Superhero search/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("input & submit working", async () => {
        const spy = jest.spyOn(console, "log");
        const {getByPlaceholderText, getByText} = render(<HeroPage/>)
        const input = getByPlaceholderText(/type superhero name here/i)
        fireEvent.change(input, {target: {value: 'joker'}});
        fireEvent.click(getByText(/Search./i));
        expect(spy).toHaveBeenCalledTimes(1);
    });
})