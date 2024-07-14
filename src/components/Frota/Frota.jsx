import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Frota.css";
import { baseUrl } from "./../../../config.js";

// Componente de acompanhamento da frota
const Frota = ({ frota, atualizar }) => {
  const [caminhoes, setCaminhoes] = useState([]);
  const [numCaminhoes, setNumCaminhoes] = useState(0);
  const [valorTotalEntregas, setValorTotalEntregas] = useState(0);

  useEffect(() => {
    const fetchFrotaData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/frotas/frota/${frota}`);
        const { caminhoesData, numCaminhoes, valorTotalEntregas } =
          response.data;

        setCaminhoes(caminhoesData);
        setNumCaminhoes(numCaminhoes);
        setValorTotalEntregas(valorTotalEntregas);
      } catch (error) {
        console.error("Erro ao buscar dados da frota:", error);
        alert("Erro ao buscar dados da frota.");
      }
    };

    fetchFrotaData();
  }, [frota, atualizar]);

  return (
    <div className="frota-container">
      <h2>Frota: {frota}</h2>
      <table>
        <thead>
          <tr>
            <th>Placa do Caminhão</th>
            <th>Status</th>
            <th>Horário de Saída</th>
            <th>Tipo de Carga</th>
          </tr>
        </thead>
        <tbody>
          {caminhoes.map((caminhao) => (
            <tr key={caminhao.placa}>
              <td>{caminhao.placa}</td>
              <td>{caminhao.status}</td>
              <td>
                {caminhao.status === "Ativo"
                  ? new Date(caminhao.dataEntrega).toISOString().slice(0, 16)
                  : "N/A"}
              </td>
              <td>
                {caminhao.status === "Ativo" ? caminhao.tipoCarga : "N/A"}
              </td>
              {caminhao.valiosa && <td>Valiosa</td>}
              {caminhao.perigosa && <td>Perigosa</td>}
              {caminhao.seguro && (
                <td>
                  {caminhao.possuiSeguro
                    ? "Possui Seguro: Sim"
                    : "Possui Seguro: Não"}
                </td>
              )}
            </tr>
          ))}
          <tr>
            <td colSpan="3">Número de Caminhões</td>
            <td>{numCaminhoes}</td>
          </tr>
          <tr>
            <td colSpan="3">Valor Total das Entregas Hoje</td>
            <td>{valorTotalEntregas}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Frota;
