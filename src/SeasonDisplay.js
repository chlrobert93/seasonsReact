import React from 'react';

const getSeason = (lat, month) => {
          if(month > 2 && month < 9){
              //Expreción ternaria
              return lat > 0 ? 'sumer' : 'winter';
          }else {
              return lat > 0 ? 'winter' : 'sumer';
          }
}

const SeasonDisplay = (props) => {

    
    const season = getSeason(props.lat, new Date().getMonth());
    console.log(season);
    //console.log(props.lat);

    const text = season === 'winter' ? 'Burn, it is chilly' : 'Lets hit the beach';
    const icon = season === 'winter' ? 'huge blue snowflake loading' : 'huge red sun loading';

    return (
        <div>
            <i className={`${icon} icon`} />
              <h1>{text}</h1>
            <i className={`${icon} icon`} />     
       </div>
    );
};




export default SeasonDisplay;