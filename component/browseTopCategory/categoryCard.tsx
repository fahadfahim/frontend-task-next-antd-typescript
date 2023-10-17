import Image from "next/image";
import React from "react";
interface CardProps {
  label: string;
  info: string;
  bg: string;
  img: any;
  org?: boolean;
}
const CategoryCard = ({ label, info, bg, img, org }: CardProps) => {
  return (
    <div className={`cat-card ${bg}`}>
      <div className={`${org ? "per-img-bg" : "cat-img"} `}>
        <Image src={img} alt={label} />
      </div>
      <div className="cat-info">
        <p>{label}</p>
        <span>{info}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
