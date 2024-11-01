"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// import swiper style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// modules
import { Pagination, Navigation } from "swiper/modules";

import { BiSolidQuoteLeft } from "react-icons/bi";

interface ReviewCardData {
  reviewText: string;
  reviewImage: string;
  reviewerName: string;
  reviewerPosition: string;
}

const reviewCards: ReviewCardData[] = [
  {
    reviewText:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management.",
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
  {
    reviewText:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management.",
    reviewImage: "/Avatar4.png",
    reviewerName: "Sir Muhammad Bilal Khan",
    reviewerPosition: "Full Stack Developer",
  },
  {
    reviewText:
      "This platform has revolutionized how we manage projects and collaborate.",
    reviewImage: "/Avatar5.png",
    reviewerName: "Sir Ameen Alam",
    reviewerPosition: "Global AI & Cloud Education Leader",
  },
  {
    reviewText:
      "The integration features are incredibly useful and have saved us so much time.",
    reviewImage: "/Avatar6.png",
    reviewerName: "Mark Zuckerberg",
    reviewerPosition:
      "Co-founder chairman and CEO of Meta Platforms and Facebook",
  },
  {
    reviewText:
      "The integration features are incredibly useful and have saved us so much time.",
    reviewImage: "/Avatar7.png",
    reviewerName: "Bill Gates",
    reviewerPosition:
      "Co-founding of Microsoft and Bill & Melinda Gates Foundation",
  },
  {
    reviewText:
      "Whitepate is designed as a collaboration tool for businesses that is a full project management.",
    reviewImage: "/Avatar8.png",
    reviewerName: "Mohamed bin Zayed Al Nahyan",
    reviewerPosition: "President of the United Arab Emirates",
  },
  {
    reviewText:
      "This platform has revolutionized how we manage projects and collaborate.",
    reviewImage: "/Avatar9.png",
    reviewerName: "Elon Musk",
    reviewerPosition: "Founder, CEO, and chief engineer of SpaceX",
  },
  {
    reviewText:
      "The integration features are incredibly useful and have saved us so much time.",
    reviewImage: "/Avatar10.jpg",
    reviewerName: "Zubair Ahmed bin Jan",
    reviewerPosition: "Web Developer & Graphic Designer",
  },
];

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={20}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="max-w-[350px] md:max-w-[720px] lg:max-w-[1090px] overflow-auto my-6"
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
        <SwiperSlide key={index} className="mb-12">
          <div className="w-[350px] bg-[#4F9CF9] rounded-xl pt-12 pb-10 px-9 text-start shadow-lg">
            <BiSolidQuoteLeft className="mb-7 text-white text-7xl" />
            <p className="text-sm font-light text-white min-h-[70px] mb-6">
              {review.reviewText}
            </p>
            <hr className="pb-6 border-white" />
            <div className="flex justify-start items-center gap-5 min-h-28">
              <Image
                src={review.reviewImage}
                alt={review.reviewerName}
                width={80}
                height={80}
                className="w-[95px] rounded-full"
              />
              <div className="text-start">
                <h3 className="font-semibold text-xl text-[#043873] pb-2">
                  {review.reviewerName}
                </h3>
                <p className="text-white text-sm font-light">
                  {review.reviewerPosition}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
