// import ReactDOM from 'react-dom';

import SimpleCounter from "../components/SimpleCounter";
import { render, screen } from "@testing-library/react";

test("simple counter component mounted", () => {
    render(<SimpleCounter incident="test" />);
})

test("incident props worked properly", () => {
    render(<SimpleCounter incident="test" />);
    const header = screen.getByTestId("header")
    expect(header.textContent).toBe('Simple Counter test');

});
