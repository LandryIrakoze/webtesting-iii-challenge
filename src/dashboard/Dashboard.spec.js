// Test away
import React from "react";
import renderer from "react-test-renderer"; 
import { render, fireEvent } from "@testing-library/react";

import Dashboard from './Dashboard';
import Display from "../display/Display";
import Controls from "../controls/Controls";

describe("<Dashboard />", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<Dashboard />);
        expect(tree.toJSON()).toMatchSnapshot();
    })
})

describe("<Render />", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<Display />)
        expect(tree.toJSON()).toMatchSnapshot();
    })
})

describe("<Control />", () => {
    it("matches snapshot", () => {
        const tree = renderer.create(<Controls />)
        expect(tree.toJSON()).toMatchSnapshot();
    })
})



// ### Dashboard

// - shows the controls and display

// ## Stretch Problem

// This section is **optional** and not counted towards MVP. Start working on it after you're done with the main assignment.

// - add `Redux` and [read this example in the docs](https://testing-library.com/docs/example-react-redux) to learn how to write tests for it.