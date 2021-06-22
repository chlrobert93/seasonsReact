import React from 'react';


//Crear Objecto

const seasonConfig = {
    sumer: {
        text: "Let's hit the beach!",
        iconName: 'huge red sun loading'
    },
    winter: {
        text: 'Burr it is cold!',
        iconName: 'huge blue snowflake loading'
    }
};



const getSeason = (lat, month) => {
    console.log(lat);
    console.log(month);

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

     //const text = season === 'winter' ? 'Burn, it is chilly' : 'Lets hit the beach';
     //const icon = season === 'winter' ? 'huge blue snowflake loading' : 'huge red sun loading';

     const {  text,iconName } = seasonConfig[season];

    return (
        <div>
            <i className={`${iconName} icon`} />
              <h1>{text}</h1>
            <i className={`${iconName} icon`} />     
       </div>
    );
};




export default SeasonDisplay;