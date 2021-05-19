import React from "react";
import './CallApi.css';
import warningPokemon from '../../../assets/images/error.gif';

const PokemonContainer = (props) => {    
  
  if(props){
    var pokemonImage = props.images.front;
  }else{
    var pokemonImage = warningPokemon;
  }

  if(props.shiny && props.front) {
    pokemonImage = props.images.frontShiny;
  } else if (props.shiny) {
    pokemonImage = props.images.backShiny;
  } else if (!props.front) {
    pokemonImage = props.images.back;
  }

  return (
    <div >
      <div className="div">
        <button  onClick={ props ? props.onChangeType : ''} className="button">{
            props.shiny ? 'Switch to regular' : 'Switch to shiny'
        }</button>
      </div>
      <div>
        <img
          className="img"
          src={pokemonImage ? pokemonImage : warningPokemon}
          alt="Pokemon"
        />        
      </div>
      <div className="div">
        <button onClick={ props ? props.onFlip : ''} className="button">{
            props.front ? 'Back' : 'Front'
        }</button>
      </div>
      
    </div>
  );
};

export default PokemonContainer;