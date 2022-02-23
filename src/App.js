import './App.css';
import {useScrollY} from "./hooks/useScrollY";
import {useState, useEffect} from "react";

function App() {
  const {scrollY} = useScrollY();
  const [route, setRoute] = useState(0);

  useEffect(() => {
    scrollY && setRoute(scrollY / window.innerHeight)
  }, [scrollY]);

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
        <section className="scene four">
          <header>
            <h1>Bogota</h1>
            콜롬비아의 수도
          </header>
        </section>
        <div className="map">
          <img className="mapImg" src="col.png" alt="콜롬비아"/>
          <div className="cartagena" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img className="pin" src="pin.png"/>
            <div className="diagonal">
              <div className="fill"
                   style={scrollY / window.innerHeight <= 0 ? {display: "none"} : route >= 1 ? {height: "100%"} : {height: route * 100 + "%"}}/>
            </div>
            <div className="placeName" style={{backgroundColor: route < 1 ? "rgba(255, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.5)"}}>
              카르타헤나
            </div>
          </div>
          <div className="medellin" onClick={() => window.scrollTo({ top: window.innerHeight * 1, behavior: 'smooth' })}>
            <img className="pin" src="pin.png"/>
            <div className="diagonal">
              <div className="fill"
                   style={scrollY / window.innerHeight <= 1 ? {display: "none"} : route >= 2 ? {height: "100%"} : {height: (route - 1) * 100 + "%"}}/>
            </div>
            <div className="placeName" style={{backgroundColor: (route >= 1 && route < 2) ? "rgba(255, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.5)"}}>
              메데진
            </div>
          </div>
          <div className="sangil" onClick={() => window.scrollTo({ top: window.innerHeight * 2, behavior: 'smooth' })}>
            <img className="pin" src="pin.png"/>
            <div className="diagonal">
              <div className="fill"
                   style={scrollY / window.innerHeight <= 2 ? {display: "none"} : {height: (route - 2) * 100 + "%"}}/>
            </div>
            <div className="placeName" style={{backgroundColor: (route >= 2 && route < 3) ? "rgba(255, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.5)"}}>
              산힐
            </div>
          </div>
          <div className="bogota" onClick={() => window.scrollTo({ top: window.innerHeight * 3, behavior: 'smooth' })}>
            <img className="pin" src="pin.png"/>
            <div className="placeName" style={{backgroundColor: (route == 3) ? "rgba(255, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.5)"}}>
              보고타
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
