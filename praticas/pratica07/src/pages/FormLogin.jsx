// FormLogin.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputEmail from '../components/InputEmail'; // Importação do InputEmail
import InputSenha from '../components/InputSenha'; // Importação do InputSenha
import Botao from '../components/Botao'; // Importação do Botao

const FormLogin = () => {
  // e) Declaração de estado local para cada campo do formulário
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // f) Declaração do hook useNavigate
  const navigate = useNavigate();

  return (
    <form>
      {/* g) Exibição dos componentes InputEmail, InputSenha e Botao */}
      <InputEmail valor={email} mudaValor={(e) => setEmail(e.target.value)} />
      <InputSenha valor={senha} mudaValor={(e) => setSenha(e.target.value)} />
      <Botao texto="Entrar" aoClicar={(e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        navigate('/home');
      }} />
    </form>
  );
};

export default FormLogin;
