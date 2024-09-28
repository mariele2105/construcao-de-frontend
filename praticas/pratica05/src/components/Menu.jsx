import Link from './Link';
import './Menu.css'


function Menu() {
    const opcoes = ["Home", "Perfil", "Sair"];
    return (
        <ul>
          {/* Passo j: Renderizando um 'li' para cada item do array 'opcoes' */}
          {opcoes.map((opcao, index) => <li key={index}><Link texto={opcao}/></li>)}
        </ul>
      );
    }
    
    export default Menu;