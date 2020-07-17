import React from 'react';
import { Container } from 'reactstrap';
import Carousel from '../components/Carousel';

const Nosotros = () => {
    return (
        <React.Fragment>
            <Carousel />
            <div className="texto_nosotros">
                <h2>Sobre nosotros</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, mollitia! Quod dicta labore eaque placeat
                neque ipsum rerum nesciunt quisquam minus magnam. Iusto repellendus, placeat quisquam ipsum soluta inventore
                molestiae debitis nihil dolores minima labore suscipit nulla, iure veritatis nisi alias consequuntur reprehenderit
      vero tenetur eligendi omnis. Dicta, sapiente assumenda.</p>
            </div>
        </React.Fragment>
    )
}

export default Nosotros;