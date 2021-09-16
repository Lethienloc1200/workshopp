import React, { Component } from "react";
import "../css/HomeList.css";
import "../css/Home.css";

// import HomeItem from "../../components/HomeItem" 

class HomeList extends Component {
  render (){
    return(
    <div className="home">
        {/* <div className="container-fluid"> */}
        {/* ===slide========= */}
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className=""
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg"
                className="d-block w-100 home__image"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                className="d-block w-100 home__image"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Toys_en_US_1x._CB431858161_.jpg"
                className="d-block w-100 home__image"
                alt="..."
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
{/* Hết caroseld */}

        {/* <div className="home__row "> */}
         {/* <div className="row mx-auto"> */}
           {/* <div className="col-sm-12 "> */}
          
                 {this.props.children}

         
           {/* </div> */}
       
          
         {/* </div> */}
        {/* </div> */}

      </div>
    // </div>
    
    );
  }
}

export default HomeList;
