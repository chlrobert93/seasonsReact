import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

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
/*
      //La función constructor es la primera función que se llamará cada vez que se cree una instancia 
      //Cada vez que creamos una nueva instancia del componente de aplicación y la mostramos en la pantalla
      //Esta función se llamará automática e instantáneamente antes que cualquier otra cosa
      //Para inicializar el state  de un componente

      //Solo tiene un solo propósito es actualizar o inicializar nuestro objecto de state
      constructor (props) {
            //Se nos exige
            //Es una referencia a la función contructura del padre 
            super(props);
            //El objecto state
            //null por que no sabemos que latitud es ahora  mismo
            //Esta es la única  vez que hacemos asignación directa
            //to this.state
            this.state = {lat: null, errMessage: ''};
            this.state = {long: null};  
      }
*/
            state  = {lat: null, errorMessage: ''};


      //Definimos una función
      //Se llamará  automáticamente una vez cuando nuestro componente se muestre por primera vez en la pantalla
      componentDidMount(){/*
            console.log('My component was render to the screen');
             //Obtener  geolocalización
             window.navigator.geolocation.getCurrentPosition(
                  //Devolución en parámetros
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
              );*/
              window.navigator.geolocation.getCurrentPosition(
                  position => this.setState({ lat: position.coords.latitude}),
                  err => this.setState({ errorMessage: err.message}),
              );
      }

      //Definición de función
      //Se llamará automáticamente  cada vez que nuestro componente se actualice
      componentDidUpdate(){
             console.log('My component was just updated - it rendered')

             
      }

      //Método de renderizado
      
      //React tenemos que definir el render si no definimos esta función aquí
      //React va a lanzar un error y decir que no tiene un métodorenderizado que esté devolviendo cualquier jsx      
      render(){

         if(this.state.errMessage && !this.state.lat){
               return <div>Error: {this.state.errMessage}</div>;
         }

         if(!this.state.errorMessage && this.state.lat){

              //Si podemos tomar el estado de un componenete y pasarlo como apoyo al cildren
               return(
                 
                  <div> <SeasonDisplay lat={this.state.lat}/> 
                  Latitude: {this.state.lat}</div>
               );

         }

         return <div>Loading!</div>
      } 

     
}


ReactDom.render(<App />, document.querySelector('#root'));