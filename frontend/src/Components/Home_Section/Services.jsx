/* eslint-disable react/no-unknown-property */
import React, { useEffect, useState } from "react";
import CommunityService from "./Services/CommunityService";
import AOS from "aos";
import "aos/dist/aos.css";
import "./services.css";
import GopalaBhog from "./Services/AnnaVitranSeva.jsx";
import Brajkulam from "./Services/Brajkulam.jsx";

import SadhuSeva from "./Services/SadhuSeva.jsx";
import HealthCamp from "./Services/HealthCamp.jsx";
import SwachhVrindavan from "./Services/SwachhVrindavan.jsx";

const Services = () => {
  const [service, setService] = useState(null);

  useEffect(() => {
    // Function to handle screen resizing and update AOS attributes
    const handleResize = () => {
      const elements = document.querySelectorAll("[data-aos]");

      elements.forEach((element) => {
        // Get stored default attributes
        const defaultAos =
          element.getAttribute("data-default-aos") || "fade-right";
        const defaultDelay =
          element.getAttribute("data-default-aos-delay") || "100";

        if (window.innerWidth < 768) {
          // Change data-aos attributes for small screens
          element.setAttribute("data-aos", "fade-up");
          element.setAttribute("data-aos-delay", "200");
        } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
          // Change data-aos attributes for medium screens
          element.setAttribute("data-aos", "fade-down");
          element.setAttribute("data-aos-delay", "100");
        } else {
          // Revert to default data-aos attributes
          element.setAttribute("data-aos", defaultAos);
          element.setAttribute("data-aos-delay", defaultDelay);
        }
      });

      // Refresh AOS to apply the changes
      AOS.refresh();
    };

    // Initialize AOS
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });

    // Store default attributes on mount
    const elements = document.querySelectorAll("[data-aos]");
    elements.forEach((element) => {
      if (!element.hasAttribute("data-default-aos")) {
        element.setAttribute(
          "data-default-aos",
          element.getAttribute("data-aos") || "fade-right"
        );
        element.setAttribute(
          "data-default-aos-delay",
          element.getAttribute("data-aos-delay") || "100"
        );
      }
    });

    // Initial screen size check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-[100%] flex flex-col justify-center items-center mb-14">
      <h1 className="text-center text-heading3 lg:text-heading2 font-bold my-4 p-5 text-[#2d335d] relative  transition-all ease-in-out ">
        Our Services
        <hr className="mt-1 border-light-lavender border-[1px]" />
      </h1>

      {service === "communityService" && (
        <CommunityService setService={setService} />
      )}
      {service === "gopalaBhog" && <GopalaBhog setService={setService} />}
      {service === "brajkulamEducationalCenter" && (
        <Brajkulam setService={setService} />
      )}
      {service === "swachh&SwasthVrindavan" && (
        <SwachhVrindavan setService={setService} />
      )}
      {service === "sadhuSeva" && <SadhuSeva setService={setService} />}
      {service === "health&Awareness" && <HealthCamp setService={setService} />}
      {service === "womenEmpowerment" && (
        <WomenEmpowerment setService={setService} />
      )}

      {service === null && (
        <ul className="services w-[100%]  mt-[20px] flex flex-col items-center gap-y-[30px] md:gap-y-[70px]  md:flex-row md:justify-center md:gap-x-[60px] lg:gap-x-[30px]  md:flex-wrap">
          {/* Community Service */}
          <li
            data-aos="fade-right"
            data-aos-delay="100"
            className="service service1 rounded-tl-[50px] rounded-br-[50px] cursor-pointer bg-[#73002e]  w-[80%] md:w-[32%] lg:w-[25%] relative overflow-hidden h-[300px] flex flex-col items-center justify-center"
            onClick={() => setService("communityService")}
          >
            <div className="px-[20px] service-content relative z-40 h-full cursor-pointer flex flex-col items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 492 492"
                xmlSpace="preserve"
                className="w-[40px] h-[40px]"
                fill="#ffffff"
              >
                <path d="M164.833 399.704a5.737 5.737 0 0 1-5.424-3.84c-4.464-12.528-2.472-24.504-.696-35.064 1.704-10.128 3.168-18.864-1.392-25.776-1.896-2.88-5.808-5.52-10.32-8.544-7.344-4.944-16.464-11.064-22.2-22.104-1.968-3.792-5.496-8.208-8.928-8.232h-.024c-1.32 0-2.448.792-3.288 2.376-.792 1.488-1.992 4.872-.912 10.92 1.056 6 4.104 12.912 8.784 19.992a5.768 5.768 0 0 1-9.624 6.36c-5.616-8.52-9.144-16.704-10.512-24.336-1.272-7.152-.528-13.536 2.136-18.432 2.88-5.304 7.968-8.448 13.536-8.4 7.344.072 14.28 5.328 19.032 14.424 4.392 8.424 11.52 13.224 18.432 17.856 5.328 3.576 10.344 6.96 13.512 11.784 7.032 10.68 5.04 22.536 3.12 34.008-1.608 9.624-3.264 19.584.192 29.28a5.786 5.786 0 0 1-3.504 7.368c-.623.24-1.272.36-1.92.36z" />
                <path d="M106.657 399.92c-.24 0-.48-.024-.744-.048a5.761 5.761 0 0 1-4.968-6.456c2.352-18.312-1.824-24.024-6.312-28.296-15.744-15.072-21-29.112-25.224-40.416-.264-.672-.504-1.344-.744-2.016-3.168-8.376-5.856-26.904-6.528-45.072-.36-9.528-.12-18.192.672-25.032 1.032-9 2.928-14.784 5.976-18.192 5.4-6.048 10.752-5.856 13.464-5.208 4.296 1.032 10.152 5.016 13.584 18.096.192.744.408 1.968.984 5.352 2.256 13.08 9.072 52.92 19.608 70.128 1.656 2.712.816 6.264-1.896 7.92-2.712 1.656-6.264.816-7.92-1.896-11.688-19.08-18.552-59.112-21.144-74.184-.336-1.92-.672-3.912-.792-4.392-2.016-7.656-4.584-9.72-5.112-9.792 0 0-.768.096-2.184 1.68-1.68 1.872-4.608 11.64-3.72 35.136.624 16.776 3.072 34.224 5.784 41.448.264.672.504 1.344.768 2.04 4.008 10.728 8.544 22.872 22.392 36.12 4.56 4.368 7.44 9.048 9.024 14.688 1.752 6.24 1.992 13.68.744 23.4-.384 2.88-2.855 4.992-5.712 4.992z" />
                <path d="M183.913 429.368a5.746 5.746 0 0 1-5.76-5.76V399.92H93.41v23.688c0 3.192-2.568 5.76-5.76 5.76s-5.76-2.568-5.76-5.76V394.16a5.746 5.746 0 0 1 5.76-5.76h96.288a5.746 5.746 0 0 1 5.76 5.76v29.448a5.783 5.783 0 0 1-5.785 5.76z" />
                <g>
                  <path d="M327.697 399.704c-.648 0-1.296-.12-1.944-.336-3-1.056-4.56-4.368-3.504-7.368 3.456-9.72 1.8-19.656.192-29.28-1.92-11.472-3.912-23.328 3.12-34.008 3.168-4.8 8.208-8.184 13.512-11.784 6.888-4.632 14.04-9.432 18.432-17.856 4.752-9.12 11.688-14.376 19.032-14.424h.12c5.544 0 10.56 3.144 13.416 8.4 2.664 4.896 3.408 11.28 2.136 18.432-1.344 7.632-4.896 15.84-10.512 24.336-1.752 2.664-5.328 3.384-7.992 1.632-2.664-1.752-3.384-5.328-1.632-7.992 4.68-7.08 7.704-13.992 8.784-19.992 1.08-6.072-.12-9.456-.912-10.92-.864-1.584-1.968-2.376-3.288-2.376h-.024c-2.136.024-5.76 2.184-8.928 8.232-5.736 11.016-14.88 17.16-22.2 22.104-4.536 3.048-8.424 5.664-10.32 8.544-4.536 6.888-3.072 15.648-1.392 25.776 1.776 10.56 3.768 22.512-.696 35.064-.816 2.352-3.024 3.816-5.4 3.816z" />
                  <path d="M385.874 399.92a5.766 5.766 0 0 1-5.712-5.016c-1.248-9.744-1.008-17.16.744-23.4 1.584-5.664 4.464-10.32 9.024-14.688 13.848-13.248 18.384-25.392 22.392-36.12.264-.696.504-1.368.768-2.04 2.736-7.224 5.16-24.648 5.784-41.448.888-23.496-2.064-33.264-3.72-35.136-1.416-1.584-2.184-1.68-2.184-1.68-.528.096-3.096 2.136-5.112 9.792-.12.48-.456 2.472-.792 4.392-2.592 15.072-9.456 55.104-21.144 74.184-1.656 2.712-5.208 3.576-7.92 1.896-2.712-1.656-3.576-5.208-1.896-7.92 10.536-17.184 17.376-57.024 19.608-70.104.576-3.384.792-4.584.984-5.352 3.432-13.08 9.288-17.064 13.584-18.096 2.712-.648 8.064-.84 13.464 5.208 3.048 3.408 4.944 9.192 5.976 18.192.792 6.864 1.008 15.504.672 25.032-.672 18.168-3.36 36.696-6.528 45.072-.24.648-.504 1.32-.744 2.016-4.224 11.304-9.48 25.344-25.224 40.416-4.488 4.296-8.664 10.008-6.312 28.296.408 3.144-1.824 6.048-4.968 6.456-.24.024-.505.048-.744.048z" />
                  <g>
                    <path d="M404.882 429.368a5.746 5.746 0 0 1-5.76-5.76V399.92h-84.768v23.688a5.746 5.746 0 0 1-5.76 5.76 5.746 5.746 0 0 1-5.76-5.76V394.16a5.746 5.746 0 0 1 5.76-5.76h96.288a5.746 5.746 0 0 1 5.76 5.76v29.448a5.747 5.747 0 0 1-5.76 5.76z" />
                  </g>
                </g>
                <g>
                  <path d="M146.906 114.992c-14.016 0-25.44-11.4-25.44-25.44s11.4-25.44 25.44-25.44c14.016 0 25.44 11.4 25.44 25.44s-11.401 25.44-25.44 25.44zm0-39.336c-7.68 0-13.92 6.24-13.92 13.92s6.24 13.92 13.92 13.92 13.92-6.24 13.92-13.92-6.24-13.92-13.92-13.92zM124.513 196.808h-8.76c-8.664 0-15.696-7.032-15.696-15.696v-46.08c0-8.208 6.672-14.88 14.88-14.88h56.76a19.644 19.644 0 0 1 14.928 6.864c.168.192.336.408.456.624l30.336 46.944c1.728 2.664.96 6.24-1.704 7.968-2.664 1.728-6.24.96-7.968-1.704l-30.097-46.584a8.118 8.118 0 0 0-5.952-2.592h-56.76a3.37 3.37 0 0 0-3.36 3.36v46.104a4.179 4.179 0 0 0 4.176 4.176h8.76a5.746 5.746 0 0 1 5.76 5.76c.001 3.192-2.591 5.736-5.759 5.736z" />
                  <path d="M166.586 273.416h-35.424c-3 0-5.496-2.304-5.736-5.28l-6.288-74.736c-.024-.168-.024-.312-.024-.48v-43.272c0-3.192 2.568-5.76 5.76-5.76s5.76 2.568 5.76 5.76v43.032l5.808 69.216h24.84l5.808-69.216v-43.032a5.749 5.749 0 0 1 3.984-5.472 5.753 5.753 0 0 1 6.432 2.088l27 37.248c1.872 2.568 1.296 6.168-1.272 8.04-2.568 1.872-6.168 1.296-8.04-1.272l-16.584-22.872v25.512c0 .168 0 .312-.024.48l-6.288 74.736c-.216 3-2.713 5.28-5.712 5.28z" />
                  <path d="M148.777 273.416a5.746 5.746 0 0 1-5.76-5.76V216.68c0-3.192 2.568-5.76 5.76-5.76s5.76 2.568 5.76 5.76v51c0 3.168-2.592 5.736-5.76 5.736z" />
                  <g>
                    <path d="M346.585 114.992c-14.016 0-25.44-11.4-25.44-25.44s11.4-25.44 25.44-25.44c14.016 0 25.44 11.4 25.44 25.44s-11.4 25.44-25.44 25.44zm0-39.336c-7.68 0-13.92 6.24-13.92 13.92s6.24 13.92 13.92 13.92 13.92-6.24 13.92-13.92-6.239-13.92-13.92-13.92zM380.305 196.808h-1.8a5.746 5.746 0 0 1-5.76-5.76 5.746 5.746 0 0 1 5.76-5.76h1.8a4.23 4.23 0 0 0 2.832-1.104c.96-.888 1.368-2.28 1.104-3.672l-8.928-44.352a6.004 6.004 0 0 1-.12-1.128 3.37 3.37 0 0 0-3.36-3.36h-47.497a8.15 8.15 0 0 0-5.856 2.472l-27.216 48.432a5.755 5.755 0 0 1-7.848 2.208 5.755 5.755 0 0 1-2.208-7.848l27.528-49.008a6.48 6.48 0 0 1 .648-.936 19.644 19.644 0 0 1 14.928-6.864h47.496c7.992 0 14.52 6.336 14.856 14.232l8.808 43.848c1.056 5.28-.672 10.776-4.536 14.376-2.855 2.736-6.647 4.224-10.631 4.224z" />
                    <path d="M360.265 273.416h-26.16a5.738 5.738 0 0 1-5.688-4.92l-6.696-45.864-8.904.024h-.024a5.735 5.735 0 0 1-4.416-2.064 5.73 5.73 0 0 1-1.248-4.728l6.288-35.04-9.144 11.736a5.766 5.766 0 0 1-8.088 1.008 5.766 5.766 0 0 1-1.008-8.088l23.472-30.12a5.76 5.76 0 0 1 6.888-1.728 5.74 5.74 0 0 1 3.312 6.288l-9.192 51.168 6.984-.024h.024a5.738 5.738 0 0 1 5.688 4.92l6.696 45.888h16.2l6.672-45.72a5.738 5.738 0 0 1 5.688-4.92h.024l10.848.024-15.072-50.736a5.743 5.743 0 0 1 3.888-7.152 5.743 5.743 0 0 1 7.152 3.888l17.28 58.152a5.685 5.685 0 0 1-.912 5.088c-1.08 1.464-2.808 2.304-4.608 2.304h-.024l-13.584-.024-6.672 45.696a5.696 5.696 0 0 1-5.664 4.944z" />
                    <g>
                      <path d="M346.825 273.416a5.746 5.746 0 0 1-5.76-5.76v-48.672a5.746 5.746 0 0 1 5.76-5.76 5.746 5.746 0 0 1 5.76 5.76v48.672a5.746 5.746 0 0 1-5.76 5.76z" />
                    </g>
                  </g>
                  <g>
                    <path d="M248.162 154.64c-11.376 0-20.616-9.24-20.616-20.616s9.24-20.616 20.616-20.616 20.616 9.24 20.616 20.616c-.001 11.376-9.24 20.616-20.616 20.616zm0-29.688c-5.016 0-9.096 4.08-9.096 9.096s4.08 9.096 9.096 9.096 9.096-4.08 9.096-9.096c-.001-5.016-4.081-9.096-9.096-9.096zM260.186 273.416H236.81a5.746 5.746 0 0 1-5.76-5.76 5.746 5.746 0 0 1 5.76-5.76h23.376a5.746 5.746 0 0 1 5.76 5.76 5.761 5.761 0 0 1-5.76 5.76z" />
                    <path d="M262.513 273.416h-.336a5.752 5.752 0 0 1-5.4-6.096l2.736-46.464 1.68-34.968c.096-1.92 1.152-3.672 2.808-4.656s3.696-1.08 5.448-.264l26.808 12.816.096-.096-35.688-24.624a3.274 3.274 0 0 0-1.896-.576h-22.536c-.696 0-1.368.216-1.944.624l-31.056 22.44a.861.861 0 0 0-.36.6v.216l24.768-11.448a5.682 5.682 0 0 1 5.4.312 5.709 5.709 0 0 1 2.76 4.656l1.68 34.968 2.736 46.464a5.767 5.767 0 0 1-5.4 6.096 5.767 5.767 0 0 1-6.096-5.4l-2.736-46.488v-.072l-1.272-26.472-17.592 8.136a10.86 10.86 0 0 1-12.912-2.928 12.458 12.458 0 0 1-2.76-9.48c.432-3.384 2.28-6.48 5.04-8.496l31.056-22.44a14.667 14.667 0 0 1 8.688-2.808h22.536c3.024 0 5.928.912 8.424 2.616l35.784 24.696a11.347 11.347 0 0 1 4.872 8.232 11.372 11.372 0 0 1-3.12 9.048l-.432.456a11.016 11.016 0 0 1-12.72 2.304l-19.32-9.216-1.272 26.352v.072l-2.736 46.488a5.752 5.752 0 0 1-5.736 5.4z" />
                    <path d="M248.497 273.416a5.746 5.746 0 0 1-5.76-5.76v-35.952a5.746 5.746 0 0 1 5.76-5.76 5.746 5.746 0 0 1 5.76 5.76v35.976c0 3.168-2.592 5.736-5.76 5.736z" />
                  </g>
                </g>
              </svg>
              <h2 className="mt-[10px] text-[18px] lg:text-[20px] text-[#ffffff] font-bold ">
                Community Service
              </h2>
              <p className="text-justify  text-[14px] lg:text-[16px] lg:pt-[10px] pt-[20px]  text-[#ffffff]">
                Brings fulfillment, purpose, connection, satisfaction, and
                positive impact.
              </p>
            </div>
          </li>
          {/* Gopala Bhog */}
          <li
            data-aos="fade-down"
            data-aos-delay="100"
            onClick={() => setService("gopalaBhog")}
            className="service service2 rounded-tl-[50px] rounded-br-[50px] cursor-pointer bg-[#ee9904]   w-[80%] md:w-[32%] lg:w-[25%] relative overflow-hidden h-[300px] flex flex-col items-center justify-center"
          >
            <div className="service-content relative z-40 h-full cursor-pointer flex flex-col items-center justify-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 512 493.84"
                className="w-[40px] h-[40px]"
                fill="#ffffff"
              >
                <path d="M390.34 441.59V291H322.6c-28.71 5.15-57.43 20.71-86.15 38.8h-52.61c-23.81 1.43-36.28 25.57-13.15 41.43 18.45 13.52 42.79 12.76 67.74 10.52 17.2-.85 17.95 22.28 0 22.36-6.23.48-13.02-.98-18.93-.98-31.14-.03-56.79-5.99-72.49-30.59l-7.89-18.41-78.26-38.8c-39.16-12.9-66.99 28.07-38.14 56.56 56.68 41.24 114.82 75.17 174.27 102.58 43.19 26.27 86.37 25.38 129.56 0l63.79-32.88zM26.61 295.84C13.26 274.78 5.03 248.03.07 213.49c-.38-2.71.81-5.29 2.87-6.8 1.16-25.91 13.69-39.74 37.53-48.27 2.14-18.68 16.9-31.73 34.98-34.86 25.04-25.44 65.94-33.03 99-20.35 1.14.44 4.7 2.24 7.92 3.86.5.25.78.5.94.72 11.09-8.54 23.81-13.07 36.47-14.37 9.14-.93 18.27-.19 26.74 1.94l42.11-84.37c3.84-7.5 9.98-14.67 21.91-8.88 3.19 1.55 6 3.94 7.87 6.83 5.41 8.3.87 14.09-3.25 21.24l-45.58 75.58c9.12 6.43 16.4 15.39 19.04 26.41 3.95 1.12 7.74 2.37 11.34 3.76l53.07-88.26c4.43-7.18 11.13-13.83 22.55-7.11 3.06 1.8 5.67 4.41 7.31 7.43 4.73 8.71-.26 14.12-4.94 20.92l-55.4 78.84c20.12 14.12 32.83 36.04 27.22 61.26-.3 1.41.32 1.93.32 3.47l-.06.92c-.16 2.81-.4 5.62-.7 8.43-1.76 16.5-5.96 32.94-13.17 48.51H322.6c-.86 0-1.71.06-2.53.2 8.53-16.08 13.29-33.44 15.09-50.88H15.52c5.13 30.94 13.25 54.57 26.01 72.76-5.29.44-10.3 1.62-14.92 3.42zm231-103.63c-3.97 0-7.18-3.21-7.18-7.17 0-3.97 3.21-7.18 7.18-7.18h16.07c3.97 0 7.18 3.21 7.18 7.18 0 3.96-3.21 7.17-7.18 7.17h-16.07zm-3.88-47.66a7.155 7.155 0 1 1-5.83 13.07l-14.66-6.59a7.155 7.155 0 0 1-3.62-9.45 7.155 7.155 0 0 1 9.45-3.62l14.66 6.59zm-81.67 4.82a7.208 7.208 0 0 1-3.98-9.38 7.22 7.22 0 0 1 9.39-3.98l16.07 6.56a7.22 7.22 0 0 1 3.98 9.39 7.223 7.223 0 0 1-9.39 3.97l-16.07-6.56zm-5.53 42.84c-3.96 0-7.18-3.21-7.18-7.17a7.18 7.18 0 0 1 7.18-7.18h16.07c3.97 0 7.18 3.21 7.18 7.18 0 3.96-3.21 7.17-7.18 7.17h-16.07zm-54.6-32.63a7.155 7.155 0 0 1-9.45-3.62 7.155 7.155 0 0 1 3.62-9.45l14.66-6.59c3.61-1.61 7.84.01 9.45 3.62a7.155 7.155 0 0 1-3.62 9.45l-14.66 6.59zm-31.65 32.63c-3.97 0-7.18-3.21-7.18-7.17 0-3.97 3.21-7.18 7.18-7.18h16.07a7.18 7.18 0 0 1 7.18 7.18c0 3.96-3.22 7.17-7.18 7.17H80.28zm-62.88 13.1 318.54-.01c6.91-33.52-27.73-53.61-55.3-60.43-2.85-.7-5.1-3.13-5.41-6.22-1.43-13.91-14.66-23.51-26.9-27.81-8.3-2.92-17.69-4.14-27.09-3.17-11.1 1.13-22.23 5.35-31.62 13.43a7.118 7.118 0 0 1-5.13 2.16c-3.36 0-11.38-5.21-15.14-6.65-28.36-10.88-64.32-4.09-85.15 18.54a7.134 7.134 0 0 1-4.49 2.27c-13.94 1.55-25.12 11.2-25.21 25.77a7.184 7.184 0 0 1-5.02 7.33c-19.1 5.97-30.51 13.81-32.08 34.79zM44 238.06a5.723 5.723 0 0 1 3.45-7.32c2.97-1.06 6.25.48 7.32 3.46 3.91 10.84 8.9 21.3 14.91 31.14 1.65 2.7.8 6.23-1.9 7.87-2.7 1.65-6.23.8-7.88-1.9-6.39-10.47-11.75-21.71-15.9-33.25zm25.64 47.5a5.745 5.745 0 0 1 1.08-8.04 5.743 5.743 0 0 1 8.03 1.08c4.69 6.14 9.81 11.83 15.55 17a5.748 5.748 0 0 1 .43 8.1 5.73 5.73 0 0 1-8.1.43c-6.2-5.59-11.92-11.95-16.99-18.57zm433.5-9.03h-83.55c-4.88 0-8.87 3.98-8.87 8.86v162.46c0 4.88 3.99 8.87 8.87 8.87h83.55c4.87 0 8.86-3.99 8.86-8.87V285.39c0-4.88-3.99-8.86-8.86-8.86zm-41.78 27.35c-7.27 0-13.17 5.9-13.17 13.18 0 7.27 5.9 13.17 13.17 13.17 7.28 0 13.17-5.9 13.17-13.17 0-7.28-5.89-13.18-13.17-13.18z" />
              </svg>
              <h2 className="text-center mt-[10px] text-[18px] lg:text-[20px] text-[#ffffff] font-bold">
              Anna Vitran Seva
              </h2>
              <p className="text-justify text-[14px] lg:text-[16px] lg:pt-[10px] pt-[20px] px-[20px] text-[#ffffff]">
                Serving affordable and Satvik Food Prasadam to hundreds of
                beneficiaries
              </p>
            </div>
          </li>
          {/* Brajkulam Community Center */}
          <li
            data-aos="fade-left"
            data-aos-delay="100"
            onClick={() => setService("brajkulamEducationalCenter")}
            className="service service3 rounded-tl-[50px] rounded-br-[50px] cursor-pointer bg-[#00a6e9]   w-[80%] md:w-[32%] lg:w-[25%] relative overflow-hidden h-[300px] flex flex-col items-center justify-center"
          >
            <div className="px-[20px] service-content relative z-40 h-full cursor-pointer flex flex-col items-center justify-center ">
              <svg
                className="h-[40px] width-[40px] "
                fill="#ffffff"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 90.02"
              >
                <path
                  d="M0 8.62c17.28-10.66 34.96-12.3 53.26 0v79.64c-12.65-9.37-31.03-8.24-53.26 0V8.62zm59.09.2h5.28c1.08 0 1.96.88 1.96 1.95v77.29c0 1.08-.88 1.96-1.96 1.96h-5.28a1.97 1.97 0 01-1.96-1.96V10.77c.01-1.07.89-1.95 1.96-1.95zm63.79-.2c-17.28-10.66-34.97-12.3-53.27 0v79.64c12.65-9.37 31.03-8.24 53.27 0V8.62z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-center mt-[10px] text-[18px] lg:text-[20px] text-[#ffffff] font-bold">
                Brajkulam Community Center
              </h2>
              <p className="text-justify text-[14px] pt-[20px] lg:text-[16px] lg:pt-[10px] text-[#ffffff]">
                Actively involved in Providing Basic Education , Skill Training,
                Health and Hygiene Camps
              </p>
            </div>
          </li>
          {/* Swachh & Swasth Vrindavan  */}
          <li
            data-aos="fade-right"
            data-aos-delay="100"
            onClick={() => setService("swachh&SwasthVrindavan")}
            className="service service4 rounded-tl-[50px] rounded-br-[50px] cursor-pointer bg-[#00a36c]   w-[80%] md:w-[32%] lg:w-[25%] relative overflow-hidden h-[300px] flex flex-col items-center justify-center"
          >
            <div className="px-[20px] service-content relative z-40 h-full cursor-pointer flex flex-col items-center justify-center ">
              <svg
                className="h-[40px] w-[40px]"
                fill="#ffffff"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 122.88 95.57"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    className="st0"
                    d="M30.45,57.96h-0.93c0-7.62-2.85-14.28-8.54-19.97c-5.69-5.69-12.35-8.54-19.97-8.54v-0.93 c7.62,0,14.28-2.85,19.97-8.55C26.67,14.25,29.52,7.59,29.52,0h0.93c0,7.62,2.85,14.28,8.54,19.97c5.69,5.69,12.35,8.54,19.97,8.54 v0.93c-7.62,0-14.28,2.85-19.97,8.54C33.3,43.68,30.45,50.34,30.45,57.96L30.45,57.96z M13.51,92.85h-0.43 c0-3.49-1.31-6.55-3.92-9.16C6.55,81.08,3.49,79.77,0,79.77v-0.43c3.49,0,6.55-1.31,9.16-3.92c2.61-2.62,3.92-5.67,3.92-9.15h0.43 c0,3.49,1.31,6.55,3.92,9.16c2.61,2.61,5.66,3.92,9.16,3.92v0.43c-3.49,0-6.55,1.31-9.16,3.92C14.81,86.3,13.51,89.36,13.51,92.85 L13.51,92.85z M68.37,95.57h-0.43c0-3.49-1.31-6.55-3.92-9.16c-2.61-2.61-5.66-3.92-9.16-3.92v-0.43c3.49,0,6.55-1.31,9.16-3.92 c2.61-2.62,3.92-5.67,3.92-9.15h0.43c0,3.49,1.31,6.55,3.92,9.16c2.61,2.61,5.66,3.92,9.16,3.92v0.43c-3.49,0-6.55,1.31-9.16,3.92 C69.67,89.02,68.37,92.07,68.37,95.57L68.37,95.57z M98.95,64.57h-0.78c0-6.39-2.39-11.98-7.17-16.76 c-4.78-4.78-10.36-7.17-16.76-7.17v-0.78c6.39,0,11.98-2.39,16.76-7.18c4.78-4.79,7.17-10.38,7.17-16.75h0.78 c0,6.39,2.39,11.98,7.17,16.76c4.78,4.78,10.36,7.17,16.76,7.17v0.78c-6.39,0-11.98,2.39-16.76,7.17 C101.34,52.59,98.95,58.18,98.95,64.57L98.95,64.57z"
                  />
                </g>
              </svg>
              <h2 className="text-center  mt-[10px] text-[18px] lg:text-[20px] text-[#ffffff] font-bold">
              Swachh Yamuna, Swasth Vrindavan
              </h2>
              <p className="text-justify text-[14px] pt-[20px] lg:text-[16px] lg:pt-[10px] text-[#ffffff]">
                Our Shri Vrindavan Dham is very sacred, hence it is our duty to
                keep making continuous efforts to keep Shri Vrindavan Dham clean
                and healthy.
              </p>
            </div>
          </li>
          {/* Sadhu Seva */}
          <li
            data-aos="fade-up"
            data-aos-delay="100"
            onClick={() => setService("sadhuSeva")}
            className="service service5 rounded-tl-[50px] rounded-br-[50px] cursor-pointer bg-orange   w-[80%] md:w-[32%] lg:w-[25%] relative overflow-hidden h-[300px] flex flex-col items-center justify-center"
          >
            <div className="px-[20px] service-content relative z-40 h-full cursor-pointer flex flex-col items-center justify-center ">
              <svg
                className="h-[40px] w-[40px] "
                fill="#ffffff"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 101.48 122.88"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    class="st0"
                    d="M31.74,16.1h1.15v-1.4h1.61v-1.69h1.15V0.87c0-0.48,0.39-0.87,0.87-0.87c0.48,0,0.87,0.39,0.87,0.87V2.2 c9.3,5.02,10.14-6.91,19.55,1.69c-3.39-0.09-5.94,1.5-8.91,3.21c-2.9,1.67-5.72,3.24-9.15,3.27c-0.6,0.01-1.11-0.03-1.5-0.07v2.7 h1.11v1.69h1.61v1.4h1.15v3.83h1.47c8.47,13.02,13.17,23.15,14.96,38.51c0.03,0.25,0.06,0.5,0.08,0.75 c2.09-6.12,5.39-11.6,9.53-17.96h1.75v-3.06h0.92v-1.12h1.29v-1.35h0.75v-9.71c0-0.48,0.39-0.87,0.87-0.87s0.87,0.39,0.87,0.87 v1.16c7.27,3.77,8-5.57,15.47,1.26c-2.71-0.07-4.75,1.2-7.12,2.57c-2.32,1.34-4.58,2.59-7.32,2.62c-0.39,0-0.74-0.01-1.02-0.04 v2.14h0.72v1.35h1.29v1.12h0.92v3.06h1.17c6.77,10.42,10.54,18.51,11.96,30.81c0.33,2.88,0.51,5.85,0.48,8.93l4.09,2.29h1.29v0.84 h1.41v0.84h0.96L98,85.76h-4.76l-1.72,1.75c-0.19,1.03-0.16,1.78,0,2.35h1.02v0.7c-1.94,1.02-2.54,2.87-2.54,4.91l0.51,0.34 c-0.27,0.74-0.64,1.34-1.14,1.74v3.13h1.02v1.6h-1.05c0,7.13,0,3.45,0,9.93h2.72v2.37h3v2.58h3.07v1.88h3.35v3.84 c-34.06,0-67.5-0.25-101.48-0.25v-4.81h4.19v-2.36h3.84v-3.23h3.75v-2.97h3.4c0-8.1,0-4.12,0-13.04h-1.31v-2.01h1.27v-3.91 c-0.63-0.49-1.09-1.24-1.43-2.17l0.64-0.42c0-2.55-0.75-4.86-3.18-6.14v-0.87h1.28c0.2-0.71,0.23-1.65,0-2.94l-2.14-2.18H4.36 l-0.08-1.02h1.2v-1.05h1.77v-1.05h1.62l5.11-2.87c-0.04-3.86,0.19-7.57,0.61-11.17c1.78-15.37,6.49-25.49,14.96-38.51h2.19V16.1 L31.74,16.1z M37.35,79.63l3.67,6.74l2.47-7.19c0.19-0.03,0.38-0.05,0.57-0.08c8.02,9.55,4.75,19.03,4.75,31.95H23.65 c0-11.16-2.9-22.74,4.47-32.2c0.02,0.01,0.04,0.01,0.06,0.02c0.54,0.11,1.09,0.22,1.66,0.3l2.93,6.56l3.05-6.1c0.2,0,0.41,0,0.61,0 C36.73,79.64,37.04,79.64,37.35,79.63L37.35,79.63L37.35,79.63z M43.3,78.26c-2.12,0.28-4.49,0.44-6.88,0.44 c-2.64,0-5.29-0.21-7.63-0.67c1.82-2.06,4.2-3.74,7.3-4.86C39.11,74.6,41.46,76.31,43.3,78.26L43.3,78.26z M72.47,83.21 c13.46,6.38,9.74,14.66,9.74,27.84H62.94C62.94,100.21,59.44,87.96,72.47,83.21L72.47,83.21z"
                  />
                </g>
              </svg>
              <h2 className="text-center mt-[10px] text-[18px] lg:text-[20px]  text-[#ffffff] font-bold">
                Sadhu Seva
              </h2>
              <p className="text-justify text-[14px] lg:text-[16px] lg:pt-[10px] pt-[20px]  text-[#ffffff]">
                Daily food seva for devotees living in Vrindavan with devotion.
              </p>
            </div>
          </li>
          {/* Health and Awareness Camp */}
          <li
            data-aos="fade-left"
            data-aos-delay="100"
            onClick={() => setService("health&Awareness")}
            className="service service6 rounded-tl-[50px] rounded-br-[50px] cursor-pointer bg-[#01a8ac]   w-[80%] md:w-[32%] lg:w-[25%] relative overflow-hidden h-[300px] flex flex-col items-center justify-center"
          >
            <div className="service-content relative z-40 h-full cursor-pointer flex flex-col items-center justify-center ">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 122.88 120.16"
                xmlSpace="preserve"
                className="w-[40px] h-[40px]"
                fill="#ffffff"
              >
                <g>
                  <path
                    className="st0"
                    d="M100.44,6.4c12.39,0,22.44,10.05,22.44,22.44c0,10.21-6.82,18.83-16.16,21.55
		c0.41,10.31,0.54,21.41-0.96,31.45c-1.61,10.86-4.96,20.21-10.95,27.03c-6.26,7.13-15.09,11.3-27.34,11.3
		c-17.49,0-27.38-7.62-32.93-18.41c-4.56-8.86-5.88-19.65-6.13-29.82c-2.5-1.76-5.01-4.16-7.47-7.01c-3.57-4.15-7.12-9.32-10.3-14.8
		c-0.9-1.56-0.95-3.38-0.29-4.91c-0.17-0.33-0.34-0.65-0.51-0.98C2.91,30.67-1.61,15.88,0.54,9.42c1.01-3.04,3.43-5.04,6.99-6.15
		c2.88-0.89,6.61-1.19,11.02-0.97c0.39-0.35,0.84-0.69,1.36-1.01c0.57-0.36,1.15-0.64,1.72-0.85C27.1-1.59,32.7,3.82,30.18,9.4
		c-1.14,2.53-3.66,4.37-6.37,4.3c-2.54-0.07-4.53-1.73-5.98-3.68l-0.09-0.18c-3.35-0.13-6.06,0.07-7.99,0.67
		c-1.16,0.36-1.87,0.79-2.04,1.28c-1.51,4.53,2.72,16.98,8.86,28.99c0.25,0.49,0.5,0.98,0.76,1.46c1.14,0.43,2.14,1.24,2.8,2.38
		c2.86,4.94,6,9.53,9.09,13.12c1.63,1.89,3.2,3.46,4.65,4.62c0.19,0,0.38,0.01,0.56,0.03c1.38-0.99,2.91-2.43,4.51-4.19
		c3.27-3.58,6.59-8.32,9.61-13.42c0.66-1.11,1.64-1.9,2.76-2.33c6.42-11.87,11.05-24.56,10.1-29.56c-0.22-1.14-1.23-1.88-2.7-2.37
		c-1.88-0.63-4.33-0.88-6.99-0.95c-0.07,0.15-0.15,0.3-0.23,0.46c-1.45,1.95-3.44,3.61-5.98,3.68c-2.71,0.07-5.22-1.77-6.37-4.3
		c-2.52-5.58,3.08-10.99,8.55-8.97c0.58,0.21,1.15,0.5,1.72,0.85c0.36,0.22,0.68,0.46,0.98,0.69c3.88,0.01,7.64,0.31,10.71,1.35
		c4.03,1.36,6.92,3.84,7.74,8.16c1.23,6.51-3.61,20.9-10.54,33.93c0.66,1.55,0.6,3.38-0.32,4.95c-3.38,5.71-7.17,11.08-10.95,15.22
		c-2.51,2.75-5.09,5.03-7.66,6.62c0.24,8.68,1.34,17.64,4.88,24.52c3.75,7.29,10.67,12.45,23.18,12.45c8.79,0,14.93-2.77,19.1-7.52
		c4.45-5.06,7-12.51,8.33-21.4c1.37-9.21,1.25-19.67,0.87-29.46C85.61,48.64,78,39.63,78,28.84C78,16.44,88.04,6.4,100.44,6.4
		L100.44,6.4z M95.8,43.37c0.07,0.02,0.14,0.04,0.21,0.07l0.01,0l0.07,0.02l0.08,0.02l0.2,0.06l0.14,0.04l0.18,0.05
		c0.08,0.02,0.15,0.04,0.22,0.05l0.17,0.04l0.21,0.04l0.16,0.03l0.25,0.05l0.09,0.02c0.09,0.02,0.18,0.03,0.28,0.05l0.11,0.02
		c0.1,0.02,0.2,0.03,0.31,0.04l0.02,0l0,0l0.02,0c0.11,0.01,0.21,0.03,0.32,0.04l0.08,0.01c0.11,0.01,0.22,0.02,0.32,0.03l0.05,0
		c0.12,0.01,0.24,0.02,0.36,0.02l0.01,0c0.12,0.01,0.25,0.01,0.37,0.01l0.02,0h0.01c0.13,0,0.26,0,0.38,0c0.13,0,0.26,0,0.39,0h0
		c0.13,0,0.26-0.01,0.39-0.01h0c0.13-0.01,0.25-0.02,0.38-0.02l0.01,0h0h0c0.12-0.01,0.24-0.02,0.36-0.03l0.02,0l0,0l0.01,0
		c0.12-0.01,0.25-0.03,0.37-0.04l0,0c0.12-0.02,0.24-0.03,0.36-0.05l0.02,0l0,0l0.01,0c0.12-0.02,0.24-0.04,0.36-0.06l0,0
		c0.12-0.02,0.24-0.04,0.35-0.07l0.02,0l0.01,0l0.01,0c0.12-0.02,0.23-0.05,0.35-0.08l0.01,0l0.01,0c0.12-0.03,0.24-0.06,0.36-0.09
		l0.01,0c0.11-0.03,0.22-0.06,0.33-0.09l0.06-0.02c0.11-0.03,0.21-0.06,0.32-0.1l0.01,0l0.01,0c0.11-0.04,0.22-0.07,0.33-0.11
		l0.02,0l0.01,0c0.11-0.04,0.22-0.08,0.33-0.12l0.01,0l0.01,0c0.11-0.04,0.23-0.08,0.34-0.13l0.01,0c0.11-0.04,0.21-0.09,0.32-0.13
		l0.01-0.01l0.01,0c5.47-2.32,9.3-7.73,9.3-14.05c0-8.42-6.83-15.25-15.25-15.25s-15.25,6.83-15.25,15.25
		c0,6.67,4.28,12.34,10.25,14.41l0.21,0.07l0.07,0.02L95.8,43.37L95.8,43.37z M100.44,20.5c4.61,0,8.34,3.73,8.34,8.34
		s-3.73,8.34-8.34,8.34s-8.34-3.73-8.34-8.34S95.83,20.5,100.44,20.5L100.44,20.5z"
                  />
                </g>
              </svg>
              <h2
                className="text-center mt-[10px] text-[18px] lg:text-[20px] text-[#ffffff] font-bold">
                Health and Awareness Camp
              </h2>
              <p className="text-justify text-[14px] lg:text-[16px] lg:pt-[10px] pt-[20px] px-[20px] text-[#ffffff]">
                Health & Awareness program enhances the knowledge, promoting
                wellness and healthy living.
              </p>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Services;
