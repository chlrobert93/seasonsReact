import React  from 'react';

const Spinner = (props) => {
    return(
          <div className="ui active dimmer">
              <div className="ui big text loader">{props.message}</div>
          </div>
    );
};

//Object esto proporcionará algunas propiedades predeterimnadas para este componente
//En caso de que no agregen un ms al spinner
Spinner.defaultProps ={
  message: 'Loading...' 
};

export default Spinner;