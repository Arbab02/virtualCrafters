import Image from "next/image";
import Hero from "/src/components/Hero.jsx"
import Stats from "/src/components/Stats.jsx"
import TechStack from "/src/components/TechStack.jsx"
import GraphicDesignStack from "/src/components/GraphicDesignStack.jsx"



export default function Home() {
  return (
    <>
 <Hero/>
  <Stats/>
  <TechStack/>
  <GraphicDesignStack/>
 
 
   
    </>
  );
}
