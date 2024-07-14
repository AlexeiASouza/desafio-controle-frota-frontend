import Frota from "../components/Frota/Frota";
import React, { useState } from "react";
import CaminhaoManager from "../components/Manager/CaminhaoManager";
import EntregaManager from "../components/Manager/EntregaManager";
import "./AcompanhamentoFrota.css";

const AcompanhamentoFrota = () => {
  const [frota, setFrota] = useState("");
  const [frotaSelecionada, setFrotaSelecionada] = useState(null);
  const [atualizarFrota, setAtualizarFrota] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFrotaSelecionada(frota);
  };

  return (
    <div className="acompanhamento-frota-container">
      <div className="frota-container">
        <h1>Acompanhamento de Frota</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Frota:
            <input
              type="text"
              value={frota}
              onChange={(e) => setFrota(e.target.value)}
              required
            />
          </label>
          <button type="submit">Buscar</button>
        </form>
        {frotaSelecionada && (
          <Frota frota={frotaSelecionada} atualizar={atualizarFrota} />
        )}
      </div>

      <div className="manager-container">
        <CaminhaoManager setAtualizarFrota={setAtualizarFrota} />
        <EntregaManager setAtualizarFrota={setAtualizarFrota} />
      </div>
    </div>
  );
};

export default AcompanhamentoFrota;
