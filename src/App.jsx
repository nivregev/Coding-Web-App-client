import "./App.css";

import Home from "./components/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import { Route, Routes } from "react-router-dom";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <div className="app d-flex flex-column min-vh-100">
      <header>
        <Navbar />
      </header>

      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="problem/:problemNumber" element={<CodeEditor />}></Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

//
