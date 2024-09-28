// Importando os componentes necessários
import React from 'react';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';
import Menu from './Menu';
import Secao from './Secao';
import InputEmail from './InputEmail';
import InputSenha from './InputSenha';
import Botao from './Botao';

// Definindo o componente Perfil
function Perfil() {
  return (
    <>
      {/* Exibindo Cabecalho e Conteudo */}
      <Cabecalho />
      <Conteudo>
        {/* Exibindo Menu e Secao dentro do Conteudo */}
        <Menu />
        <Secao texto="Perfil do Usuário">
          {/* Exibindo os campos de Input e o Botão dentro da Secao */}
          <InputEmail />
          <InputSenha />
          <Botao texto="Salvar" />
        </Secao>
      </Conteudo>
    </>
  );
}

// Exportando o componente Perfil para ser acessado por outros módulos
export default Perfil;
