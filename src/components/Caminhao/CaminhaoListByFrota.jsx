import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "./../../../config.js";

// Lista os caminhões pertencentes a determinada frota
const CaminhaoListByFrota = () => {
  const [frota, setFrota] = useState("");
  const [caminhoes, setCaminhoes] = useState([]);

  const resetForm = () => {
    setFrota("");
  };
  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`${baseUrl}/caminhoes/frota/${frota}`);
      setCaminhoes(response.data);
      resetForm();
    } catch (error) {
      console.error("Erro ao buscar caminhões por frota:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div>
          <label>Frota:</label>
          <input
            type="text"
            value={frota}
            onChange={(e) => setFrota(e.target.value)}
            required
          />
        </div>
        <button type="submit">Buscar</button>
      </form>
      <ul>
        {caminhoes.map((caminhao) => (
          <li key={caminhao._id}>
            {caminhao._id} -{caminhao.placa} - {caminhao.frota}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaminhaoListByFrota;
