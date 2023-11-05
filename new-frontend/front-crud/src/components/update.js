// EditVehicle.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Update = () => {
    const navigate = useNavigate();
    const id = useParams();
  
    // Estados individuais para cada campo do formulário
    const [locadora, setLocadora] = useState("");
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [ano, setAno] = useState(0);
    const [motor, setMotor] = useState("");
    const [portas, setPortas] = useState(0);
    const [cambio, setCambio] = useState("");
    const [arCondicionado, setArCondicionado] = useState(false);
  
    useEffect(() => {
      axios
        .get(`http://localhost:3030/veiculos/${id.id}`)
        .then((response) => {
          // Preencha os estados individuais com os valores do veículo
          const veiculo = response.data;
          setLocadora(veiculo[0].locadora);
          setMarca(veiculo[0].marca);
          setModelo(veiculo[0].modelo);
          setAno(veiculo[0].ano);
          setMotor(veiculo[0].motor);
          setPortas(veiculo[0].portas);
          setCambio(veiculo[0].cambio);
          setArCondicionado(veiculo[0].ar_condicionado);
        })
        .catch((error) => {
          console.error("Erro na solicitação ao servidor:", error);
        });
    }, [id]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Enviar os dados atualizados para o backend usando Axios (solicitação PUT)
      const formData = {
        locadora,
        marca,
        modelo,
        ano,
        motor,
        portas,
        cambio,
        arCondicionado,
      };
  
      axios
        .put(`http://localhost:3030/veiculos/${id.id}`, formData)
        .then((response) => {
          // Redirecionar o usuário de volta à página de detalhes após a atualização
          navigate(`/list`);
        });
    };
  
    return (
      <div className="container">
        <h2>Editar Veículo</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Locadora:</label>
            <input
              type="text"
              name="locadora"
              value={locadora}
              onChange={(e) => setLocadora(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Marca:</label>
            <input
              type="text"
              name="marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Modelo:</label>
            <input
              type="text"
              name="modelo"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Ano:</label>
            <input
              type="text"
              name="ano"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Motor:</label>
            <input
              type="text"
              name="motor"
              value={motor}
              onChange={(e) => setMotor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Portas:</label>
            <input
              type="text"
              name="portas"
              value={portas}
              onChange={(e) => setPortas(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Câmbio:</label>
            <input
              type="text"
              name="cambio"
              value={cambio}
              onChange={(e) => setCambio(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Ar Condicionado:</label>
            <input
              type="checkbox"
              name="ar_condicionado"
              checked={arCondicionado}
              onChange={(e) => setArCondicionado(e.target.checked)}
            />
          </div>
          <button type="submit" className="btn">
            Atualizar Veículo
          </button>
        </form>
      </div>
    );
  };
  
  export default Update;
  
