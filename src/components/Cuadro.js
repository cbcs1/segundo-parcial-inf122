import React, { useState } from 'react';
import Metas from './Metas';
import '../styles/Cuadro.css';

function Cuadro(){
    const [nota, setNota]=useState("");
return(
    <div className="aparecer">
    <label>{nota}</label>
   </div>
);
}
export default Cuadro;

