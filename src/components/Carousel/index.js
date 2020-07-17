import React from 'react';
import './index.css';

const carousel = () => {
    return (
        <div className="fondo_carrusel">
            <div className="color_carrusel">
                <div className="micarrusel ">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="https://res.cloudinary.com/deepmx/image/upload/v1592446320/eugeniaProducts/01_PastelLaVieEnRose.png" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://res.cloudinary.com/deepmx/image/upload/v1592446319/eugeniaProducts/06_GalletasImperiales_Sencilla_ChocolateAmargo_Corazon.png" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="https://res.cloudinary.com/deepmx/image/upload/v1592446322/eugeniaProducts/16_Alfajor.png" alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default carousel;