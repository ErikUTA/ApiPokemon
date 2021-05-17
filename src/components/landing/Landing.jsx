import React from 'react';
import './Landing.css';
import image from '../../assets/images/paris.jpg'

function Landing(){

    return(
        <div className="Div">
            <div className="EspacioI">
                <img src={image} className="Img" alt="Hola" />
            </div>
            <div className="EspacioP">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, culpa ad! Pariatur cum maiores quod quaerat odio qui est at? Nobis ut quae commodi ipsam, pariatur et quia odit soluta!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, culpa ad! Pariatur cum maiores quod quaerat odio qui est at? Nobis ut quae commodi ipsam, pariatur et quia odit soluta!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, culpa ad! Pariatur cum maiores quod quaerat odio qui est at? Nobis ut quae commodi ipsam, pariatur et quia odit soluta!
                </p>
            </div>
        </div>
    );            
    
}

export default Landing;
