import { Col, Row } from "antd";
import React from "react";
import cpu from "../../assets/images/category/Cpu.png";
import handshake from "../../assets/images/category/Handshake.png";
import card from "../../assets/images/category/CreditCard.png";
import finance from "../../assets/images/category/ChartBarHorizontal.png";
import camera from "../../assets/images/category/Camera.png";
import bug from "../../assets/images/category/BugDroid.png";
import megaPhone from "../../assets/images/category/MegaphoneSimple.png";
import headPhone from "../../assets/images/category/Headphones.png";
import pen from "../../assets/images/category/PenNib.png";
import firstAid from "../../assets/images/category/FirstAidKit.png";
import receipt from "../../assets/images/category/Receipt.png";
import lifeStyle from "../../assets/images/category/Package.png";
import CategoryCard from "./categoryCard";
import Link from "next/link";
const BrowseTopCategory = () => {
  return (
    <div className="browse-top-category">
      <div className="wrapper">
        <div className="browse-title">
          {" "}
          <h1>Browse Top Category</h1>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
            <CategoryCard
              label="Label"
              info="63,1234 Courses"
              img={cpu}
              bg="label-bg"
            />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
            <CategoryCard
              label="Business"
              info="63,1234 Courses"
              img={handshake}
              bg="business-bg"
            />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
            <CategoryCard
              label="Finance & Accounting"
              info="63,1234 Courses"
              img={card}
              bg="finance-bg"
            />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
            <CategoryCard
              label="IT & Software"
              info="63,1234 Courses"
              img={finance}
              bg="it-bg"
            />
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
            <CategoryCard
              label="Personal Development"
              info="63,1234 Courses"
              img={bug}
              bg="personal-bg"
              org={true}
            />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
            <CategoryCard
              label="Office Productivity"
              info="63,1234 Courses"
              img={receipt}
              bg="office-bg"
            />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
            <CategoryCard
              label="Marketing"
              info="63,1234 Courses"
              img={megaPhone}
              bg="label-bg"
            />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
            <CategoryCard
              label="Photography"
              info="63,1234 Courses"
              img={camera}
              bg="office-bg"
            />
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
            <CategoryCard
              label="LifeStyle"
              info="63,1234 Courses"
              img={lifeStyle}
              bg="finance-bg"
            />
          </Col>

          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
            <CategoryCard
              label="Design"
              info="63,1234 Courses"
              img={pen}
              bg="it-bg"
            />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
            <CategoryCard
              label="Health & Fitness"
              info="63,1234 Courses"
              img={firstAid}
              bg="business-bg"
            />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 6 }}>
            <CategoryCard
              label="Music"
              info="63,1234 Courses"
              img={headPhone}
              bg="finance-bg"
            />
          </Col>
        </Row>
        <div className="more-category">
          <h1>We have more category & subcategory.</h1>
          <div className="brows-all">
            <Link href="#">
              Browse all{" "}
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.25 12H20.75"
                  stroke="#FF6636"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 5.25L20.75 12L14 18.75"
                  stroke="#FF6636"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseTopCategory;
