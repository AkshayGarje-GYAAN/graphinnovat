import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_rbavdfr', 'template_7omb2ri', e.target, 'VjiKEUQDbHpqQ9qtF')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
        // Optionally clear the form fields after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.error(error.text);
        alert('Failed to send email. Please try again later.');
      });
  };

 
  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label htmlFor="name" style={styles.label}>Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={{ ...styles.input, ...styles.inputText }} />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="email" style={styles.label}>Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={{ ...styles.input, ...styles.inputText }} />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="message" style={styles.label}>Message:</label>
        <textarea id="message" name="message" rows={5}  value={formData.message} onChange={handleChange} required style={{ ...styles.input, ...styles.textarea }} />
      </div>
      <button type="submit" style={{ ...styles.submitBtn }}>Submit</button>
    </form>
  );
};

const styles = {
  form: {
    width:"30%",
    margin: '0 auto',
    padding: '37px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
  },
  formGroup: {
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#000'
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '0.5px solid #666',
    borderRadius: '5px',
    boxSizing: 'border-box', // Ensure padding doesn't increase input width
    color: '#000'
  },
  inputText: {
    fontSize: '16px',
    color: '#000'
  },
  textarea: {
    width: '100%',
    padding: '10px',
    border: '0.5px solid #666',
    borderRadius: '5px',
    resize: 'none',
    boxSizing: 'border-box', // Ensure padding doesn't increase textarea width
    color: '#000'
  },
  submitBtn: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#fff',
    color: '#f1a81d',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold'
  }
};


export default ContactForm;
