import Icone from './Icone'; // Caminho para o componente Icone
import Titulo from './Titulo'; // Caminho para o componente Titulo
import InputPesquisar from './InputPesquisar'; // Caminho para o componente InputPesquisar
import './Cabecalho.css'

function Cabecalho() {
    return (
        <header>
        <div>
          <Icone imagem="" texto="Logo do Aplicação" />
          <Titulo texto="Aluno Online" />
        </div>
        <div> 
          <InputPesquisar />
          <Icone imagem="" texto="Icone Pesquisar" />
        </div>
     </header>
     
    );
  }
 
  
  export default Cabecalho;