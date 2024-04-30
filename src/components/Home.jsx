import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle"; 
import Slid from "./Slid"; 
import CraftItemSection from "./CraftItemSection";
import CraftCategory from "./CraftCategory";
import Welcome from "./Welcome";
import Frequently from "./Frequently";
import '../App.css';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`bg-gray-100 dark:bg-gray-900 ${darkMode ? 'dark' : ''}`}>
      <ThemeToggle /> 
      <h2 className="text-2xl"></h2>
      <Slid />
      <div className="w-11/12 mx-auto">
        <CraftItemSection></CraftItemSection>
        <CraftCategory></CraftCategory>
        <Welcome></Welcome>
        <Frequently></Frequently>
      </div>
    </div>
  );
}
