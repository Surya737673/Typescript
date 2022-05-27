import Counter from "./Counter"
import {render,screen,fireEvent} from "@testing-library/react"

xdescribe("Testing Counter",()=>{
    it("Should have increment button",()=>{
        render(<Counter/>)
        let incBtn=screen.getByText("ADD")
        expect(incBtn).toBeInTheDocument();
    })
    it("Should have decrement button",()=>{
        render(<Counter/>)
        let decBtn=screen.getByText("REDUCE")
        expect(decBtn).toBeInTheDocument();
    })
    it("Should increment on click",()=>{
        render(<Counter/>)
        let h2=screen.getByTestId("count")
        let incBtn=screen.getByText("ADD")
        expect(h2).toHaveTextContent("0")
        fireEvent.click(incBtn)
        expect(h2).toHaveTextContent("5")
    })
    it("Should decrement on click",()=>{
        render(<Counter/>)
        let h2=screen.getByTestId("count")
        let decBtn=screen.getByText("REDUCE")
        expect(h2).toHaveTextContent("0")
        fireEvent.click(decBtn)
        expect(h2).toHaveTextContent("-5")
    })
})