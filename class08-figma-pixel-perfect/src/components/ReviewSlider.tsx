// src/app/components/ReviewSlider.tsx
import React from "react";
import Slider from "react-slick";
// src/app/components/ReviewSlider.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

interface ReviewCardData {
  reviewText: string;
  reviewImage: string;
  reviewerName: string;
  reviewerPosition: string;
}

const reviewCards: ReviewCardData[] = [
  {
    reviewText:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    reviewImage: "/Avatar1.png",
    reviewerName: "Oberon Shaw, MCH",
    reviewerPosition: "Head of Talent Acquisition, North America",
  },
  {
    reviewText:
      "This platform has revolutionized how we manage projects and collaborate.",
    reviewImage: "/Avatar2.png",
    reviewerName: "Alice Johnson",
    reviewerPosition: "Project Manager, Global Corp",
  },
  {
    reviewText:
      "The integration features are incredibly useful and have saved us so much time.",
    reviewImage: "/Avatar3.png",
    reviewerName: "Michael Brown",
    reviewerPosition: "Product Owner, Tech Solutions",
  },
];

const ReviewSlider: React.FC = () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        {reviewCards.map((card, index) => (
          <div
            key={index}
            className="p-4 text-center border border-gray-200 rounded-lg"
          >
            <img
              src={card.reviewImage}
              alt={card.reviewerName}
              className="mx-auto mb-4 rounded-full w-16 h-16"
            />
            <p className="text-lg italic">"{card.reviewText}"</p>
            <p className="mt-2 font-bold">{card.reviewerName}</p>
            <p className="text-sm text-gray-500">{card.reviewerPosition}</p>
          </div>
        ))}
      </SwiperSlide>
    </Swiper>
  );
};

export default ReviewSlider;
