import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Create from "./components/create";
import List from "./components/list";
import Update from "./components/update";
import ListById from "./components/list-by-id";
import "./App.css"

function App() {
  const [id, setId] = useState(0); // Estado para armazenar o ID inserido pelo usuário

  const handleIdChange = (e) => {
    setId(e.target.value); // Atualiza o estado do ID quando o usuário digita
  };

  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="main-title">Gerenciamento de Veículos</h1>
        <div className="btn-container">
          <Link to="/create" className="btn">
            Criar Veículo
          </Link>
          <Link to="/list" className="btn">
            Listar Veículos
          </Link>
        </div>
        <div className="get-vehicle">
          <input
            type="number"
            placeholder="ID do Veículo"
            defaultValue={id}
            onChange={handleIdChange}
          />
          <Link to="/list-by-id" className="btn">
            Buscar Veículo
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/list" element={<List />} />
        <Route path="/list-by-id" element={<ListById id={id} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
