import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

function Article(){
  return (
    
      <p>please pass this test</p>
   
  )
}
export default Article;

test("displays the text 'please pass this test'", () => {
  render(<Article />);

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});