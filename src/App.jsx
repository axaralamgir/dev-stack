import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";

function App() {
  const [stack, setStack] = useState([]);

  const handleAdd = (tech) => {
    setStack((prev) =>
      prev.some((t) => t.id === tech.id) ? prev : [...prev, tech],
    );
  };

  const handleRemove = (id) => {
    setStack((prev) => prev.filter((t) => t.id !== id));
  };

  const handleRemoveAll = () => setStack([]);
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Technologies
        stack={stack}
        onAdd={handleAdd}
        onRemove={handleRemove}
        onRemoveAll={handleRemoveAll}
      />
    </div>
  );
}

export default App;
