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

    it("lock to toggle when clicked", () => {
        const mockClose = jest.fn()
        const { getByText } = render(<Controls toggleLocked={mockClose} locked={true} closed={true} />)
        fireEvent.click(getByText("Unlock Gate"))
        expect(mockClose).toHaveBeenCalled();
    })

    it("open/close to toggle when clicked", () => {
        const mockClose = jest.fn()
        const { getByText } = render(<Controls toggleLocked={mockClose} locked={false} closed={false} />)
        fireEvent.click(getByText("Close Gate"))
        expect(mockClose).toHaveBeenCalled();
    })

    it("can determine if button is disabled from property", () => {
        const { getByText } = render(<Controls />)
        expect(getByText("Lock Gate")).disabled.toBeTruthy();
    })
})



// ### Controls Component

// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open

// ### Gate

// - defaults to `unlocked` and `open`
// - cannot be closed or opened if it is locked