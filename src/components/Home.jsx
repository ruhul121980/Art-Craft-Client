import React from "react";
import Slid from "./Slid"; 
import CraftItemSection from "./CraftItemSection";
import CraftCategory from "./CraftCategory";


export default function Home() {
  return (
    <div>
      <h2 className="text-2xl"></h2>
      <Slid />
      <CraftItemSection></CraftItemSection>
      <CraftCategory></CraftCategory>
      
      
    </div>
  );
}
