import { instructorCardProps } from "@/interfaces/instructorCard";
import { StarFilled } from "@ant-design/icons";
import Image from "next/image";
import React from "react";

const InstructorCard = ({
  img,
  rating,
  students,
  bg,
  cardBorder,
}: instructorCardProps) => {
  return (
    <div className={`${cardBorder ? cardBorder : ""} instructor-card`}>
      <div className="card-img">
        <Image src={img} alt="instructor title" />
      </div>
      <div className="card-info">
        <h1>John Doe</h1>
        <p>Senior Software Developer</p>
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

export default InstructorCard;
