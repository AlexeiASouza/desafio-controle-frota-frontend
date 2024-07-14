import React, { useState } from "react";
import CaminhaoForm from "./../Caminhao/CaminhaoForm.jsx";
import CaminhaoDelete from "./../Caminhao/CaminhaoDelete.jsx";
import "./CaminhaoManager.css";

const CaminhaoManager = ({ setAtualizarFrota }) => {
  const [caminhoes, setCaminhoes] = useState([]);

  const handleAddCaminhao = (novoCaminhao) => {
    setCaminhoes([...caminhoes, novoCaminhao]);
    setAtualizarFrota((prev) => !prev);
  };

  const handleDeleteCaminhao = () => {
    setAtualizarFrota((prev) => !prev);
  };
  return (
    <div className="caminhao-manager-container">
      <div className="cadastrar-caminhao">
        <h2>Cadastrar Caminhão</h2>
        <CaminhaoForm onAddCaminhao={handleAddCaminhao} />
      </div>

      <div className="deletar-caminhao">
        <h2>Deletar Caminhão</h2>
        <CaminhaoDelete onDeleteCaminhao={handleDeleteCaminhao} />
      </div>
    </div>
  );
};

export default CaminhaoManager;
