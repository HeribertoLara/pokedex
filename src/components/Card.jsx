import React, {Fragment} from 'react';
import './components.css'

const Card = (props)=>{
console.log(props)


    return(
        <Fragment>
            <div className=" box"> 
                <h2>{props.name}</h2>
                <img src={props.image} alt=""/>
                <div>
                    <ul>
                        <li>HP: {props.base.HP}</li>
                        <li>Ataque: {props.base.Attack}</li>
                        <li>Defensa: {props.base.Defense}</li>
                        <li>Velocidad: {props.base.Speed}</li>
                    </ul>
                </div>
                <div>
                    {props.type.map((type)=>{
                        return(
                        <button className={`type ${type}`}>{type}</button>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
} 
export default Card;