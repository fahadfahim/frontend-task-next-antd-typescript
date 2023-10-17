import { ArrowRightOutlined } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import instImg from "../../assets/images/instructor-img.png";
import { Col, Row } from "antd";
const BecomeInstructor = () => {
  return (
    <div className="become-bg">
      <div className="wrapper">
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
            <div className="become-card">
              <div className="card-about">
                <h1>Become an instructor</h1>
                <p>
                  Instructors from around the world teach millions of students
                  on Udemy. We provide the tools and skills to teach what you
                  love.
                </p>
                <div className="learning-btn">
                  <Link href="#" className="start-learning-btn">
                    Start Learning
                    <span>
                      <ArrowRightOutlined />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="instructor-img">
                <Image src={instImg} alt="John Doe" />
              </div>
            </div>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
            <div className="become-desc">
              <div className="your-teaching">
                <div className="your-teaching-title">
                  <h1>Your teaching & earning steps</h1>
                </div>
                <div className="teaching-opt">
                  <ul>
                    <li>
                      <span className="for-all one-bg">1</span>Apply to become
                      instructor
                    </li>
                    <li>
                      <span className="for-all two-bg">2</span>Built & Edit your
                      profile
                    </li>
                    <li>
                      <span className="for-all three-bg">3</span>Create Your new
                      Course
                    </li>
                    <li>
                      <span className="for-all four-bg">4</span>Start Teaching &
                      Earning
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BecomeInstructor;
