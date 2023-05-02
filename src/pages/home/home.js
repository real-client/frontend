import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "./home.css";
import img1 from "../../assets/events.jpeg";
import img2 from "../../assets/fp2.jpeg";
import img3 from "../../assets/fp3.jpeg";
import profile from "../../assets/profile.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Carousal from "react-elastic-carousel";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider",
    arrows: true,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} className="prev-arrow" />,
    nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
  };

  const breakPoints = {
    1: { itemsToShow: 1 },
    550: { itemsToShow: 2 },
    768: { itemsToShow: 3 },
    1200: { itemsToShow: 4 },
  };

  
  return (
    <div className="slider-container">
      <Slider {...settings}>

        <div className="slide">
          <div className="morework">
            more webinars and worshops goes here <br />
            time added <br />{" "}
            <p className="time">
              {" "}
              24 <br />
              march <br /> 2023{" "}
            </p>
          </div>
          <div className="card">
            <img src={img1} alt="img1" />
            <div className="text">
              <h3>1</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consectetur tincidunt mauris. Donec faucibus consectetur arcu
                bibendum venenatis. Vestibulum ante ipsum primis in faucibus
                orci luctu
              </p>
              <button className="button-more"> More details</button>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="morework">
            more webinars and worshops goes here <br />
            time added <br />{" "}
            <p className="time">
              {" "}
              13 <br />
              january <br /> 2023{" "}
            </p>
          </div>
          <div className="card">
            <img src={img2} alt="img2" />
            <div className="text">
              <h3>2</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consectetur tincidunt mauris. Donec faucibus consectetur arcu
                bibendum venenatis. Vestibulum ante ipsum primis in faucibus
                orci luctu
              </p>
              <button className="button-more"> More details</button>
            </div>
          </div>
        </div>

        <div className="slide">
          <div className="morework">
            more webinars and worshops goes here <br />
            time added <br />{" "}
            <p className="time">
              {" "}
              22 <br />
              april <br /> 2023{" "}
            </p>
          </div>
          <div className="card">
            <img src={img3} alt="img3" />
            <div className="text">
              <h3>3</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                consectetur tincidunt mauris. Donec faucibus consectetur arcu
                bibendum venenatis. Vestibulum ante ipsum primis in faucibus
                orci luctu
              </p>
              <button className="button-more"> More details</button>
            </div>
          </div>
        </div>
      </Slider>


      <div class="page-opportunity">

        <div class="section">
          <h2 class="texthome">events</h2>
          <div class="container-opportunity">
            <div class="card-opportunity">
              <div class="imgbox">
                <img src={img1} alt="img1" />
                <h2 class="number">Card One</h2>
              </div>
              <div class="content-opportunity">
                <p class="desc-opp">Add some description about card</p>
              </div>
            </div>
            <div class="card-opportunity">
              <div class="imgbox">
                <img src={img1} alt="img1" />
                <h2 class="number">Card Two</h2>
              </div>
              <div class="content-opportunity">
                <p class="desc-opp">Add some description about card</p>
              </div>
            </div>
          </div>
          <a href="/events" className="button-seemore">
            view more events
          </a>
        </div>
        <div class="divider"></div>

        <div class="section">
          <h2 class="texthome">oppurtunities</h2>
          <div class="container-opportunity">
            <div class="card-opportunity">
              <div class="imgbox">
                <img src={img2} alt="img1" />
                <h2 class="number">Card Three</h2>
              </div>
              <div class="content-opportunity">
                <p class="desc-opp">Add some description about card</p>
              </div>
            </div>
            <div class="card-opportunity">
              <div class="imgbox">
                <img src={img2} alt="img1" />
                <h2 class="number">Card Four</h2>
              </div>
              <div class="content-opportunity">
                <p class="desc-opp">Add some description about card</p>
              </div>
            </div>
          </div>
          <a href="/opportunities" className="button-seemore">
            view more oppurtunities
          </a>
        </div>
        <div class="divider"></div>

        <div class="section">
          <h2 class="texthome">competetion</h2>
          <div class="container-opportunity">
            <div class="card-opportunity">
              <div class="imgbox">
                <img src={img3} alt="img1" />
                <h2 class="number">Card Five</h2>
              </div>
              <div class="content-opportunity">
                <p class="desc-opp">Add some description about card</p>
              </div>
            </div>
            <div class="card-opportunity">
              <div class="imgbox">
                <img src={img3} alt="img1" />
                <h2 class="number">Card Six</h2>
              </div>
              <div class="content-opportunity">
                <p class="desc-opp">Add some description about card</p>
              </div>
            </div>
          </div>
          <a href="/competitions" className="button-seemore">
            view more competetions
          </a>
        </div>
      </div>

    <Carousal breakPoints={breakPoints}>
      <div className="testi-content">

        <div className="testimonials">
          <div className="testi-container">
            <div>
              <img className="testi-image" src={profile} alt="profile pic" />
            </div>
            <div className="testi-text">
              <h2>Jad Rifai</h2>
              <h3> testimonial</h3>
              <p>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                rem consequuntur harum? Eligendi, nihil. Animi sunt cum incidunt
                esse unde perspiciatis voluptate id reprehenderit pariatur, nam
                eius veritatis assumenda distinctio?
              </p>
            </div>
          </div>
        </div>
        
        <div className="testimonials">
          <div className="testi-container">
            <div>
              <img className="testi-image" src={profile} alt="profile pic" />
            </div>
            <div className="testi-text">
              <h2>Jad Rifai</h2>
              <h3> testimonial</h3>
              <p>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                rem consequuntur harum? Eligendi, nihil. Animi sunt cum incidunt
                esse unde perspiciatis voluptate id reprehenderit pariatur, nam
                eius veritatis assumenda distinctio?
              </p>
            </div>
          </div>
        </div>

        <div className="testimonials">
          <div className="testi-container">
            <div>
              <img className="testi-image" src={profile} alt="profile pic" />
            </div>
            <div className="testi-text">
              <h2>Jad Rifai</h2>
              <h3> testimonial</h3>
              <p>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                rem consequuntur harum? Eligendi, nihil. Animi sunt cum incidunt
                esse unde perspiciatis voluptate id reprehenderit pariatur, nam
                eius veritatis assumenda distinctio?
              </p>
            </div>
          </div>
        </div>

        <div className="testimonials">
          <div className="testi-container">
            <div>
              <img className="testi-image" src={profile} alt="profile pic" />
            </div>
            <div className="testi-text">
              <h2>Jad Rifai</h2>
              <h3> testimonial</h3>
              <p>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                rem consequuntur harum? Eligendi, nihil. Animi sunt cum incidunt
                esse unde perspiciatis voluptate id reprehenderit pariatur, nam
                eius veritatis assumenda distinctio?
              </p>
            </div>
          </div>
        </div>
        
        <div className="testimonials">
          <div className="testi-container">
            <div>
              <img className="testi-image" src={profile} alt="profile pic" />
            </div>
            <div className="testi-text">
              <h2>Jad Rifai</h2>
              <h3> testimonial</h3>
              <p>
                {" "}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
                rem consequuntur harum? Eligendi, nihil. Animi sunt cum incidunt
                esse unde perspiciatis voluptate id reprehenderit pariatur, nam
                eius veritatis assumenda distinctio?
              </p>
            </div>
          </div>
        </div>
      </div>
      </Carousal>

      {/* <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={profile} alt="profile pic"/> lorem.</SwiperSlide>
        <SwiperSlide> <img src={profile} alt="profile pic"/> lorem.</SwiperSlide>
        <SwiperSlide> <img src={profile} alt="profile pic"/> lorem.</SwiperSlide>
        <SwiperSlide> <img src={profile} alt="profile pic"/> lorem.</SwiperSlide>
        <SwiperSlide> <img src={profile} alt="profile pic"/> lorem.</SwiperSlide>
        <SwiperSlide> <img src={profile} alt="profile pic"/> lorem.</SwiperSlide>
        <SwiperSlide> <img src={profile} alt="profile pic"/> lorem.</SwiperSlide>
        <SwiperSlide> <img src={profile} alt="profile pic"/> lorem.</SwiperSlide>
      </Swiper> */}

      {/* <div className="page-opportunity">
      <p className="texthome"> Latest opportunities </p>
      <div className="container-opportunity">
        <div className="card-opportunity">
          <div className="imgbox">
            <img src={img1} alt="img1"/>
            <h2 className='number'> card one</h2>
          </div>
          <div className="content-opportunity">
            <p className='desc-opp'> Add some description about card </p>
          </div>
        </div>
        <div className="card-opportunity">
          <div className="imgbox">
            <img src={img1} alt="img1"/>
            <h2 className='number'> card two</h2>
          </div>
          <div className="content-opportunity">
            <p className='desc-opp'> Add some description about card </p>
          </div>
        </div>
        <div className="card-opportunity">
          <div className="imgbox">
            <img src={img2} alt="img1"/> 
            <h2 className='number'> card three</h2>
          </div>
          <div className="content-opportunity">
            <p className='desc-opp'> Add some description about card </p>
          </div>
        </div>
      </div>
      <a href="/opportunities" className="button">See More oppurtunities</a>
    </div> */}
    </div>
  );
}
