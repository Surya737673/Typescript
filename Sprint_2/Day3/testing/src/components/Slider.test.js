import { fireEvent, render,screen } from "@testing-library/react"
import { Slider } from "./Slider"


describe("Test Slider",()=>{
    it("should have next button",()=>{
        render(<Slider/>)
        let next=screen.getByText("Next")
        expect(next).toBeInTheDocument()
    })
    it("should have previous button",()=>{
        render(<Slider/>)
        let next=screen.getByText("Next")
        fireEvent.click(next)
        let pre=screen.getByText("Pre")
        expect(pre).toBeInTheDocument()
    })
    it("Next data should come",()=>{
        render(<Slider/>)
        let next=screen.getByText("Next")
        let question=screen.getByTestId("question")
        fireEvent.click(next)
        expect(question).toHaveTextContent("Dusra Sawal")
    })
    xit("Should disable next button",()=>{
        render(<Slider/>)
        let next=screen.getByText("Next")
        fireEvent.click(next)
        fireEvent.click(next)
        fireEvent.click(next)
        expect(next).toBeUndefined()
    })
})