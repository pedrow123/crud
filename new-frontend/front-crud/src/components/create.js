import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importe a função navigate
import axios from "axios";
import './create.css'
const Create = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    locadora: "",
    marca: "",
    modelo: "",
    ano: 0,
    motor: "",
    portas: 0,
    cambio: "",
    ar_condicionado: false, // Inicializado como falso (sem ar-condicionado)
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Verifique o tipo do campo (checkbox ou outros)
    const fieldValue =
      type === "checkbox"
        ? checked
        : type === "number"
        ? parseInt(value)
        : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enviar os dados para o backend usando Axios
    axios.post("http://localhost:3030/veiculos", formData).then((response) => {
    //   if (response.status === 201) {
        // Veículo criado com sucesso, redirecione o usuário
        navigate("/list");
    //   } else {
    //     alert("Falha ao criar o veículo");
    //   }
    });
  };

  return (
    <div className="container">
      <h2>Cadastro de Veículo</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Locadora:</label>
          <input
            className="input-create"
            type="text"
            name="locadora"
            value={formData.locadora}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Marca:</label>
          <input
            className="input-create"
            type="text"
            name="marca"
            value={formData.marca}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Modelo:</label>
          <input
            className="input-create"
            type="text"
            name="modelo"
            value={formData.modelo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Ano:</label>
          <input
            className="input-create"
            type="text"
            name="ano"
            value={formData.ano}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Motor:</label>
          <input
            className="input-create"
            type="text"
            name="motor"
            value={formData.motor}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Portas:</label>
          <input
            className="input-create"
            type="text"
            name="portas"
            value={formData.portas}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Câmbio:</label>
          <input
            className="input-create"
            type="text"
            name="cambio"
            value={formData.cambio}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Ar Condicionado:</label>
          <input
            className="input-create"
            type="checkbox"
            name="ar_condicionado"
            checked={formData.ar_condicionado}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn">
          Criar Veículo
        </button>
      </form>
    </div>
  );
};

export default Create;
