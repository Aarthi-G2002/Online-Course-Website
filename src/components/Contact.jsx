import  { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMsg("Your message has been sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setTimeout(() => setSuccessMsg(""), 3000);
  };

  return (
    <div className="contact-section">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-desc">
        Have questions about courses, pricing, or support? Reach out to our team.
      </p>

      <div className="contact-box">
       
        <div className="contact-info">
          <h3>Contact Details</h3>
          <p>📞 <strong>Phone:</strong> +1 (555) 123-EDUC</p>
          <p>📧 <strong>Email:</strong> support@edutech.com</p>
          <p>📍 <strong>Address:</strong> 123 Education Street<br />San Francisco, CA 94105</p>
          <p>🕒 <strong>Hours:</strong><br />Mon-Fri: 9AM–6PM PST<br />Weekends: 10AM–4PM PST</p>
        </div>

       
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Your Information</h3>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Subject</label>
            <select
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Subject --</option>
              <option>General</option>
              <option>Course Help</option>
              <option>Technical</option>
              <option>Billing</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="send-btn">Send Message</button>
          {successMsg && <p className="success-msg">{successMsg}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;  