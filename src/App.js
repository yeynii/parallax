import './App.css';
import {useScrollY} from "./hooks/useScrollY";
import {useState, useEffect} from "react";

function App() {
  const {scrollY} = useScrollY();
  const [route, setRoute] = useState();

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
          <div className="cartagena">
            <img className="pin" src="pin.png"/>
            <div className="diagonal">
              <div className="fill"
                   style={scrollY / window.innerHeight <= 0 ? {display: "none"} : route >= 1 ? {height: "100%"} : {height: route * 100 + "%"}}/>
            </div>
            <div className="placeName">
              카르타헤나
            </div>
          </div>
          <div className="medellin">
            <img className="pin" src="pin.png"/>
            <div className="diagonal">
              <div className="fill"
                   style={scrollY / window.innerHeight <= 1 ? {display: "none"} : route >= 2 ? {height: "100%"} : {height: (route - 1) * 100 + "%"}}/>
            </div>
            <div className="placeName">
              메데진
            </div>
          </div>
          <div className="sangil">
            <img className="pin" src="pin.png"/>
            <div className="diagonal">
              <div className="fill"
                   style={scrollY / window.innerHeight <= 2 ? {display: "none"} : {height: (route - 2) * 100 + "%"}}/>
            </div>
            <div className="placeName">
              산힐
            </div>
          </div>
          <div className="bogota">
            <img className="pin" src="pin.png"/>
            <div className="placeName">
              보고타
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
