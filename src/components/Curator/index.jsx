import React from "react";
import './style.scss';
import curatorPhoto from '../../images/roberto-barros.jpg';

const CuratorItem = props => {

    return (

        <div className = "curator__container">
            <div className = "curator__photo">
                <img src = {curatorPhoto} alt = "Foto curador Roberto Barros" />
            </div>
            <div className = "curator__details">
                <div>
                <h3>Roberto Barros</h3>
                <h6>Curadoria</h6>
                </div>
                <p>Ex-funcionário do mercado financeiro. Atualmente estudante de programação (front-end), em busca da primeira oportunidade como desenvolvedor júnior</p>
            </div>
        </div>
    )
}

export default CuratorItem;