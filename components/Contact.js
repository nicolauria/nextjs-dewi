import React from 'react';

const BLANK_FORM = {
  name: "",
  email: "",
  subject: "",
  message: ""
}

export default function() {
  const [contactForm, setContactForm] = React.useState(BLANK_FORM);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setContactForm(prevState => ({ ...prevState, [name]: value }))
  }

  // /api/contact request
  async function handleSubmit(event) {
    event.preventDefault();
    // https://next-balkon.vercel.app
    const res = await fetch('/api/contact', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactForm)
    })
    
    const data = await res.json()
    
    if (res.status === 200) {
      setContactForm(BLANK_FORM)
      setError("")
      setSuccess(data.message)
    } else {
      setError(data.message)
    }
  }

    return (
        <>
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Contact</h2>
                <p>Contact Us</p>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="info-box">
                        <i className="bx bx-map" />
                        <h3>Our Address</h3>
                        <p>A108 Adam Street, New York, NY 535022</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box mt-4">
                        <i className="bx bx-envelope" />
                        <h3>Email Us</h3>
                        <p>info@example.com<br />contact@example.com</p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="info-box mt-4">
                        <i className="bx bx-phone-call" />
                        <h3>Call Us</h3>
                        <p>+1 5589 55488 55<br />+1 6678 254445 41</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-4 mt-lg-0">
                  <form onSubmit={handleSubmit} method="post" role="form" className="php-email-form">
                      <h3>{success}{error}</h3>
                    <div className="row">
                      <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required value={contactForm.name} onChange={handleChange} />
                      </div>
                      <div className="col-md-6 form-group mt-3 mt-md-0">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required value={contactForm.email} onChange={handleChange} />
                      </div>
                    </div>
                    <div className="form-group mt-3">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required value={contactForm.subject} onChange={handleChange} />
                    </div>
                    <div className="form-group mt-3">
                      <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} value={contactForm.message} onChange={handleChange} />
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}