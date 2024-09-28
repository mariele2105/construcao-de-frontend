


// Definindo o componente App
function App() {
  // Constante index com valor inicial 1
  const index = 1;

  return (
    <>
      {/* Renderizando componentes de acordo com o valor de index */}
      {index === 1 && <Login />}
      {index === 2 && <Home />}
      {index === 3 && <Perfil />}
    </>
  );
}

// Exportando o componente App para ser acessado por outros módulos
export default App;


