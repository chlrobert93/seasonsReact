import React from 'react';
import ReactDom from 'react-dom';
//import seasonsDisplay from 'seasonsDisplay';

//Estamos creando un clase nueva dentro de JS
//Que solo tiene un método asignado
/*
const App = () => {
      Window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
      );
}*/



class App extends React.Component{

      //L afunción contructora es la primera función que se llamará cada vez que se cree una instancia de esta vlase
      //Cada vez que creamos una nieva instancia del componente de aplicación y la mostramos en la pantalla
      //Esta función se llamará automática e instantáneamente antes que cualquier otra cosa
      //Para inicializar el state  de un componente

      constructor (props) {
            //Se nos exige
            //Es una referencia a la función contructura del padre 
            super(props);


            //El objecto state
            //null por que no sabemos que latitud es haora mismo
            this.state = {lat: null}

      }



      //Método de renderizado
      
      //React tenemos que definir el render si no definimos esta función aqui
      //React va a lanzar un error  y decir que no tiene un métodorenderizado que esté devolviendo cualquier jsx
      render(){

           //Obtner geolocalización
            window.navigator.geolocation.getCurrentPosition(
      
            //Devolución en parametros
            position => console.log(position),
            error => console.log(error)
        );
            //Devolver
            return <div>Latitud: </div>

      } 

     
}


ReactDom.render(<App />, document.querySelector('#root'));