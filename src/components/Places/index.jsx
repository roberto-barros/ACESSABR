import React from "react";
import './places.scss';
import Slider from '../Slider'

const Places = props => {

    return (
        <section className="places">
            <div className="places__header">
                <h2 className="places__title">Locais <span>acessíveis</span></h2>
                
                <div className="places__select">
                    <h5>Ordenar por:</h5>
                    <select>
                        <option>Distância</option>
                        <option>Alfabeto</option>
                    </select>
                </div>
            </div>
            <div className="places__content">
                <Slider />
            </div>
        </section>
    )
}

export default Places;