import React from "react";

import battery from "../../../assets/battery.png";

import automotive from "../../../assets/automotive.png";

import steel from "../../../assets/steel.png";
import industy from "../../../assets/industy.png";
import construction from "../../../assets/construction.png";

import electronics from "../../../assets/electronics.png";
import composite from "../../../assets/composite.png";
import esre from "../../../assets/esre.png";

function RelatedMarket() {
  const data = {
    markets: [
      {
        img: battery,
        name: "Battery Industry",
        description:
          "Graphite is a critical component in the battery industry, particularly in the production of lithium-ion batteries. In lithium-ion batteries, graphite serves as the anode material, storing and releasing lithium ions during charging and discharging cycles. With the rapid growth of electric vehicles (EVs) and the increasing demand for energy storage solutions, the battery market represents a significant growth opportunity for graphite producers.",
        applications: [
          "Electric vehicles (EVs)",
          "Consumer electronics",
          "Energy storage systems",
          "Portable electronic devices",
        ],
      },
      {
        img:steel,
        name: "Steel Industry",
        description:
          "The steel industry is another major consumer of graphite, primarily for its use in manufacturing refractories, crucibles, and electrodes. Refractories made from graphite are essential for lining high-temperature furnaces and other equipment used in steelmaking processes. Graphite electrodes are crucial for electric arc furnace (EAF) steelmaking, where they serve as conductive elements for melting scrap steel. The steel industry's demand for graphite is driven by global steel production trends and infrastructure development projects.",
        applications: [
          "High-temperature furnaces",
          "Electric arc furnace (EAF) steelmaking",
          "Continuous casting",
          "Molded graphite products",
        ],
      },
      {
        img:industy,
        name: "Industrial Applications",
        description:
          "Graphite's unique combination of properties, including high thermal conductivity, lubricity, and chemical inertness, makes it indispensable in various industrial applications. In foundries, graphite molds and cores are used for casting metal components with complex shapes. In metallurgy, graphite crucibles and electrodes are utilized for melting and refining metals. Other industrial applications of graphite include heat exchangers, gaskets, seals, and lubricants.",
        applications: [
          "Foundry molds and cores",
          "Metallurgical crucibles and electrodes",
          "Heat exchangers",
          "Sealing and gasket materials",
        ],
      },
      {
        img:electronics,
        name: "Electronics Industry",
        description:
          "Graphite plays a crucial role in the electronics industry, particularly in semiconductor manufacturing. Graphite is used in the production of crucibles, susceptors, and fixtures used in the processing of silicon wafers. These graphite components provide thermal stability and high purity, ensuring precise semiconductor fabrication processes. With the continued miniaturization and complexity of electronic devices, the demand for graphite in the electronics industry is expected to remain strong.",
        applications: [
          "Semiconductor manufacturing",
          "Silicon wafer processing",
          "Crucibles and susceptors",
          "Electronic components",
        ],
      },
      {
        img:esre,
        name: "Energy Storage and Renewable Energy",
        description:
          "Graphite is integral to energy storage technologies and renewable energy applications. In addition to lithium-ion batteries, graphite is used in other energy storage systems such as redox flow batteries and supercapacitors. These technologies play a crucial role in the integration of renewable energy sources like wind and solar into the electrical grid. Graphite's role in energy storage and renewable energy is expected to expand further as the world transitions towards a cleaner and more sustainable energy future.",
        applications: [
          "Renewable energy integration",
          "Grid energy storage systems",
          "Redox flow batteries",
          "Supercapacitors",
        ],
      },
      {
        img:automotive,
        name: "Automotive Industry",
        description:
          "The automotive industry represents a growing market for graphite, driven by the increasing adoption of electric vehicles (EVs). Graphite is a key component in the production of lithium-ion batteries used in EVs, accounting for a significant portion of the battery's cost. Beyond EV batteries, graphite-based materials are also used in various automotive components such as gaskets, seals, and brake linings. As governments worldwide implement stricter emissions regulations and incentives for electric vehicle adoption, the demand for graphite in the automotive industry is expected to rise.",
        applications: [
          "Electric vehicle (EV) batteries",
          "Hybrid electric vehicle (HEV) batteries",
          "Gaskets and seals",
          "Brake linings",
        ],
      },
      {
        img:construction,
        name: "Construction and Infrastructure",
        description:
          "Expandable graphite, a type of graphite that expands when heated, is commonly used as a flame retardant additive in construction materials. It is incorporated into insulation foams, coatings, and polymers to improve fire resistance and meet building safety standards. As urbanization and infrastructure development continue to drive construction activities globally, the demand for expandable graphite in the construction sector is expected to increase.",
        applications: [
          "Fire-resistant insulation",
          "Building materials",
          "Construction foams",
          "Coatings and polymers",
        ],
      },
      {
        img:composite,
        name: "Specialty Applications",
        description:
          "Graphite finds numerous specialty applications across various industries. One notable example is its role as a feedstock for producing graphene, a two-dimensional material with exceptional properties. Graphene has applications in electronics, energy storage, aerospace, healthcare, and composites, among others. Graphite's versatility and unique properties make it a valuable material for driving innovation and advancement in specialty applications.",
        applications: [
          "Graphene production",
          "High-performance composites",
          "Aerospace materials",
          "Biomedical applications",
        ],
      },
    ],
  };

  return (
    <div style={{ paddingLeft: 128, paddingRight: 128, paddingTop: 64 }}>
      {data.markets.map((service, i) => (
        <div style={{ display: "flex", padding: 32, fontFamily: "sans-serif" }}>
          <>
            <div style={{ width: "20%" }}>
              <img
                src={service.img}
                alt={service.title}
                width={"100%"}
                style={{ borderRadius: 16 }}
              />
            </div>
            <div style={{ width: "80%" }}>
              <h2 style={{ color: "#f1a81d", paddingLeft: 32 }}>
                {service.name}
              </h2>
              <div style={{ display: "flex" }}>
                <p
                  style={{
                    paddingLeft: 32,
                    paddingTop: 16,
                    lineHeight: 1.5,
                    color: "#666",
                    width: "100%",
                  }}
                >
                  {service.description}
                  <ul>
                    {service.applications.map((application) => (
                      <li>{application}</li>
                    ))}
                  </ul>
                </p>
              </div>
            </div>
          </>
        </div>
      ))}
    </div>
  );
}
export default RelatedMarket;
