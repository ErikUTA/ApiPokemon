import React, { useEffect, useState } from 'react';
import './ApiExample.css';
import PokemosImage from '../../../assets/images/error.gif';

const BASE_API = 'https://pokeapi.co/api/v2/';
var nmb; 
var message = 'Front';
var message2 = 'Switch to regular';
var loading = 'Cargando...';


const ApiExample = () => {    
  const [data, setData] = useState(null);
  const [task, setTask] = useState('');
  const [items, setItems] = useState([]);
  const handleTaskChange = (event) => {
    setTask(event.target.value);
  }  

  var number = task;    
  
  useEffect(() => {     
    setItems(prevItems => [...prevItems,
    {
      task        
    }
    ]);      
    
    const callApi = async () => {                 
      const response = await fetch(BASE_API + `pokemon/${number ? number : '0'}`);  
      if(response.status === 200){        
        const result = await response.json();  
        console.log(response);                      
        console.log(result);                      
        setData(result.sprites.front_default);                                     
      }
      if(response.status === 404){
        setData(PokemosImage);              
      }
    }                   
    callApi()  
  }, []);     
  

  function render() {
    const exect = async () => {
      const response = await fetch(BASE_API + `pokemon/${number ? number : '0'}`);      
      if(response.status === 200){            
        const result = await response.json();  
        console.log(response);                      
        console.log(result);                      
        setData(result.sprites.front_default);                                     
      }
      if(response.status === 404){
        setData(PokemosImage);              
      }
    }
    exect();
  }

  
  const callApi = () => { 
    document.getElementById('get').style.display="none";        
    document.getElementById('loading').innerHTML=loading;
    setTimeout(() => { document.getElementById('loading').innerHTML=""}, 3000);                   
    setTimeout( render , 3500);                  
    setTimeout(() => { document.getElementById('get').style.display="initial"; }, 3550);                             
  }
      
  const shiny = async () => {            
    const response = await fetch(BASE_API + `pokemon/${number ? number : '0'}`);     
    if(response.status === 200){      
      const result = await response.json();  
      
      if(message2 == 'Switch to shiny'){                                  
        setData(result.sprites.front_shiny);                                             
        nmb = 2;
      }

      if(message2 == 'Switch to regular'){          
        setData(result.sprites.front_default);     
        nmb = 1;
      }                  
      
      console.log(nmb);      
    } 

    if(response.status === 404){
      setData(PokemosImage);      
    }
     
    
    if(message2 === 'Switch to regular'){
      message2 = 'Switch to shiny';
      
    }else{
      message2 = 'Switch to regular';
    }
    

  }

  const change = async () => {              
    const response = await fetch(BASE_API + `pokemon/${number ? number : '0'}`);   
    if(response.status === 200){                     
      const result = await response.json();        
      
      if(message == 'Back' && nmb == 1){                          
          setData(result.sprites.back_default);     
      }

      if(message == 'Back' && nmb == 2){          
          setData(result.sprites.back_shiny);                                     
      }
      
      if(message == 'Front' && nmb == 1){                
          setData(result.sprites.front_default);                                     
      }

      if(message == 'Front' && nmb == 2){          
          setData(result.sprites.front_shiny);                           
      }             
                      
    }
    
    if(response.status === 404){
      setData(PokemosImage);      
    }
    
    if(message === 'Front'){
      message = 'Back';
    }else{
      message = 'Front';
    }

  }

  return (
    <div className="center margin">
      <div>        
        <div>
          <div className="search">
            <input type="text" onChange={ handleTaskChange } className="input" placeholder="Buscar pokemon"/>
            <button className="button" id="get" onClick={ callApi }><strong>Search</strong></button>        
          </div> 
          <div className="div">
            <button className="button" onClick={ shiny }><strong>{ message2 == 'Switch to regular' ? 'Switch to shiny' : 'Switch to regular' }</strong></button>
          </div>
          <div className="image">
            <img src={ data ? data : '' } className="img" alt="Error"/>
          </div>          
          <div className="div">
            <button className="button" onClick={ change }><strong>{ message == 'Front' ? 'Back' : 'Front' }</strong></button>
          </div>      
          <p id="loading"></p>           
        </div>           
      </div>
    </div>
  );
};

export default ApiExample;