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

import React from "react";

export default function ReviewSlider() {
  return <div>ReviewSlider</div>;
}
