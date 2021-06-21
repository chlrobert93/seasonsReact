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
            //Esta es la unica vez que hacemos asignación directa
            //to this.state
            this.state = {lat: null, errMessage: ''};
            this.state = {long: null};
      

                //Obtner geolocalización
                window.navigator.geolocation.getCurrentPosition(
      
                  //Devolución en parametros
                  //position =>console.log(position),

                  (position) => {
                    //Para actualizar
                    this.setState({lat: position.coords.latitude});
                    //this.setState({long:position.coords.longitude})

                  },

                  // console.log(err)
                  (err )=> {
                        this.setState({errMessage: err.message});

                  }
              );

      }


      //Definimos una función
      //Se llamara automáticamente una vez cuando nuestro componente se muestre por primera vez en la pantalla
      componentDidMount(){
            console.log('My component was render to the screen');
      }

      //Definición de función
      //Se llamará automaticamente cada vez que nuestro componente se actualice
      componentDidUpdate(){
             console.log('My component was just updated - it rendered')
      }







      //Método de renderizado
      
      //React tenemos que definir el render si no definimos esta función aqui
      //React va a lanzar un error  y decir que no tiene un métodorenderizado que esté devolviendo cualquier jsx      
      render(){

         if(this.state.errMessage && !this.state.lat){
               return <div>Error: {this.state.errMessage}</div>;
         }

         if(!this.state.errorMessage && this.state.lat){
               return <div>Latitude: {this.state.lat}</div>;
         }

         return <div>Loading!</div>
      } 

     
}


ReactDom.render(<App />, document.querySelector('#root'));