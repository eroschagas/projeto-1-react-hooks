import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TextInput } from ".";

describe("<TextInput />", () => {
  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={"testando"} />);
    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe("testando");
  });
  it("should call handleChange function at each key press", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={"the value"} />);
    const input = screen.getByPlaceholderText(/type your search/i);
    const value = "the value";
    userEvent.type(input, value);
    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });
});
