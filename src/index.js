import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component{

      //La función constructor es la primera función que se llamará cada vez que se cree una instancia 
      //Esta función se llamará automática e instantáneamente antes que cualquier otra cosa
      //Para inicializar el state  de un componente

           state  = {lat: null, errorMessage: ''};

      //Definimos una función
      //Se llamará  automáticamente una vez cuando nuestro componente se muestre por primera vez en la pantalla
      componentDidMount(){
            //console.log('My component was render to the screen');
             //Obtener  geolocalización
              window.navigator.geolocation.getCurrentPosition(
                  //Para actualizar
                  position => this.setState({ lat: position.coords.latitude}),
                  err => this.setState({ errorMessage: err.message}),
              );
      }

      //Definición de función
      //Se llamará automáticamente  cada vez que nuestro componente se actualice
      componentDidUpdate(){
             console.log('My component was just updated - it rendered')

             
      }


  renderContent(){
             
         if(this.state.errMessage && !this.state.lat){
            return <div>Error: {this.state.errMessage}</div>;
      }

      if(!this.state.errorMessage && this.state.lat){
           //Si podemos tomar el estado de un componenete y pasarlo como apoyo al cildren
            return(
              

                // Latitude: {this.state.lat}</div>
                 <SeasonDisplay lat={this.state.lat}/> 

            );

      }

      return(
       <div className="red"> 
          <Spinner  message="Please accept location request" />
      </div>
      
      );
   } 

   
      //Método de renderizado      
      render(){
      return (    
            <div className="red">
                {this.renderContent()}
            </div>
      );
  }
     
}


ReactDom.render(<App />, document.querySelector('#root'));