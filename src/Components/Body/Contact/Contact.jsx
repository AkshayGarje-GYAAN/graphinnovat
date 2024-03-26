import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div style={styles.container}>
     
      <div style={styles.contactContainer}>
        <h1 style={styles.heading}>Contact Us</h1>
        <div style={styles.contactInfo}>
          <p style={styles.info}>
            <span style={styles.icon}>📍</span>{" "}
            <span style={styles.label}>Office Address:</span> Schoener 42 9, 8243 VW,
            Lelystad, The Netherlands
          </p>
          <p style={styles.info}>
            <span style={styles.icon}>🧪</span>{" "}
            <span style={styles.label}>Lab Address:</span> Lab No.3, Runderweg 6,
            8219 PK, Lelystad, The Netherlands
          </p>
          <p style={styles.info}>
            <span style={styles.icon}>☎️</span>{" "}
            <span style={styles.label}>Phone:</span> +31-(0)64319094
          </p>
          <p style={styles.info}>
            <span style={styles.icon}>✉️</span>{" "}
            <span style={styles.label}>Email:</span>{" "}
            <a href="mailto:amc@graphinnovat.com" style={styles.link}>
              amc@graphinnovat.com
            </a>
          </p>
        </div>
      </div>
      <ContactForm/>
    </div>
  );
};

const styles = {
  container: {
    display:"flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  contactContainer: {
    margin: 64,
    marginRight:32,
    padding: 64,
    width: "50%",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "28px",
    color: "#f1a81d",
    textTransform: "uppercase",
  },
  contactInfo: {
    marginTop: "20px",
  },
  info: {
    marginBottom: "20px",
    fontSize: "18px",
    lineHeight: "1.5",
    color: "#333",
    display: "flex",
  },
  label: {
    fontWeight: "bold",
    marginRight: "10px",
  },
  icon: {
    fontSize: "24px",
    marginRight: "15px",
  },
  link: {
    color: "#f1a81d",
    textDecoration: "none",
  },
};

export default Contact;
