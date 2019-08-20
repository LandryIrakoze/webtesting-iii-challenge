// Test away!
import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/react";

import Display from './Display';
import { queryAllByTestId } from "react-testing-library";

describe("<Display />", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<Display />);
        expect(tree.toJSON()).toMatchSnapshot();
    })

    it("displays open and unlocked", () => {
        const { queryByText } = render(<Display/>)

        expect(queryByText(/unlocked/i)).toBeTruthy()
        expect(queryByText(/open/i)).toBeTruthy()
    })

    it("should have red class when locked or closed", () => {
        const { queryAllByTestId } = render(<Display closed={true} locked={true} />);
        expect(queryAllByTestId("led red-led")).toBeTruthy()
    })
    
    it("should have green class when unlocked or open", () => {
        const { queryAllByTestId } = render(<Display closed={false} locked={false} />);
        expect(queryAllByTestId("led red-green")).toBeTruthy()
    })
    
})

// describe("toggledLocked", () => {
//     it('should toggle the locked state and passes it into controls', () => {
//         const open = 'Open';
//         const closed = 'Closed';

//         const unlocked = 'Unlocked';
//         const locked = 'Locked';

//         const { getByText } = render(<Display locked={locked} closed={open} />)
//         const { getByText } = render(<Display locked={locked} closed={closed} />)

//         const { getByText } = render(<Display locked={unlocked} closed={open} />)
//         const { getByText } = render(<Display locked={unlocked} closed={closed} />)
//     })
// }) 



// ### Display Component

// - displays if gate is open/closed and if it is locked/unlocked
// - displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise
// - displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise
// - when `locked` or `closed` use the `red-led` class
// - when `unlocked` or `open` use the `green-led` class