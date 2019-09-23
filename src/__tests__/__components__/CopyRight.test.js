import React from "react";
import ReactDOM from "react-dom";
import CopyRight from "../../components/CopyRight";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
      <CopyRight />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});