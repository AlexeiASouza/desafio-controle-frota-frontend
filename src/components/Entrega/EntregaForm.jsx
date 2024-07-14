import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "./../../../config.js";

// Cria uma nova entrega
const EntregaForm = ({ onAddEntrega }) => {
  const [placaCaminhao, setPlacaCaminhao] = useState("");
  const [nomeMotorista, setNomeMotorista] = useState("");
  const [motoristaId, setMotoristaId] = useState("");
  const [tipoCarga, setTipoCarga] = useState("");
  const [valor, setValor] = useState("");
  const [dataEntrega, setDataEntrega] = useState("");
  const [horaEntrega, setHoraEntrega] = useState("");
  const [destino, setDestino] = useState("");
  const [taxaFrete, setTaxaFrete] = useState("");

  const [possuiSeguro, setPossuiSeguro] = useState(false);

  const handleTipoCargaChange = (event) => {
    const valorSelecionado = event.target.value;
    setTipoCarga(valorSelecionado);

    if (valorSelecionado !== "Eletrônicos") {
      setPossuiSeguro(false);
    }
  };

  const handlePossuiSeguroChange = (event) => {
    const valorSelecionado = event.target.value === "sim";
    setPossuiSeguro(valorSelecionado);
  };

  const handleDestinoChange = (event) => {
    const valorSelecionado = event.target.value;
    setDestino(valorSelecionado);
  };

  const resetForm = () => {
    setPlacaCaminhao("");
    setNomeMotorista("");
    setMotoristaId("");
    setTipoCarga("");
    setValor("");
    setDataEntrega("");
    setHoraEntrega("");
    setDestino("");
    setTaxaFrete("");
    setPossuiSeguro(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const novaEntrega = {
      placaCaminhao,
      nomeMotorista,
      motoristaId,
      tipoCarga,
      valor,
      dataEntrega: new Date(`${dataEntrega}T${horaEntrega}:00.000Z`),
      destino,
      taxaFrete,
      possuiSeguro: tipoCarga === "Eletrônicos" ? possuiSeguro : undefined,
    };

    try {
      const response = await axios.post(`${baseUrl}/entregas`, novaEntrega);
      onAddEntrega(response.data);
      resetForm();
    } catch (error) {
      resetForm();
      console.error("Erro ao cadastrar entrega:", error);
      alert(
        `Erro ao cadastrar entrega: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Placa do Caminhão:</label>
        <input
          type="text"
          value={placaCaminhao}
          onChange={(e) => setPlacaCaminhao(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Nome do Motorista:</label>
        <input
          type="text"
          value={nomeMotorista}
          onChange={(e) => setNomeMotorista(e.target.value)}
          required
        />
      </div>
      <div>
        <label>ID do Motorista:</label>
        <input
          type="text"
          value={motoristaId}
          onChange={(e) => setMotoristaId(e.target.value)}
          required
        />
      </div>
      <div>
        <label>
          Tipo de Carga:
          <select value={tipoCarga} onChange={handleTipoCargaChange}>
            <option value="">Selecione...</option>
            <option value="Eletrônicos">Eletrônicos</option>
            <option value="Combustível">Combustível</option>
            <option value="Outros">Outros</option>
          </select>
        </label>
        {tipoCarga === "Eletrônicos" && (
          <label>
            Possui Seguro?
            <select
              value={possuiSeguro ? "sim" : "não"}
              onChange={handlePossuiSeguroChange}
            >
              <option value="sim">Sim</option>
              <option value="não">Não</option>
            </select>
          </label>
        )}
      </div>
      <div>
        <label>Valor:</label>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Data de Entrega:</label>
        <input
          type="date"
          value={dataEntrega}
          onChange={(e) => setDataEntrega(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Hora de Entrega</label>
        <input
          type="time"
          value={horaEntrega}
          onChange={(e) => setHoraEntrega(e.target.value)}
          required
        />
      </div>
      <div>
        <label>
          Destino:
          <select value={destino} onChange={handleDestinoChange}>
            <option value="">Selecione...</option>
            <option value="Amazônia">Amazônia</option>
            <option value="Argentina">Argentina</option>
            <option value="Nordeste">Nordeste</option>
            <option value="Outros">Outros</option>
          </select>
        </label>
      </div>
      <div>
        <label>Taxa de Frete:</label>
        <input
          type="number"
          value={taxaFrete}
          onChange={(e) => setTaxaFrete(e.target.value)}
          required
        />
      </div>
      <button type="submit">Cadastrar Entrega</button>
    </form>
  );
};

export default EntregaForm;
