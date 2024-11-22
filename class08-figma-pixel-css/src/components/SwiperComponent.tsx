"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Swiper modules
import { Pagination, Navigation } from "swiper/modules";
import { BiSolidQuoteLeft } from "react-icons/bi";

interface ReviewCardData {
  reviewText: string;
  reviewImage: string;
  reviewerName: string;
  reviewerPosition: string;
}

const reviewCards: ReviewCardData[] = [
  // ... your reviewCards data here
];

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={20}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="swiper-container"
      loop={true}
      modules={[Pagination, Navigation]}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {reviewCards.map((review, index) => (
        <SwiperSlide key={index} className="swiper-slide">
          {({ isActive }) => (
            <div className={`review-card ${isActive ? "active" : "inactive"}`}>
              <BiSolidQuoteLeft
                className={`quote-icon ${isActive ? "active" : "inactive"}`}
              />
              <p className={`review-text ${isActive ? "active" : "inactive"}`}>
                {review.reviewText}
              </p>
              <hr className={`divider ${isActive ? "active" : "inactive"}`} />
              <div className="reviewer-info">
                <Image
                  src={review.reviewImage}
                  alt={review.reviewerName}
                  width={80}
                  height={80}
                  className="reviewer-image"
                />
                <div className="reviewer-details">
                  <h3
                    className={`reviewer-name ${
                      isActive ? "active" : "inactive"
                    }`}
                  >
                    {review.reviewerName}
                  </h3>
                  <p
                    className={`reviewer-position ${
                      isActive ? "active" : "inactive"
                    }`}
                  >
                    {review.reviewerPosition}
                  </p>
                </div>
              </div>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
