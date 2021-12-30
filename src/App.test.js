import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Search from "./components/Search";
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('click the button search calls evente handler once', () => {

  const note = {
    content: 'This is a important test',
    important: true
  }

  const mockSearch = jest.fn()

  const componentSearch = render(<Search search={note} toggleImportance={mockSearch} />) 

  const button = componentSearch.getByText('Make not important')

  fireEvent.click(button)

  expect(mockSearch).toHaveBeenCalledTimes(1)
  
})