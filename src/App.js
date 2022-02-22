import './App.css';

function App() {
  return (
    <div className="App">
      <section className="scene one">
        <header>
          <h1>Cartagena</h1>
          색감이 아름다운 도시
        </header>
      </section>
      <section className="scene two">
        <header>
          <h1>Medellin</h1>
          붉은 벽돌집의 아룸다움이 있는 도시
        </header>
      </section>
      <section className="scene three">
        <header>
          <h1>San gil</h1>
          액티비티의 천국
        </header>
      </section>
      <div className="map">
        <img className="mapImg" src="col.png" alt="콜롬비아"/>
        <label classNames="cartagena">
          <img className="pin" src="pin.png"/>
        </label>
        <label classNames="medellin">
          <img className="pin" src="pin.png"/>
        </label>
        <label classNames="sangil">
          <img className="pin" src="pin.png"/>
        </label>
        <label classNames="bogota">
          <img className="pin" src="pin.png"/>
        </label>
      </div>
    </div>
  );
}

export default App;
