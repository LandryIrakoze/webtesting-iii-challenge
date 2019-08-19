// Test away!
import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/react";

import Controls from './Controls';

describe("<Controls />", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<Controls />);
        expect(tree.toJSON()).toMatchSnapshot();
    })

    // it("expects ")
})

// describe("toggleClosed", () => {
//     it('should toggle the closed state and passes it into controls', () => {
//         const unlocked = 'Unlocked';
//         const locked = 'Locked';

//         const { getByText } = render(<Display  />)
//     })
// })

// describe("toggledLocked", () => {
//     it('should toggle the locked state and passes it into controls', () => {
//         const display = true ? 'Closed' : 'Open';
//     })
// }) 
// describe("toggleClosed", () => {
//     it('should toggle the closed state and passes it into controls', () => {
//         const display = true ? 'Closed' : 'Unlocked'; 
//     })
// })

// ### Controls Component

// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open

// ### Gate

// - defaults to `unlocked` and `open`
// - cannot be closed or opened if it is locked