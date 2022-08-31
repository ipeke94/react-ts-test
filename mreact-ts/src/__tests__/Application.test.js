import { validation } from '../components/Validation';
import { Selection } from '../components/Application';
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Facts } from "../components/Application";
import { fetchFacts } from "../components/Fact";


jest.mock('../components/Validation');

jest.mock('../components/Fact', () => ({
    fetchFacts: jest.fn()
}));

const facts = [{
    id: 1,
    fact:
        'Dogs can sniff at the same time as breathing'
},
];

test("facts resolves and renders correctly", async () => {

    fetchFacts.mockImplementation(() => Promise.resolve(facts));

    const mockData = await fetchFacts();

    render(<Facts fact={mockData[0].fact} />)
    const factText = screen.getByTestId("fact-text")
    expect(factText.textContent).toBe('Dogs can sniff at the same time as breathing');

});

test('form validation works properly', () => {
    const onSubmit = jest.fn();
    validation.mockReturnValueOnce('error');
    render(<Selection onSubmit={onSubmit} />);
    userEvent.click(screen.getByTestId("app-fact-btn"));
    const errorText = screen.getByTestId('error-text');
    expect(errorText.textContent).toBe('error');
});

test('form submit button triggers onSubmit function', () => {
    const onSubmit = jest.fn();
    validation.mockReturnValueOnce('error');
    render(<Selection onSubmit={onSubmit} />);
    userEvent.click(screen.getByTestId("app-fact-btn"));
    expect(onSubmit).toHaveBeenCalled();
});


test('default error message works properly', () => {
    render(<Selection />);
    const errorText = screen.getByTestId('error-text');
    expect(errorText.textContent).toBe('');
});

