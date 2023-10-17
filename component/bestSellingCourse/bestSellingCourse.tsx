import { Col, Row } from "antd";
import React from "react";
import course1 from "../../assets/images/Course-Images-1.png";
import course2 from "../../assets/images/Course-Images-2.png";
import course3 from "../../assets/images/Course-Images-3.png";
import course4 from "../../assets/images/Course-Images-4.png";
import course5 from "../../assets/images/Course-Images-5.png";
import course6 from "../../assets/images/Course-Images-6.png";
import course7 from "../../assets/images/Course-Images-7.png";
import course8 from "../../assets/images/Course-Images-8.png";
import course9 from "../../assets/images/Course-Images-9.png";
import course10 from "../../assets/images/Course-Images-10.png";
import Image from "next/image";
import { StarFilled } from "@ant-design/icons";
import CourseCard from "../courseCard/courseCard";
const BestSellingCourse = () => {
  return (
    <div className="best-selling">
      <div className="best-selling-wrapper">
        <div className="best-title">
          <h1>Best Selling Course</h1>
        </div>
        <div className="course-wrapper">
          <CourseCard
            img={course1}
            design="Design"
            price={12}
            title="Mechine learning A-Z TM 2021 Complete Python
                  Bootcamp From Zero to Hero..."
            rating="5.0"
            students="445k"
            bg="bg-orange"
          />
          <CourseCard
            img={course2}
            design="Development"
            price={12}
            title="Mechine learning A-Z TM 2021 Complete Python
                  Bootcamp From Zero to Hero..."
            rating="5"
            students="445k"
            bg="bg-blue"
          />
          <CourseCard
            img={course3}
            design="Business"
            price={12}
            title="Mechine learning A-Z TM 2021 Complete Python
                  Bootcamp From Zero to Hero..."
            rating="5"
            students="445k"
            bg="bg-green"
          />
          <CourseCard
            img={course4}
            design="Marketing"
            price={12}
            title="Mechine learning A-Z TM 2021 Complete Python
                  Bootcamp From Zero to Hero..."
            rating="5"
            students="445k"
            bg="bg-blue"
          />
          <CourseCard
            img={course5}
            design="IT & Software"
            price={12}
            title="Mechine learning A-Z TM 2021 Complete Python
                  Bootcamp From Zero to Hero..."
            rating="5"
            students="445k"
            bg="bg-light"
          />
          <CourseCard
            img={course6}
            design="Music"
            price={12}
            title="Mechine learning A-Z TM 2021 Complete Python
                  Bootcamp From Zero to Hero..."
            rating="5"
            students="445k"
            bg="bg-light"
          />
          <CourseCard
            img={course7}
            design="Marketing"
            price={12}
            title="Mechine learning A-Z TM 2021 Complete Python
                  Bootcamp From Zero to Hero..."
            rating="5"
            students="445k"
            bg="bg-blue"
          />
          <CourseCard
            img={course8}
            design="Health & Fitness"
            price={12}
            title="Mechine learning A-Z TM 2021 Complete Python
                  Bootcamp From Zero to Hero..."
            rating="5"
            students="445k"
            bg="bg-green"
          />
          <CourseCard
            img={course9}
            design="Design"
            price={12}
            title="Mechine learning A-Z TM 2021 Complete Python
                  Bootcamp From Zero to Hero..."
            rating="5"
            students="445k"
            bg="bg-orange"
          />
          <CourseCard
            img={course10}
            design="Life Style"
            price={12}
            title="Mechine learning A-Z TM 2021 Complete Python
                  Bootcamp From Zero to Hero..."
            rating="5"
            students="445k"
            bg="bg-light"
          />
        </div>
      </div>
    </div>
  );
};

export default BestSellingCourse;
