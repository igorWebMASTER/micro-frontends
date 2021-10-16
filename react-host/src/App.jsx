import React , { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import counterWrapper from "remote/counterWrapper";

const App = () => {
  const divRef = useRef(null);

  useEffect(() => {
    counterWrapper(divRef.current);
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: react-host</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
   </div>
  )
};
ReactDOM.render(<App />, document.getElementById("app"));
