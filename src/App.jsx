import { useState } from "react";
import logo from "./logo.svg";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import "./App.css";
import CharacterCounter from "./TextComponents/CharacterCounter";
import TodoList from "./TodoComponents/TodoList";
import DebugObserver from "./DebugObserver";

function App() {
  const [count, setCount] = useState(0);

  return <div className="App">
    <RecoilRoot>
      <DebugObserver/>
    {/* <CharacterCounter/> */}
    <TodoList/>
    </RecoilRoot>

  </div>;
}

export default App;
