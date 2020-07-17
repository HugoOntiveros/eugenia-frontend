import React from 'react';
import { Container } from 'reactstrap';
import pastel from '../assets/PASTEL_INICIO.png';
import './HomeContainer.css';

const Home = () => {
    return (
        <Container>
            <section className="fondo">
                <div className="contenedor">
                    <div className="contenedor_texto">
                        <h2 className="texto_eugenia">Eugenia</h2>
                        <p className="texto_inicio">PASTELERIA <br /> CETOGENICA</p>
                        <button type="button" className="btn " style={{ background: "#ffd600" }}
                            data-toggle="modal"
                            data-target="#exampleModalCenter">
                            Hacer un Pedido
                        </button>
                    </div>

                    <div>
                        <img className="pastel" src={pastel} alt="fotopastel" />
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Home;