import React from "react";
import { render, screen } from "@testing-library/react";
import { Quizzer } from "./Quizzer";
import quizzes from "./quizzes.json";
//import userEvent from "@testing-library/user-event";

describe("Quizzer Tests", () => {
    beforeEach(() => {
        render(<Quizzer />);
    });
    //Testing that quizzes are displayed
    test("The Quizzes Display", () => {
        expect(screen.getByText(quizzes[0].title)).toBeInTheDocument();
        expect(screen.getByText(quizzes[1].title)).toBeInTheDocument();
        expect(screen.getByText(quizzes[2].title)).toBeInTheDocument();
        expect(screen.getByText(quizzes[3].title)).toBeInTheDocument();
        expect(screen.getByText(quizzes[4].title)).toBeInTheDocument();

        expect(screen.getByText(quizzes[0].description)).toBeInTheDocument();
        expect(screen.getByText(quizzes[1].description)).toBeInTheDocument();
        expect(screen.getByText(quizzes[2].description)).toBeInTheDocument();
        expect(screen.getByText(quizzes[3].description)).toBeInTheDocument();
        expect(screen.getByText(quizzes[4].description)).toBeInTheDocument();

        //const numQuestionsText = screen.queryAllByText()
        expect(screen.queryAllByText("Number of Questions: 3")).toHaveLength(2);
        expect(screen.queryAllByText("Number of Questions: 4")).toHaveLength(1);
        expect(screen.queryAllByText("Number of Questions: 5")).toHaveLength(2);
    });

    test("The Show Button Displays Questions", () => {
        const showButton = screen.getAllByRole("button", {
            name: /OpenClose Questions/i
        });

        showButton[1].click();
        expect(
            screen.queryByText(quizzes[1].questions[0].name)
        ).toBeInTheDocument();
        expect(
            screen.queryByText(quizzes[1].questions[1].name)
        ).toBeInTheDocument();
        expect(
            screen.queryByText(quizzes[1].questions[2].name)
        ).toBeInTheDocument();
        showButton[0].click();
        expect(
            screen.queryByText(quizzes[1].questions[3].name)
        ).toBeInTheDocument();
        expect(
            screen.queryByText(quizzes[1].questions[0].body)
        ).toBeInTheDocument();
        expect(
            screen.queryByText(quizzes[1].questions[1].body)
        ).toBeInTheDocument();
        expect(
            screen.queryByText(quizzes[1].questions[2].body)
        ).toBeInTheDocument();
        showButton[0].click();
        expect(
            screen.queryByText(quizzes[1].questions[3].body)
        ).toBeInTheDocument();
    });
    /*
    test("Entering the right answer makes it correct.", () => {
        const showButton = screen.getAllByRole("button", {
            name: /OpenClose Questions/i
        });
        showButton[0].click();
        const inputBox = screen.getAllByRole("textbox");
        userEvent.type(inputBox[0], " ");
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        //expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
        userEvent.type(inputBox[1], "4");
        showButton[1].click();
        expect(screen.getByText(/✔️/i)).toBeInTheDocument();
        expect(screen.queryByText(/❌/i)).not.toBeInTheDocument();
    });
    test("Entering the wrong answer makes it incorrect.", () => {
        const inputBox = screen.getAllByRole("textbox", {
            name: /shortAnswer/i
        });
        userEvent.type(inputBox[0], "1");
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
        userEvent.type(inputBox[1], "5");
        expect(screen.getByText(/❌/i)).toBeInTheDocument();
        expect(screen.queryByText(/✔️/i)).not.toBeInTheDocument();
    });
    */
});
