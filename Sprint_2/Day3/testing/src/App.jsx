import './App.css';
// import Button from './components/Button';
import Counter from './components/Counter';
import { Slider } from './components/Slider';

function App() {
  return (
    <div className="App">
      <Counter/>
      <Slider/>
    </div>
  );
}
// <h3>Theme is {theme}</h3>
//      <Button>click me</Button>
//      <Button onClick={()=>{
//        setTheme(theme==="light" ? "dark" : "light")
//      }} >change theme</Button>
export default App;
