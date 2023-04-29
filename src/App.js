import "./App.css";
import data from "./components/data";
import List from "./components/List";
import React, { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button className="btn" onClick={() => setPeople([])}>
          clear list
        </button>
      </section>
    </main>
  );
}

export default App;
