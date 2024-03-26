import React, { useEffect, useState } from "react";
import { profile } from "../../Appconstant";
import Carouselcont from "../../Reuseable/Carousel/Carouselcont";
import Typeonload from "../../Reuseable/Typeonload/Typeonload";
import Aboutsection from "../Aboutsection/Aboutsection";
import Banner from "../Banner/Banner";
import Slide from "../Banner/Slide";
import Services from "../Services/Services";
import Works from "../Works/Works";
import { Card, Icon } from "@material-ui/core";
import { FaHandshake } from "react-icons/fa";
import { GiChemicalDrop } from "react-icons/gi";
import { MdPrecisionManufacturing } from "react-icons/md";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";

function Home(props) {
  const [currentslide, setCurrentslide] = useState(0);
  const slidesrow = profile?.map((el, i) => {
    return <Slide slide={el} index={i} currentslide={currentslide} />;
  });

  useEffect(() => {
    setCurrentslide(0);
  }, []);

  const services = [
    {
      id: 1,
      Icon: FaHandshake,
      name: "Consultancy",
      desc: (
        <>
          <p>Have you ever wondered</p>
          <p>
            Which graphite should be used for certain applications? Should it be
            natural or synthetic?
          </p>
        </>
      ),
    },
    {
      id: 2,
      Icon: MdPrecisionManufacturing,
      name: "Product Research and Development",
      desc: (
        <>
          <p>
            Do you have thought of projects relating to graphite and need
            Research and Product Development?
          </p>
        </>
      ),
    },
    {
      id: 3,
      Icon: GiChemicalDrop,
      name: "Lab Testing",
      desc: (
        <>
          <p>
            Graphinnovat distinguishes itself with its well-equipped and fully
            functional test Laboratory loaded with all kind of equipment and
            facilities.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <div style={{ maxHeight: 600 }}>
        <Carouselcont
          slides={slidesrow}
          setCurrentslide={setCurrentslide}
          currentslide={currentslide}
        />
      </div>
      {/* <div
        style={{
          margin: 32,
          marginLeft: 128,
          marginRight: 128,
          borderStartEndRadius: 32,
          borderEndStartRadius: 32,
          color: "#666",
          fontFamily: "sans-serif",
        }}
      >
        <h2
          style={{
            color: "#f1a81d",
            fontFamily: "sans-serif",
            marginBottom: 16,
          }}
        >
          Who we are
        </h2>
        <div
          style={{
            fontFamily: "sans-serif",
          }}
        >
          <p>
            Graphite and Innovation made our company Graphinnovat BV.
            Graphinnovat list’s itself as one of the innovation-based company
            focused on Graphite. The combination of mechanical, thermal and
            electrical properties makes Graphite an amazing material used in
            many known applications and also many more applications about to
            discover. Mission of Graphinnovat BV is to be a leader to innovate
            new generation of Graphite and Graphite based products.
          </p>
          <br />
          <p>
            Graphinnovat B.V. is a unique company which innovate special grades
            of graphite, gives consultancy for graphite selection and
            formulations for specific application, from Lubricant to Batteries.
          </p>
          <br />
          <p>
            Graphinnovat BV holds collaborations with Universities for basic
            research to develop next generation of graphite powders by surface
            treatment and Edge modifications. Graphinnovat BV also has its own
            well-equipped laboratory for product development and performance
            testing. Several of our customer are using our testing facility to
            characterize graphite powder and products.
          </p>
          <br />
          <p>
            Graphinnovat has philosophy that by working in collaboration we
            increase the speed to market, more effectively distil knowledge to a
            practical solution, and achieve greater success. We welcome you to
            get in touch with us to join our partnership.
          </p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
     
        <h2
          style={{
            width:"30%",
            position: "relative",
            margin: 128,
            marginTop:64,
            marginRight: 32,
            font: "700 60px / 0.8 Poppins",
            textTransform: "capitalize",
            color: "#9999",
            lineHeight: "0.85",
          }}
        >
          Most trusted
          <br />
          Graphite Powder
          <br /> Manufacturer
        </h2>
        <div
          style={{
            width:"70%",
            display: "flex",
            justifyContent: "center",
            height: 120,
            alignContent: "center",
            textAlign: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <div style={{ borderRight: "solid #e8e8e8 1px", padding: 32 }}>
            <div
              style={{
                font: " 700 80px / 0.8 Poppins",
                textTransform: "capitalize",
                color: "#f1a81d",
                lineHeight: "0.85",
              }}
              data-target="25"
            >
              25
            </div>
            <p>Awards and Recognitions</p>
          </div>
          <div style={{ borderRight: "solid #e8e8e8 1px", padding: 32 }}>
            <div
              style={{
                font: " 700 80px / 0.8 Poppins",
                textTransform: "capitalize",
                color: "#f1a81d",
                lineHeight: "0.85",
              }}
              data-target="51"
            >
              10
            </div>
            <p>years of excellence</p>
          </div>
          <div style={{ borderRight: "solid #e8e8e8 1px", padding: 32 }}>
            <div
              style={{
                font: " 700 80px / 0.8 Poppins",
                textTransform: "capitalize",
                color: "#f1a81d",
                lineHeight: "0.85",
              }}
              data-target="200"
            >
              200+
            </div>
            <p>Projects Delivered</p>
          </div>

          <div style={{  padding: 32 }}>
            <div
              style={{
                font: " 700 80px / 0.8 Poppins",
                textTransform: "capitalize",
                color: "#f1a81d",
                lineHeight: "0.85",
              }}
              data-target="98000"
            >
              9800
            </div>
            <p>tons per annum capacity</p>
          </div>
        </div>
      </div> */}

      <AboutUs/>

      <div style={{ width:"100%",justifyContent:"center",display:"flex"}}>
        <h1
          style={{
            color: "#f1a81d",
            fontFamily: "sans-serif",
            alignSelf:"center",
          }}
        >
          OUR SERVICES
        </h1>

    
      </div>
      <div style={{ alignSelf:"center",justifyContent:"center",display:"flex"}}>
      
<div style={{width:"100px",borderTop:"solid #666 3px",textAlign:"center",marginTop:16}}></div>
    
      </div>
   
      <div
          style={{
            display: "flex",
            gap: 32,
            padding: 32,
            width: "100%",
            justifyContent: "center",
          }}
        >
          {services.map((Service, index) => (
            <Card
              key={index}
              style={{
                padding: 16,
                width: "22%",
                textAlign: "center",
                borderRadius: 16,
              }}
            >
              <Service.Icon color="#f1a81d" fontSize={64} />
              <h3
                style={{
                  color: "#666",
                  fontFamily: "sans-serif",
                }}
              >
                {Service.name}
              </h3>
              <p
                style={{
                  color: "#666",
                  fontFamily: "sans-serif",
                  padding: 16,
                }}
              >
                {Service.desc}
              </p>
            </Card>
          ))}
        </div>
        <Contact/>
    </>
  );
}
export default Home;
