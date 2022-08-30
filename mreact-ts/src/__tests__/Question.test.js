// import ReactDOM from 'react-dom';
import Question from "../components/Question";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';


test("question component mounted", () => {
    const container = document.createElement("div");
    render(<Question />, container);
})

test("first question rendered properly", () => {
    const container = document.createElement("div");
    render(<Question />, container);
    const question = screen.getAllByTestId("header-question");
    // expect(container.textContent).not.toMatch('No questions');
    expect(question[0].textContent).toMatch("What is always coming but never arrives?");
})


test('question toggle changed className correctly', () => {
    // const { getAllByRole, getByRole, queryByLabelText, getByLabelText, debug } = render(<Question />);
    const { debug } = render(<Question />);
    const toggleBtn = screen.getAllByTestId("toggle-btn");
    // // const toggleBtn = container.getAllByRole('button', { name: /toggle/i });
    userEvent.click(toggleBtn[0]);
    const answer = screen.getAllByTestId('answer')[0];
    expect(answer.className).toMatch("answerQ");
    userEvent.click(toggleBtn[0]);
    expect(answer.className).toMatch("answerQ blur");
    // debug();
});
