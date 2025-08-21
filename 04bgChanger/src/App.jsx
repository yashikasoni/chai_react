import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className=" flex flex-wrap justify-center  gap-3 shadow-lg bg-white  px-3 py-2 rounded-xl">
          <button
            className="bg-red-500 w-20 h-10 rounded-xl text-white text-2xl"
            onClick={() => setColor("red")}
          >Red</button>
          <button
            className="bg-purple-500 w-20 h-10 rounded-xl text-white text-2xl"
            onClick={() => setColor("purple")}
          > Purple</button>
          <button
            className="bg-pink-300 w-20 h-10 rounded-xl text-white text-2xl"
            onClick={() => setColor("lightpink")}
          >Pink</button>
          <button
            className="bg-pink-400 w-20 h-10 rounded-xl text-white text-2xl"
            onClick={() => setColor("lightcoral")}
          >Coral</button>
          <button
            className="bg-green-500 w-20 h-10 rounded-xl text-white text-2xl"
            onClick={() => setColor("lightgreen")}
          > Green</button>
          <button
            className="bg-blue-400 w-20 h-10 rounded-xl text-white text-2xl"
            onClick={() => setColor("lightblue")}
          >Blue</button>
          <button
            className="bg-yellow-500 w-20 h-10 rounded-xl text-white text-2xl"
            onClick={() => setColor("yellow")}
          >Yellow</button>
          <button
            className="bg-black w-20 h-10 rounded-xl text-white text-2xl"
            onClick={() => setColor("black")}
          >Black</button>
        </div>
      </div>
    </div>
  );
}

export default App;
