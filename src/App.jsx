import "./App.css";
import MyGoal from "./components/myGoals";
import SearchPage from "./components/Search";
import HomePage from "./components/HomePage";
import { useState } from "react";
import Main from "./main";

function App() {
  const [showMain, setShowMain] = useState(true);
  const handleButtonClick = () => {
    setShowMain(!showMain);
  };

  if (showMain) {
    return <Main onButtonClick={handleButtonClick} />;
  } else {
    return <HomePage />;
  }
}

export default App;
