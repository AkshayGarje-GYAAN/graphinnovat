import React from "react";

function AboutUs() {
  return (
    <>
      <div
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
        <div style={{ width: "100%",display:"flex" }}>
       
          <div
            style={{
              width: "60%",
              paddingRight:32,
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
              Graphinnovat B.V. is a unique company which innovate special
              grades of graphite, gives consultancy for graphite selection and
              formulations for specific application, from Lubricant to
              Batteries.
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
              increase the speed to market, more effectively distil knowledge to
              a practical solution, and achieve greater success. We welcome you
              to get in touch with us to join our partnership.
            </p>
          </div>
          <div style={{ width: "40%" }}>
            <img
              src="https://graphinnovat.eu/img/new_img/AboutGraphite.jpg"
              alt="About"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <h2
          style={{
            width: "30%",
            position: "relative",
            margin: 128,
            marginTop: 64,
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
            width: "70%",
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

          <div style={{ padding: 32 }}>
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
      </div>
    </>
  );
}

export default AboutUs;
