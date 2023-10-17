import { CourseCardProps } from "@/interfaces/courseCard";
import { StarFilled } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

const CourseCard = ({
  img,
  design,
  price,
  title,
  rating,
  students,
  bg,
  cardBorder,
}: CourseCardProps) => {
  return (
    <div className={`${cardBorder ? cardBorder : ""} course-card`}>
      <div className="card-img">
        <Image src={img} alt="course title" />
      </div>
      <div className="card-info">
        <div className="design-price">
          <p className={`lbl ${bg}`}>{design}</p>
          <p className="price">${price}</p>
        </div>
        <div className="course-title">
          <h1>{title}</h1>
        </div>
      </div>
      <div className="rating-enroll">
        <div className="rating">
          <StarFilled
            style={{
              color: "rgba(253, 142, 31, 1)",
              marginRight: "6px",
            }}
          />
          {rating}
        </div>
        <div className="enroll">
          {students} <span className="students">Students</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
