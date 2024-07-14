import React, { useState } from "react";
import EntregaForm from "./../Entrega/EntregaForm";
import FinalizarEntrega from "./../Entrega/EntregaFinish";
import BuscarEntregasPorPlaca from "./../Entrega/EntregaListByPlaca";
import ExibirEntregas from "./../Entrega/EntregaShow";
import "./EntregaManager.css";

const EntregaManager = ({ setAtualizarFrota }) => {
  const [entregas, setEntregas] = useState([]);
  const [entregasArchive, setEntregasArchive] = useState([]);
  const [atualizarArquivo, setAtualizarArquivo] = useState(false);
  const handleAddEntrega = (novaEntrega) => {
    setEntregas([...entregas, novaEntrega]);
    setAtualizarFrota((prev) => !prev);
    setAtualizarArquivo((prev) => !prev);
  };

  const handleFinalizarEntrega = () => {
    setAtualizarFrota((prev) => !prev);
    setAtualizarArquivo((prev) => !prev);
  };
  return (
    <div className="entrega-manager-container">
      <div className="entrega-manager">
        <div className="cadastrar-entrega">
          <h2>Cadastrar Entrega</h2>
          <EntregaForm onAddEntrega={handleAddEntrega} />
        </div>
        <div className="finalizar-entrega">
          <h2>Finalizar Entrega</h2>
          <FinalizarEntrega onFinalizarEntrega={handleFinalizarEntrega} />
        </div>
      </div>
      <div className="entrega-list">
        <h2>Buscar Entregas</h2>
        <BuscarEntregasPorPlaca
          onResults={setEntregasArchive}
          atualizar={atualizarArquivo}
        />
        <ExibirEntregas entregas={entregasArchive} />
      </div>
    </div>
  );
};

export default EntregaManager;
