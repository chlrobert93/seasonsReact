import './css/SeasonDisplay.css';
import React from 'react';

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  //const text = season === 'winter' ? 'Burn, it is chilly' : 'Lets hit the beach';
  //const icon = season === 'winter' ? 'huge blue snowflake loading' : 'huge red sun loading';

  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`seasonDisplay ${season}`}>
      <i className={`icon-left ${iconName} icon`} />
      <h1 className={`seasonDisplay`}>{text}</h1>
      <i className={`icon-right ${iconName} icon`} />
    </div>
  );
};

//Crear Objecto
const seasonConfig = {
  sumer: {
    text: "Let's hit the beach!",
    iconName: 'massive loading sun  ',
  },
  winter: {
    text: 'Burr it is cold!',
    iconName: 'massive loading snowflake ',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    //Expreción ternaria
    return lat > 0 ? 'sumer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'sumer';
  }
};

export default SeasonDisplay;
