import React from 'react';

import './style/global.css';
import './style/page/lading.css';
import logoImg from './img/Logo.svg';

function App() {
  return (
    <div id='page-lading'>
      <div className='content-wrapper'>
        <img src={logoImg} alt='Happy'/>
      </div>
     
     <main>
       <h1>Leve Felicidade ao Mundo</h1>
       <p>Visite orfanatos e mude o dia
de muitas crianças.</p>
     </main>
     <div className='location'>
       <strong>Ouro Preto -</strong>
       <span> Minas Gerais</span>
       </div>
       <a href='' className='enter-app' ></a>

     
    </div>
  );
}

export default App;
