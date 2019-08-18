import React from 'react';
import './Main.css'

import logo from '../asserts/logo.svg'
import img from '../asserts/img.png'


 export default function Main({match}){
     return(
        <div className="defaultMain">  
            <img src={logo} alt="Tindev" id="logo"/>
            <ul>
                <li>
                    <img src={img} alt="" className="fotoDev"/>
                    <footer>
                        <strong>Filipe</strong>
                        <p>lorem lalalal</p>
                    </footer>
                    <div className="buttons">
                        <buttons type="button">

                        </buttons>
                        <buttons type="button">
                            
                        </buttons>
                    </div>
                </li>
                <li>
                    <img src={img} alt="" className="fotoDev"/>
                    <footer>
                        <strong>Filipe</strong>
                        <p>lorem lalalal</p>
                    </footer>
                    <div className="buttons">
                        <buttons type="button">

                        </buttons>
                        <buttons type="button">
                            
                        </buttons>
                    </div>
                </li>
                <li>
                    <img src={img} alt="" className="fotoDev"/>
                    <footer>
                        <strong>Filipe</strong>
                        <p>lorem lalalal</p>
                    </footer>
                    <div className="buttons">
                        <buttons type="button">

                        </buttons>
                        <buttons type="button">
                            
                        </buttons>
                    </div>
                </li>
                <li>
                    <img src={img} alt="" className="fotoDev"/>
                    <footer>
                        <strong>Filipe</strong>
                        <p>lorem lalalal</p>
                    </footer>
                    <div className="buttons">
                        <buttons type="button">

                        </buttons>
                        <buttons type="button">
                            
                        </buttons>
                    </div>
                </li>
            </ul>

        </div>
     );
 }