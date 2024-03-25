import React from "react";
import { HashLink } from "react-router-hash-link";
import { gridservices } from "../../Appconstant";
import Bannerprops from "../Banner/Bannerprops";
import Gridservice from "./Gridservice";
import "./Services.css";
function Services() {
  const services = [
    {
      img: "https://graphinnovat.eu/img/new_img/Consultancy.jpg",
      title: "Consultancy",
      desc: `Have you ever wondered?

    Which graphite should be used for certain applications? Should it be natural or synthetic? Which shape and particle size graphite should have to deliver the best performance? What should be the surface area of particles?
    
    Not all graphite is the same, there are different purities and flake sizes, all of which impacts the end users experience.
    
    We help you to find application-oriented graphite type, grade, properties, etc. and this is very necessary for any applications to get maximum desired performance and output. We hold qualified and experienced experts in matching graphite resource to high tech niche applications. Along with it, Graphinnovat does not give consultancy only based on experience but also owns state of art laboratory to prove the best optimal solution.
    
    Our state of art laboratory enables us to select application-centric exact grade of graphite, select best process for making dispersions, for specific applications. One of our expertise is make stable graphite dispersions.`,
    },
    {
      img: "https://graphinnovat.eu/img/new_img/research.jpg",
      title: "Product Research and Development",
      desc: `Do you have thought of projects relating to graphite and need Research and Product Development?

    Don’t worry you are at the right place, Graphinnovat along with its knowledge, experience and resources is always ready to work on such projects. we help you to complete projects effectively and smoothly with efficient use of time and without losing money.
    
    Our broad collaborations with Universities enable us to access and utilize all latest techniques and technologies for Research and Development. Also, Graphinnovat has its own well-equipped laboratory which can be used for such projects whether it can be a feasibility study, new product development, raw material search and replacement, etc.`,
    },
    {
      img: "https://graphinnovat.eu/img/new_img/research.png",
      title: "Laboratory services, Testing",
      desc: `Graphinnovat distinguishes itself with its well-equipped and fully functional test Laboratory loaded with all kind of equipment and facilities. Some of the major suppliers of graphite generally use our test facilities to analyze different type of graphite.

      If you have any graphite powder /graphite-based products and that needs to analyze by various latest techniques then Graphinnovat welcomes you.
      
      Following is a list of some of the test which we perform in our laboratory.
      
      Gravimetric analysis, elemental analysis, TGA, Surface Area BET, adsorption isotherms, Crystal size and/or structure, Pore size, Raman spectroscopy, dispersion and suspension stability, viscosity, microscopic analysis, particle size determination, Sieve analysis, etc.
      
      Contact us if you are searching for such kind of optimal testing services.`,
    },
  ];

  return (
    <div style={{paddingLeft:128,paddingRight:128,paddingTop:64}}>
      {services.map((service, i) => (
        <div style={{ display: "flex", padding: 32, fontFamily: "sans-serif" }}>
          {i % 2 ? (
            <>
              <div style={{ width: "30%" }}>
                <img src={service.img} alt={service.title} width={"100%"} style={{borderRadius: 16}} />
              </div>
              <div style={{ width: "70%"}}>
                <h2 style={{ paddingLeft: 64, color: "#f1a81d" }}>
                  {service.title}
                </h2>
                <p
                  style={{
                    paddingLeft: 64,
                    paddingTop: 16,
                    lineHeight: 1.5,
                    color: "#666",
                  }}
                >
                  {service.desc}
                </p>
              </div>
            </>
          ) : (
            <>
              <div style={{ width: "70%" }}>
                <h2 style={{ paddingRight: 64, color: "#f1a81d" }}>
                  {service.title}
                </h2>
                <p
                  style={{
                    paddingRight: 64,
                    paddingTop: 16,
                    lineHeight: 1.5,
                    color: "#666",
                  }}
                >
                  {service.desc}
                </p>
              </div>
              <div style={{ width: "30%" }}>
                <img src={service.img} alt={service.title}  width={"100%"} style={{borderRadius: 16}} />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
export default Services;
