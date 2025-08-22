import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [noAllowed, setNoAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  // Using useRef to keep a reference to the password input field
  // This can be useful if you want to focus on the input or manipulate it directly later
  // However, in this case, it's not being used actively in the code
  // but it's kept here as per the original context.
  // If you don't need it, you can remove this line.
  const passwordRef = useRef();

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if ("noAllowed") {
      str += "0123456789";
    }
    if ("charAllowed") {
      str += "!@#$%^&*()_+";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, noAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20); // For mobile devices
    window.navigator.clipboard.writeText(Password);
   },[Password]) 
    

  useEffect(() => {
    passwordgenerator()
  }, [passwordgenerator]); 
  return (
    <div className="item-center justify-center  pl-100">
      <div className="w-full max-w-md max-auto rounded-xl px-4 my-8 text-white bg-gray-700">
        <h1 className="text-2xl text-center text-white my-3">
          Password Generator
        </h1>
        <div className="flex rounded-lg overflow-hidden mb-4  bg-gray-500 ">
          <input
            type="text"
            value={Password}
            className="w-full py-1 px-3 outline-none "
            placeholder="password"
            readOnly
            ref={passwordRef} // Using the ref here, though not actively used in this code
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-500 text-white px-4 py-2"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className=" flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
              type="checkbox"
              defaultChecked={noAllowed}
              id="numberInput"
              onChange={() => {
                setNoAllowed((prev) => !prev);
              }}
            />
            Number
          </div>

          <div className="flex items-center gap-x-2 ">
            <input
              type="checkbox"
              defaultChecked={noAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            Characters
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;