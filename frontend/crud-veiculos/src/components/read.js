import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3030/veiculos`).then((response) => {
      console.log(response.data);
      setAPIData(response.data);
    });
  }, []);

  const setData = (data) => {
    let {
      id,
      locadora,
      modelo,
      marca,
      motor,
      portas,
      cambio,
      ar,
      updatedAt,
      createdAt,
    } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Locadora", locadora);
    localStorage.setItem("Modelo", modelo);
    localStorage.setItem("Marca", marca);
    localStorage.setItem("Motor", motor)
    localStorage.setItem("Portas", portas)
    localStorage.setItem("Cambio", cambio)
    localStorage.setItem("Ar condicionado", ar)
    localStorage.setItem("Atualizado", updatedAt)
    localStorage.setItem("Criado", createdAt)
  };

  const getData = () => {
    axios
      .get(`http://localhost:3030/veiculos`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`http://localhost:3030/veiculos/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Locadora</Table.HeaderCell>
            <Table.HeaderCell>Modelo</Table.HeaderCell>
            <Table.HeaderCell>Marca</Table.HeaderCell>
            <Table.HeaderCell>Motor</Table.HeaderCell>
            <Table.HeaderCell>Portas</Table.HeaderCell>
            <Table.HeaderCell>Cambio</Table.HeaderCell>
            <Table.HeaderCell>Ar condicionado</Table.HeaderCell>
            <Table.HeaderCell>Atualizado</Table.HeaderCell>
            <Table.HeaderCell>Criado</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
            return (
              <Table.Row>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.locadora}</Table.Cell>
                <Table.Cell>{data.modelo}</Table.Cell>
                <Table.Cell>{data.marca}</Table.Cell>
                <Table.Cell>{data.motor}</Table.Cell>
                <Table.Cell>{data.portas}</Table.Cell>
                <Table.Cell>{data.cambio}</Table.Cell>
                <Table.Cell>
                  {data.ar_condicionado ? "Checked" : "Unchecked"}
                </Table.Cell>
                <Table.Cell>{data.updated_at}</Table.Cell>
                <Table.Cell>{data.created_at}</Table.Cell>
                <Link to="/update">
                  <Table.Cell>
                    <Button onClick={() => setData(data)}>Update</Button>
                  </Table.Cell>
                </Link>
                <Table.Cell>
                  <Button onClick={() => onDelete(data.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
