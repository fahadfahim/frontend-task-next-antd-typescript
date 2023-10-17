import React from "react";
import InstructorCard from "./instructorCard";
import inst1 from "../../assets/images/ins1.png";
import inst2 from "../../assets/images/ins2.png";
import inst3 from "../../assets/images/ins3.png";
import inst4 from "../../assets/images/ins4.png";
import inst5 from "../../assets/images/ins5.png";
const TopInstructor = () => {
  return (
    <div className="top-instructor">
      <div className="wrapper">
        <div className="top-inst-wrapper course-border">
          <div className="top-instructor-title">
            <h1>Top instructor of the month</h1>
          </div>
          <div className="inst-wrapper">
            <InstructorCard
              img={inst1}
              rating="5.0"
              students="34k"
              cardBorder="course-border"
            />
            <InstructorCard
              img={inst2}
              rating="5.0"
              students="34k"
              cardBorder="course-border"
            />
            <InstructorCard
              img={inst3}
              rating="5.0"
              students="34k"
              cardBorder="course-border"
            />
            <InstructorCard
              img={inst4}
              rating="5.0"
              students="34k"
              cardBorder="course-border"
            />
            <InstructorCard
              img={inst5}
              rating="5.0"
              students="34k"
              cardBorder="course-border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInstructor;
