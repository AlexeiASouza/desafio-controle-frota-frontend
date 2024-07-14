import React from "react";

// Componente para exibição da tabela de entregas no front
const ExibirEntregas = ({ entregas }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Destino</th>
            <th>Placa</th>
            <th>Tipo de Carga</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Status</th>
            <th>Taxa de Frete</th>
          </tr>
        </thead>
        <tbody>
          {entregas.map((entrega) => (
            <tr key={entrega._id}>
              <td>{entrega.destino} </td>
              <td>{entrega.placaCaminhao}</td>
              <td>{entrega.tipoCarga}</td>
              <td>{entrega.valor}</td>
              <td>
                {new Date(entrega.dataEntrega).toISOString().slice(0, 16)}
              </td>
              <td>{entrega.status}</td>
              <td>{entrega.taxaFrete}</td>
              {entrega.indicadores.valiosa && <td> (Valiosa)</td>}
              {entrega.indicadores.seguro && (
                <td>
                  {entrega.possuiSeguro
                    ? "Possui Seguro: Sim"
                    : "Possui Seguro: Não"}{" "}
                </td>
              )}
              {entrega.indicadores.perigosa && <td> (Perigosa)</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExibirEntregas;
