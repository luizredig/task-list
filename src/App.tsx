import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";

function App() {
  return <>
    <Header />
    <main>
      <Tasks />
    </main>
  </>;
}

export default App;
