import { fireEvent,render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";


describe("Testing App",()=>{

  it.only("input should be in the dom",()=>{
    render(<App/>)
    let input=screen.getByTestId("input")
    expect(input).toBeInTheDocument();
  })
  it.only("input should have vlaue",()=>{
    render(<App/>)
    let input=screen.getByTestId("input")
    userEvent.type(input,"surya")
    expect(screen.getByTestId("input")).toHaveValue("surya")
  })
  it.only("show password onclick",()=>{
    render(<App/>)
    let icon=screen.getByTestId("ico")
    let input=screen.getByTestId("input1")
    expect(input).toHaveAttribute("type","password")
    fireEvent.click(icon)
    expect(input).toHaveAttribute("type","text")
  })

})

