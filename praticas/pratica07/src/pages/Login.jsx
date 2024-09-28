import Conteudo from "../components/Conteudo"; // Importação do componente Conteudo
import Rodape from "../components/Rodape"; // Importação do componente Rodape
import FormLogin from "./FormLogin"; // Importação do componente FormLogin

function Login() {
  return (
    <>
      {/* j) Exibe os componentes Conteudo e Rodape */}
      <Conteudo>
        <img
          src="https://www.svgrepo.com/show/411955/learn.svg"
          alt="Logo da Aplicação"
        />
        <h1>Aluno Online</h1>
        <FormLogin />
      </Conteudo>
      <Rodape />
    </>
  );
}

export default Login;
