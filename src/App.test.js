import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "./App";

describe("Text-case coverter", () => {
  it("should convert the input string into uppercase", () => {
    render(<App />);

    const inputField = screen.getByRole("textbox", {
      name: /text to be converted:/i,
    });
    const uppercaseRadio = screen.getByRole("radio", {
      name: /convert text to uppercase/i,
    });
    const submitBtn = screen.getByRole("button", { name: /submit/i });

    const output = screen.getByRole("status", { name: /Converted text:/i });
    const textInput = "This is some text.";
    const uppercaseOutputText = "THIS IS SOME TEXT.";

    userEvent.clear(inputField);
    userEvent.type(inputField, textInput);
    userEvent.click(uppercaseRadio);
    userEvent.click(submitBtn);
    expect(output).toHaveTextContent(uppercaseOutputText);
  });

  it("should convert the input string into lowercase", () => {
    render(<App />);

    const inputField = screen.getByRole("textbox", {
      name: /text to be converted:/i,
    });
    const lowercaseRadio = screen.getByRole("radio", {
      name: /convert text to lowercase/i,
    });
    const submitBtn = screen.getByRole("button", { name: /submit/i });

    const output = screen.getByRole("status", { name: /Converted text:/i });
    const textInput = "This is some text.";
    const lowercaseOutputText = "this is some text.";

    userEvent.clear(inputField);
    userEvent.type(inputField, textInput);
    userEvent.click(lowercaseRadio);
    userEvent.click(submitBtn);
    expect(output).toHaveTextContent(lowercaseOutputText);
  });
});
