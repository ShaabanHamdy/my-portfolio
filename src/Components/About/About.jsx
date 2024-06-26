import React from "react";
import img from "../images/IMG_20210827_131147_021.jpeg";
import cv from "../images/shaaban Resume Web Developer.pdf";
import style from "./about.module.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div id="ABOUT" className="container my-5 py-4">
        <div className=" text-center">
          <h2 className={`my-5 fs-1 fw-bold ${style.AboutMe}`}>About Me</h2>
        </div>
        <div className="row">
          <div className={`col-md-12 ${style.imageText}`}>
            <div>{/* <img className={style.img}  src={img} alt="" /> */}</div>

            <div className={style.aboutMe}>
              <div>
                <p>
                  " My name is Shaaban Hamdy Shaaban, I'm 26 years old,
                  <br /> I live in Giza and I have a bachelor's degree in
                  business administration
                  <br /> and I'm also a MERN Stack Developer Certified from
                  Route IT Training Center "
                </p>
              </div>
              <div className="Download">
                <a target="_blank" href={cv}>
                  <button className={`btn btn-info ${style.DownloadBtn}`}>
                    Download My CV{" "}
                    <FaCloudDownloadAlt className="ms-2" size={30} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
