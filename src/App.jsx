import './css/bootstrap.css';
import React from 'react';
import './App.css';
import Auto from './Auto.jsx';
import a1 from './img/a1.png';
import a2 from './img/a2.png';
import a3 from './img/a3.png';
import a4 from './img/a4.png';
import a5 from './img/a5.png';
import a6 from './img/a6.png';
import a7 from './img/a7.png';
import a8 from './img/a8.png';
import a9 from './img/a9.png';
import k1 from './img/kc.png';
import k2 from './img/kz.png';
import k3 from './img/kn.png';



const auta = [
  {id:1, img: a1, marka: "Ford", model: '"Focus"', cena: 12000},
  {id:2, img: a2, marka: "Astra", model: '"Borza"', cena: 2000},
  {id:3, img: a3, marka: "Seat", model: '"Melon"', cena: 500},
  {id:4, img: a4, marka: "Skoda", model: '"Mocztavia"', cena: 100000},
  {id:5, img: a5, marka: "Doge", model: '"Buldog"', cena: 15200},
  {id:6, img: a6, marka: "Marian", model: '"CyberTr00ck"', cena: 201000},
  {id:7, img: a7, marka: "Audi Adamovitza", model: '"Gruz"', cena: "za darmo"},
  {id:8, img: a8, marka: "Toyota egzaminacyjna", model: '"Elka Yaris"', cena: 21337},
  {id:9, img: a9, marka: "Elka pokukiełkowa", model: '"Yaris Tojota"', cena: 200},
];

const karuzela = [
  {id: 10, img: k1, opis: "to jest przepiękne i funkcjonalne czerwone auto!", dopisek: "Okazja"},
  {id: 11, img: k1, opis: "super pro eko zielone autko!", dopisek: "Musisz go mieć"},
  {id: 12, img: k1, opis: "poczujesz sie w nim bosko...", dopisek: "Specjalnie dla Ciebie"},
];




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Komis Samochodowy</h1>
      </header>
      <div className='row'>
        {auta.map(
          (e) => (
            <Auto key={e.id} auto={e}/>)
        )}

      </div>
    </div>
  );
}

export default App;
