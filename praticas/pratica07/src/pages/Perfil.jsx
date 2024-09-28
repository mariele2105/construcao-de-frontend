import { useParams } from "react-router-dom";
import Secao from "../components/Secao"; // Importação do componente Secao
import InputEmail from "../components/InputEmail"; // Importação do componente InputEmail
import InputSenha from "../components/InputSenha"; // Importação do componente InputSenha
import Botao from "../components/Botao";

function Perfil() {
  const { id } = useParams();

  return (
    <>
      {id == 1 ? (
        <Secao texto="Perfil do Usuário">
          <InputEmail valor="aluno@email.com" mudaValor={() => {}} />
          <InputSenha valor="" mudaValor={() => {}} />
          <Botao texto="Salvar" />
        </Secao>
      ) : (
        <p>Usuário não encontrado</p>
      )}
    </>
  );
}

export default Perfil;
