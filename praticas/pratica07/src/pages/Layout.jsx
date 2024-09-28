import { Outlet } from "react-router-dom";
import Cabecalho from '../components/Cabecalho'; // Importação do componente Cabecalho
import Conteudo from '../components/Conteudo';   // Importação do componente Conteudo
import Menu from '../components/Menu'; 

function Layout() {
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <Menu />
        <Outlet />
      </Conteudo>
    </>
  );
}

export default Layout;
