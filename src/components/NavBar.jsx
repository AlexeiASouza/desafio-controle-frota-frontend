import { NavLink, Link } from "react-router-dom";

// Barra de navegação
const NavBar = () => {
  return (
    <nav id="nav">
      <Link to="/">Desafio de Controle de Frota</Link>
      <ul id="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/acompanhamentoFrota">Acompanhamento de Frota</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
