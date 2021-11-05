import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Eskiden switch yazardı ES7 ile routes oldu. */}
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  );
}

export default App;
