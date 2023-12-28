import React from "react";
import heroImg from "../../assets/images/hero.svg";
import pic from "../../assets/images/pic.png";
import CountUp from "react-countup";
import { Icon } from "@iconify/react";

const Hero = () => {
  const onButtonClick = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/1uUjwqjOsaT5jiGv2TR0lle7Gze6AQzYL/view?usp=drive_link";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        {/* ..........hero left...................... */}

        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-2/4 md:basics-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello Welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Harshit Upadhyay <br /> Software Developer
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="flex items-center gap-6 mt-7"
            >
              <a href="mailto:harshitu302001@gmail.com">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                  <i class="ri-mail-line">
                    <span className="p-2">Hire me</span>
                  </i>
                </button>
              </a>
              <button
                //href="#portfolio"
                onClick={onButtonClick}
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                Download Resume
              </button>
            </div>

            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              className="flex gap-2 text-headingColor mt-14 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span>
                <i class="ri-apps-2-line"></i>
              </span>
              In this corner of the web, you'll find a collection of my software
              engineering projects, each a testament to my dedication to
              problem-solving and technological advancement. Dive into my
              portfolio and discover the digital solutions I've crafted.
            </p>

            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">
                Follow me:
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/harshit-upadhyay-544b97200"
                  className="text-smallTextColor text-[15px] font-[600]"
                >
                  <i class="ri-linkedin-box-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/friekyCoder"
                  className="text-smallTextColor text-[15px] font-[600]"
                >
                  <i class="ri-github-fill"></i>
                </a>
              </span>
              <span>
                <a
                  href="https://leetcode.com/hash_it/"
                  className="text-smallTextColor text-[15px] font-[600]"
                >
                  <Icon icon="simple-icons:leetcode" />
                </a>
              </span>
              <span>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox"
                  className="text-smallTextColor text-[15px] font-[600]"
                >
                  <i class="ri-mail-line"></i>
                </a>
              </span>
            </div>
          </div>

          {/* .........hero left ends............ */}

          {/* ...........hero imgage begins............. */}

          <div className="basics-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
              <img
                src={pic}
                width="400px"
                height="500px"
                class="md:w-96"
                alt=""
              />
            </figure>
          </div>

          {/* ...........hero imgage ends............. */}

          {/* ...........hero content right begins............. */}

          <div className="md:basics-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={26} duration={2} suffix="+" />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]">
                Projects Completed
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
