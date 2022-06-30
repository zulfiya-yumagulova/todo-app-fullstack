import Input from "./Components/Input.js";
import ListTodos from "./Components/ListTodos.js";
// import IMG from "./Images/well-done.png";
import Image from "./Components/Image.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <div className="image">
        <img src={IMG}></img>
      </div> */}
      <Image />
      <Input />
      <ListTodos />
    </div>
  );
}

export default App;
