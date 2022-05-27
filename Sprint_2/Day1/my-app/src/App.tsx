import './App.css';
// import ReactTabs from './comopnents/Tabs';
import PinBox from './comopnents/PinBox';

function App() {
  const data = [
    {
      desc:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      title: "Open Me 1",
    },
    {
      desc:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      title: "Open Me 2",
    },
    {
      desc:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      title: "Open Me 3",
    },
    {
      desc:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      title: "Open Me 4",
    },
    {
      desc:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
      title: "Open Me 5",
    },
  ];
  const handleChange=(otp:string)=>{
    console.log(otp)
  }
  return (
    <div className="App">
      <PinBox length={5} onChange={handleChange}/>
      {/* <ReactTabs data={data}/> */}
    </div>
  );
}

export default App;