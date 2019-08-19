// Test away!
import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/react";

import Display from './Display';

describe("<Display />", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<Display />);
        expect(tree.toJSON()).toMatchSnapshot();
    })

    it("displays closed if closed prop is true", () => {
        const statusMock = true;

        const { getByText } = render(<Display closed={statusMock} />)
    })
})

// ### Display Component

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class