import { useState } from "react";
import React from "react";

import '../style/Metas.css';

function Metas(){
    const[nota, setNota]=useState(" ");
    const[metas, setMetas]=useState([]);
    const addNota=(nota)=>{
        setNota(nota);
       
    }
    const agregarMeta=()=>{
        setMostrar(true);
        setNumero2(numero2+1);
        addNota(nota);
        setMetas(metas+1);
        <hijo/>
        
    }
    const completado=()=>{
        setNumero1(numero1+1);
        setNumero2(numero2-1);


    }
    const [mostrar, setMostrar] = useState(false);
    const [numero1, setNumero1]=useState(0);
    const [numero2, setNumero2]=useState(0);
    function hijo(){
        return(
<div className="aparecer" >
   <label className="nuevanota">    {nota}</label>   
   
  </div>
        );

    }
    return(
<div className="principal">
    <h1>    Mis Metas</h1>
    <div className="metas">
        <input className="entrada" type="text" value={nota} onChange={(e)=>setNota(e.target.value)}
        />
        <button onClick={agregarMeta}>    Agregar</button>
    </div>
    <div className="revision">
        <div className="completado">    Completadas : {numero1}</div>
        <div className="pendiente">    Pendientes : {numero2}</div>
     
    </div>
   
    {mostrar && ( 
    
   <div className="aparecer" >
   <label className="nuevanota">    {nota}</label>   
   <figure className="icon">
        <img src="../icons/trash 1.svg" onClick={e=>setMostrar(false)}></img>
     </figure>
<figure className="icon" onClick={completado}>
  <img src="../icons/check-circle 1.svg"></img>
</figure>

  </div>
  
   )}

</div>

    );
}
export default Metas;