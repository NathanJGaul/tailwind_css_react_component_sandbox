import React from "react";
import ReactDOM from "react-dom";
import { PersonCard } from "./Components";

function App() {
  return (
    <div className="App" className="bg-grey-light text-center h-screen">
      <h1>Tailwind CSS React Component Sandbox</h1>
      <div className="m-8">
        <PersonCard
          name="Nathan Gaul"
          imageSrc="https://avatars1.githubusercontent.com/u/9121936?v=4"
          subtitle="I do nothing"
          buttonMsg="Message"
        />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
