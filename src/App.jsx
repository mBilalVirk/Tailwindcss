import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";

import Tailwind from "./components/Tailwind";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Tailwind />
    </>
  );
}

export default App;
