import React from "react";
import CourseCard from "../courseCard/courseCard";
import course1 from "../../assets/images/Course-Images-1.png";
import course2 from "../../assets/images/Course-Images-2.png";
import course3 from "../../assets/images/Course-Images-3.png";
import recent from "../../assets/images/recent-1.png";
import course4 from "../../assets/images/Course-Images-4.png";
import user from "../../assets/images/User.png";
import bar from "../../assets/images/bar-chart.png";
import clock from "../../assets/images/Clock.png";
import { Col, Popover, Row } from "antd";
import Link from "next/link";
import {
  ArrowRightOutlined,
  CheckOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  StarFilled,
} from "@ant-design/icons";
import Image from "next/image";
const RecentlyCourse = () => {
  const content = (
    <div className="pop-over-wrapper">
      <div className="pop-over-card">
        <div className="pop-content">
          <div className="badge">
            <p>Design</p>
          </div>

          <h1 className="title">
            2021 Complete Python Bootcamp From Zero to Hero in Python
          </h1>
          <div className="pop-about">
            <div className="about-pro">
              <div className="about-img">
                <Image src={course2} alt="course " />
              </div>
              <div className="course-sec">
                <div className="course">Course by</div>
                <div className="course-by">John Doe</div>
              </div>
            </div>
            <div className="about-rating">
              <div className="rating-all">
                <StarFilled
                  style={{
                    color: "rgba(253, 142, 31, 1)",
                    marginRight: "6px",
                  }}
                />
                <div className="rating">
                  5.0 <span>(3311222)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="pop-stat">
            <div className="stat">
              <p>
                <Image src={user} alt="user" />
              </p>
              <p>265.7K students</p>
            </div>
            <div className="stat">
              <p>
                <Image src={bar} alt="bar" />
              </p>
              <p>Beginner</p>
            </div>
            <div className="stat">
              <p>
                <Image src={clock} alt="clock" />
              </p>
              <p>Hour</p>
            </div>
          </div>
          <div className="pop-price">
            <div className="price-info">
              <h3>$14.00</h3>
              <h6>$12.00</h6>
              <p>56% OFF</p>
            </div>
            <div className="wish-btn-area">
              <div className="wish">
                <button className="wish-btn">
                  <HeartOutlined style={{ fontSize: "18px" }} />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="what-you-learn">
            <p>What you’ll learn</p>
            <ul>
              <li>
                <div className="icon-learn">
                  <CheckOutlined
                    style={{
                      color: "rgba(35, 189, 51, 1)",
                      marginRight: "8px",
                    }}
                  />
                </div>
                <p>
                  {" "}
                  Learn to use Python professionally, learning both Python 2 and
                  Python 3!
                </p>
              </li>
              <li>
                <div className="icon-learn">
                  <CheckOutlined
                    style={{
                      color: "rgba(35, 189, 51, 1)",
                      marginRight: "8px",
                    }}
                  />
                </div>
                <p>Create games with Python, like Tic Tac Toe and Blackjack!</p>
              </li>
              <li>
                <div className="icon-learn">
                  <CheckOutlined
                    style={{
                      color: "rgba(35, 189, 51, 1)",
                      marginRight: "8px",
                    }}
                  />
                </div>
                <p>Create games with Python, like Tic Tac Toe and Blackjack!</p>
              </li>
            </ul>
          </div>
          <div className="add-btn-area">
            <button className="add-to-cart">
              <ShoppingCartOutlined />
              Add To Cart
            </button>
            <button className="course-det">Course Details</button>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="recent-course">
      <div className="recent-wrapper">
        <div className="recent-title">
          <h1>Recently added courses</h1>
        </div>
        <div className="recent-course-wrapper">
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
              <Popover content={content}>
                <CourseCard
                  img={course1}
                  design="Design"
                  price={12}
                  title="Mechine learning A-Z TM 2021 Complete Python
                  Bootcamp From Zero to Hero..."
                  rating="5.0"
                  students="445k"
                  bg="bg-orange"
                  cardBorder="course-border"
                  user={true}
                />
              </Popover>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
              <Popover content={content}>
                <CourseCard
                  img={recent}
                  design="IT & Software"
                  price={12}
                  title="Mechine learning A-Z TM 2021 Complete Python
                  Bootcamp From Zero to Hero..."
                  rating="5.0"
                  students="245k"
                  bg="bg-light"
                  cardBorder="course-border"
                  user={true}
                />
              </Popover>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
              <Popover content={content}>
                <CourseCard
                  img={course4}
                  design="Development"
                  price={12}
                  title="Mechine learning A-Z TM 2021 Complete Python
                  Bootcamp From Zero to Hero..."
                  rating="5.0"
                  students="445k"
                  bg="bg-blue"
                  cardBorder="course-border"
                  user={true}
                />
              </Popover>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
              <Popover content={content}>
                <CourseCard
                  img={course3}
                  design="Business"
                  price={12}
                  title="Mechine learning A-Z TM 2021 Complete Python
                  Bootcamp From Zero to Hero..."
                  rating="5.0"
                  students="445k"
                  bg="bg-green"
                  cardBorder="course-border"
                  user={true}
                />
              </Popover>
            </Col>
          </Row>
        </div>
        <div className="browse-all">
          <Link href="#" className="browse-all-btn">
            Browse All Coursee <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentlyCourse;
