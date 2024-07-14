import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

// Pages
import HomePage from "./pages/HomePage";
import AcompanhamentoFrota from "./pages/AcompanhamentoFrota";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/acompanhamentoFrota" element={<AcompanhamentoFrota />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
