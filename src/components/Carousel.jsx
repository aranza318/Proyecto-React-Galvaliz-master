import Alfajorcitos from "../assets/img/alfajorcitos.jpg";
import BO from "../assets/img/biscochos.jpg";
import Bombas from "../assets/img/bombas.jpg";
import Brownies from "../assets/img/bownies.jpg";

const Carousel = () => {
    
    return(
        <div className="container-fluid">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={Alfajorcitos} alt="Alfajores" className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                        <img src={BO} alt="Oregano" className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                        <img src={Bombas} alt="Bombas" className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                        <img src={Brownies} alt="Brownies" className="d-block w-100" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
  }
  
  export default Carousel;