const reactDescriptions = ['fundamentais', 'cruciais', 'principais'];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {

  const description = reactDescriptions[getRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Conceitos {description} do React que vão te ajudar em quase todos os apps
        que você for construir!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Vamos lá!</h2>
      </main>
    </div>
  );
}

export default App;
