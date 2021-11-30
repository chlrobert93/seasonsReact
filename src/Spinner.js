import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui massive text loader">{props.message}</div>
    </div>
  );
};

//Object esto proporcionará algunas propiedades predeterimnadas para este componente
Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;
