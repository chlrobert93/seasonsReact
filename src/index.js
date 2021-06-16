import React from 'react';
import ReactDom from 'react-dom';
//import seasonsDisplay from 'seasonsDisplay';


const App = () => {
      //Obtner geolocalización
      navigator.geolocation.getCurrentPosition(
      
      //Devolución en parametros
      position => console.log(position),
      error => console.log(error)
  );
   return <div>Hi there!</div>
  
            
};


ReactDom.render(<App />, document.querySelector('#root'));