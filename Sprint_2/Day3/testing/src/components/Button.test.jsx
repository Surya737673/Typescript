import Button from './Button'
import App from '../App'
import {render,screen,fireEvent} from "@testing-library/react"
import renderer from 'react-test-renderer'

xdescribe("Button Tests",function (){
    it("it should have button in dom",function(){
       render(<Button>Click me</Button>)
       let button =screen.getByText("Click me");
       expect(button).toBeInTheDocument()
     })
     it("it should render based on testid",function(){
        render(<Button>Click me</Button>)
        let button =screen.getByTestId("cButton");
        expect(button).toBeInTheDocument()
      })
      it("it should render empty button",function(){
        render(<Button></Button>)
        let button =screen.getByTestId("cButton");
        expect(button).toBeEmptyDOMElement()
      })
      it("it should change theme",function(){
        render(<App></App>)

        let h3=screen.getByText("Theme is light");
        expect(h3).toHaveTextContent("light");

        let themeButton =screen.getByText("change theme");
        fireEvent.click(themeButton);
        expect(h3).toHaveTextContent("dark")
      })
      it("should call given function",function(){
          const mockfn = jest.fn();
          render(<Button onClick={mockfn}>Click me</Button>);

          const btn=screen.getByText('Click me');
          fireEvent.click(btn);
          expect(mockfn).toBeCalledTimes(1)
      })

      it("should match snapshot",function(){
          
      })
})
