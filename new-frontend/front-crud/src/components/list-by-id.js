import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './list.css'
import { useNavigate } from "react-router-dom";

const ListById = (props) => {
  let id = props.id;
  const navigate = useNavigate()

  const [veiculo, setVeiculo] = useState([]);

  const handleDelete = (id) => {
    // if (window.confirm("Tem certeza de que deseja excluir este veículo?")) {
    axios.delete(`http://localhost:3030/veiculos/${id}`)
    .then((response) => {
      setVeiculo((prevVeiculos) =>
        prevVeiculos.filter((veiculo) => veiculo.id !== id)
        );
        navigate("/list")
    });
  };

  useEffect(() => {
    // Fazer uma solicitação ao backend para obter as informações do veículo por ID
    axios.get(`http://localhost:3030/veiculos/${id}`).then((response) => {
      setVeiculo(response.data);
    });
  }, [id]);

  //  console.log("aaaaa", veiculo[0].locadora)
  if (veiculo.length > 0) {
    return (
      <div className="container">
        <h2>Detalhes do Veículo</h2>
        <p>Locadora: {veiculo[0].locadora}</p>
        <p>Marca: {veiculo[0].marca}</p>
        <p>Modelo: {veiculo[0].modelo}</p>
        <p>Ano: {veiculo[0].ano}</p>
        <p>Motor: {veiculo[0].motor}</p>
        <p>Portas: {veiculo[0].portas}</p>
        <p>Câmbio: {veiculo[0].cambio}</p>
        <p>Ar Condicionado: {veiculo[0].ar_condicionado ? "Sim" : "Não"}</p>
        <Link to={`/update/${id}`} className="btn">
          Atualizar
        </Link>
        <button
          onClick={() => handleDelete(id)}
          className="btn btn-action"
        >
          Deletar
        </button>
      </div>
    );
  }
};

export default ListById;
