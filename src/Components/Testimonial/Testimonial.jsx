import React from "react";
import { StarFill } from "react-bootstrap-icons";
import { Swiper, SwiperSlide } from "swiper/react";

import quote from "../../assets/img/testimonial/quote.png";
import man1 from "../../assets/img/testimonial/man1.png";
import man2 from "../../assets/img/testimonial/man2.png";
import man3 from "../../assets/img/testimonial/man3.png";
import testiArrow from "../../assets/img/testimonial/testi-arrow.png";
import Partner from "../Partner/Partner";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";

const reviewList = [
  {
    id: 1,
    name: "Saeed Riaz",
    position: "Founder, EduSmart",
    review: `RevoticAI transformed our platform with their custom AI solution. From automation to predictive analytics, they delivered beyond expectations.`,
    stars: Array(5).fill(<StarFill className="ratting fz-20" />),
  },
   {
    id: 2,
    name: "James Wright",
    position: "Head of Innovation, MedNova (USA)",
    review: `RevoticAI brought our vision to life. Their deep expertise in machine learning and seamless deployment made them our go-to AI partner.`,
    stars: Array(5).fill(<StarFill className="ratting fz-20" />),
  },
  {
    id: 3,
    name: "Naveed Malik",
    position: "COO, FinPay",
    review: `Working with RevoticAI was seamless. Their team delivered intelligent, scalable, and user-focused solutions that helped us launch faster.`,
    stars: Array(5).fill(<StarFill className="ratting fz-20" />),
  },
  {
    id: 4,
    name: "Emily Carter",
    position: "COO, LearnX (USA)",
    review: `Working with RevoticAI has been a game-changer. Their AI-driven recommendation engine boosted our user engagement by 60% in just two months.`,
    stars: Array(5).fill(<StarFill className="ratting fz-20" />),
  },
   {
    id: 5,
    name: "Omar Khan",
    position: "CTO, HealthBridge",
    review: `We approached RevoticAI with a challenge in clinical data processing. Their team created an intuitive AI pipeline that’s now the core of our system.`,
    stars: Array(5).fill(<StarFill className="ratting fz-20" />),
  },
 

];

const Testimonial = () => {
  return (
    <section className="testimonial__section pt-120 pb-120" id="testimonial">
      <div className="container">
        <div className="project__head text-center">
          <span className="common__sub" data-aos="fade-up" data-aos-duration="1000">
            Testimonials
          </span>
          <h2 className="fw-500" data-aos="fade-down" data-aos-duration="1000">
            What Our Clients Say
            <span className="d-block">About RevoticAI</span>
          </h2>
        </div>

        <div
          className="testimonial__v1wrap pb-120"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="swiper testimonial__slidewrap">
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  speed={3000}
                  pagination={{
                    clickable: true,
                    el: ".swiper-pagination3",
                  }}
                  autoplay={{
                    delay: 3000,
                  }}
                  loop={true}
                  modules={[Pagination, Autoplay]}
                >
                  {reviewList.map(({ id, name, position, review, stars }) => (
                    <SwiperSlide key={id}>
                      <div className="test__slide swiper-slide">
                        <div className="d-flex mb-40 align-items-center gap-2">
                          {stars.map((star, index) => (
                            <i key={index}>{star}</i>
                          ))}
                        </div>
                        <p>{review}</p>
                        <h4 className="base mb-2">{name}</h4>
                        <span className="fz-18 ptext">{position}</span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="swiper-pagination3"></div>
              </div>
            </div>
          </div>

          <div className="quote">
            <img src={quote} alt="img" />
          </div>
          <div className="man1">
            <img src={man1} alt="img" />
          </div>
          <div className="man2">
            <img src={man3} alt="img" />
          </div>
          <div className="man3">
            <img src={man2} alt="img" />
          </div>
          <div className="test__shape">
            <img src={testiArrow} alt="img" />
          </div>
        </div>

        <Partner />
      </div>
    </section>
  );
};

export default Testimonial;
