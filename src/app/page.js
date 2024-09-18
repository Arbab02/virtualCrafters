import Image from "next/image";
import Slider from "/src/components/Slider.jsx"
import Stats from "/src/components/Stats.jsx"
import TechStack from "/src/components/TechStack.jsx"
import GraphicDesignStack from "/src/components/GraphicDesignStack.jsx"



export default function Home() {
  return (
    <>
 <Slider/>
  <Stats/>
  <TechStack/>
  <GraphicDesignStack/>
 
 
   
    </>
  );
}
