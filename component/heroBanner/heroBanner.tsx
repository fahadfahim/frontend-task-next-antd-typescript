"use client";
import { Col, Row } from "antd";
import React, { useEffect } from "react";
import heroBanner from "../../assets/images/img1.png";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "@/state-management/slice/counterSlice";
import { AppDispatch } from "@/state-management/store";
const HeroBanner = () => {
  const userData = useSelector((state: any) => state.counter.users);

  console.log("userData", userData);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // Dispatch the async action to fetch data
    dispatch(fetchUserData());
  }, [dispatch]);
  return (
    <div className="hero-banner">
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
          <div className="about-banner-wrapper">
            <div className="about-banner">
              <div className="title">
                <h1>
                  Learn with expert <br /> anytime anywhere
                </h1>
              </div>
              <div className="desc">
                <p>
                  Our mision is to help people to find the best course <br />{" "}
                  online and learn with expert anytime, anywhere.
                </p>
              </div>
              <div className="btn-area">
                <button>Create Account</button>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }}>
          <div className="banner-img-box">
            <Image src={heroBanner} alt="E-tutor banner" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HeroBanner;
