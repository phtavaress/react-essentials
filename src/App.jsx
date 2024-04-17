import reactLogo from './assets/react-core-concepts.png'
import componentsImg from './assets/components.png'

const reactDescriptions = ['fundamentais', 'cruciais', 'principais'];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
}

const Header = () => {

  const description = reactDescriptions[getRandomInt(reactDescriptions.length - 1)];

  return (
    <header>
      <img src={reactLogo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Conceitos {description} do React que vão te ajudar em quase todos os apps
        que você for construir!
      </p>
    </header>
  );
}

const CoreConcept = (props) => {
  return (
    <li>
      <img src={props.image} alt="" />
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </li>
  )

}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
        <h2>Conceitos principais</h2>
        <ul>
          <CoreConcept 
          title="Componentes" 
          description="O principal bloco de construção da UI"
          image={componentsImg} />
          <CoreConcept />
          <CoreConcept />
          <CoreConcept />
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
