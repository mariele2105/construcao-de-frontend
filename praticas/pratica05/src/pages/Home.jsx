// Importando os componentes necessários
import React from 'react';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';
import Menu from './Menu';
import Secao from './Secao';
import Painel from './Painel';
import './Home.css';

// Definindo o componente Home
function Home() {
  return (
    <>
      {/* Exibindo Cabecalho e Conteudo */}
      <Cabecalho />
      <Conteudo>
        {/* Exibindo Menu e Secao dentro do Conteudo */}
        <Menu />
        <Secao texto="Página Inicial">
          {/* Exibindo os Painéis dentro da Secao */}
          <div card-grid>
            <Painel 
              texto="Mural de Avisos" 
              itens={[
                "Inscrições para Cursos de Extensão", 
                "Evento Maratona de Programação", 
                "Palestra sobre Inteligência Artificial"
              ]} 
            />
            <Painel 
              texto="Agenda Acadêmica" 
              itens={[
                "Semana de Provas P1", 
                "Entrega de Trabalhos", 
                "Apresentação de TCC"
              ]} 
            />
            <Painel 
              texto="Histórico de Notas" 
              itens={[
                "Lógica de Programação - 5,5", 
                "Banco de Dados - 7,8", 
                "Engenharia de Software - 5,3"
              ]} 
            />
            <Painel 
              texto="Histórico de Faltas" 
              itens={[
                "Lógica de Programação - 4", 
                "Banco de Dados - 0", 
                "Engenharia de Software - 1"
              ]} 
            />
          </div>
        </Secao>
      </Conteudo>
    </>
  );
}

// Exportando o componente Home para ser acessado por outros módulos
export default Home;
