// Importando os componentes necessários
import React from 'react';
import Conteudo from './Conteudo';
import Rodape from './Rodape';
import Icone from './Icone';
import Titulo from './Titulo';
import InputEmail from './InputEmail';
import InputSenha from './InputSenha';
import Botao from './Botao';
import Link from './Link';
import './Login.css';

// Definindo o componente Login
function Login() {
  return (
    <>
      {/* Exibindo Conteudo e Rodape */}
      <Conteudo login-container>
        {/* Exibindo os componentes dentro do Conteudo */}
        <Icone imagem="" texto="Logo da Aplicação" />
        <Titulo texto="Aluno Online" />
        <InputEmail />
        <InputSenha />
        <Botao texto="Entrar" />
        <Link texto="Esqueceu a Senha?" />
      </Conteudo>

      {/* Rodapé com o texto "Copyright (C) 2024" */}
      <Rodape texto="Copyright (C) 2024" />
    </>
  );
}

// Exportando o componente Login para ser acessado por outros módulos
export default Login;
