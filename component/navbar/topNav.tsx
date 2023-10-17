"use client";
import React, { useState } from "react";
import { Select, Space } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/images/LOGO-white.png";

const TopNav = () => {
  const [showMobile, setShowMobile] = useState<boolean>(false);
  const handleChange = (value: any) => {
    console.log("value", value);
  };

  return (
    <>
      <div className="top-bg">
        <div className="right-top">
          <ul>
            <li className="li-active">
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Course</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">Become an Instructor</Link>
            </li>
          </ul>
        </div>
        <div className="left-top">
          <Select
            defaultValue="USD"
            style={{ width: 80, borderRadius: "0px" }}
            suffixIcon={
              <DownOutlined style={{ color: "#8c94a3", fontSize: "12px" }} />
            }
            dropdownStyle={{ borderRadius: 0 }}
            onChange={handleChange}
            options={[
              { value: "usd", label: "USD" },
              { value: "euro", label: "EURO" },
              { value: "bdt", label: "BDT" },
            ]}
          />
          <Select
            defaultValue="English"
            style={{ width: 80 }}
            suffixIcon={
              <DownOutlined style={{ color: "#8c94a3", fontSize: "12px" }} />
            }
            onChange={handleChange}
            options={[
              { value: "eng", label: "English" },
              { value: "ger", label: "German" },
              { value: "china", label: "China" },
            ]}
          />
        </div>
      </div>
      <div
        className="mobile-menu"
        style={{
          height: showMobile ? "40px" : "45px",
        }}
      >
        <div className="logo">
          <Image src={logo} alt="E-tutor" />
        </div>
        <ul
          style={{
            transform: showMobile ? "translateY(0%)" : "translateY(-100%)",
          }}
        >
          <li className="li-active">
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Course</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">Become an Instructor</Link>
          </li>
        </ul>

        <div className="burger-btn">
          <button onClick={() => setShowMobile(!showMobile)}>
            <MenuOutlined
              style={{
                color: "#ff6636",
                fontSize: "22px",
                fontWeight: "600",
              }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default TopNav;
