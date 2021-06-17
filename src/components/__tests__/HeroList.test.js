import React from "react";
import {render, fireEvent} from "@testing-library/react";
import testData from "./testData.json";
import HeroList from "../HeroList";

  
describe("HeroList Test", () => {
    beforeAll(() => {
        global.matchMedia = global.matchMedia || function () {
            return {
                addListener: jest.fn(),
                removeListener: jest.fn(),
            };
        };
    });

    test("renders component", async () => {
        const {getByText} = render(<HeroList heroArray={testData.results}/>)
        const linkElement = getByText(/Joker/i);
        expect(linkElement).toBeInTheDocument();
    });

    test("clicking on name shows more info", async () => {
        const {getByText} = render(<HeroList heroArray={testData.results}/>)
        fireEvent.click(getByText(/Joker/i));
        const linkElement = getByText(/Full Name: Jack Napier/i);
        expect(linkElement).toBeInTheDocument();
    });
})