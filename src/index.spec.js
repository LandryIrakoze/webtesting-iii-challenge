import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";

import Index from "./index";

describe("<index />", () => {
  // 2. write this test
  it("matches snapshot", () => {
    const tree = renderer.create(<Index />); 

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});