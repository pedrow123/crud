import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './list.css'

const List = () => {
  const navigate = useNavigate();
  const [veiculos, setVeiculos] = useState([]);

  const handleDelete = (id) => {
    // if (window.confirm("Tem certeza de que deseja excluir este veículo?")) {
    axios.delete(`http://localhost:3030/veiculos/${id}`)
    .then((response) => {
      setVeiculos((prevVeiculos) =>
        prevVeiculos.filter((veiculo) => veiculo.id !== id)
      );
      navigate("/list")
    });
  };

  useEffect(() => {
    // Fazer uma solicitação ao backend para obter a lista de veículos
    axios.get("http://localhost:3030/veiculos").then((response) => {
      setVeiculos(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h2>Lista de Veículos</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Locadora</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Motor</th>
            <th>Portas</th>
            <th>Câmbio</th>
            <th>Ar Condicionado</th>
            <th>Atualizado em</th>
            <th>Criado em</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map((veiculo) => (
            <tr key={veiculo.id}>
              <td>{veiculo.id}</td>
              <td>{veiculo.locadora}</td>
              <td>{veiculo.marca}</td>
              <td>{veiculo.modelo}</td>
              <td>{veiculo.ano}</td>
              <td>{veiculo.motor}</td>
              <td>{veiculo.portas}</td>
              <td>{veiculo.cambio}</td>
              <td>{veiculo.ar_condicionado ? "Sim" : "Não"}</td>
              <td>{veiculo.updatedAt}</td>
              <td>{veiculo.createdAt}</td>
              <td>
                <Link to={`/update/${veiculo.id}`} className="btn">
                  Atualizar
                </Link>
                <button
                  onClick={() => handleDelete(veiculo.id)}
                  className="btn btn-action"
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
