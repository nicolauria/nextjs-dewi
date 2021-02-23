import React from 'react';

const BLANK_FORM = {
  email: "",
}

export default function() {
  const [newsletter, setNewsletter] = React.useState(BLANK_FORM);
  const [success, setSuccess] = React.useState("");
  const [error, setError] = React.useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setNewsletter(prevState => ({ ...prevState, [name]: value }))
  }

  // /api/contact request
  async function handleSubmit(event) {
    event.preventDefault();
    // https://next-balkon.vercel.app
    const res = await fetch('/api/newsletter', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newsletter)
    })
    
    const data = await res.json()
    
    if (res.status === 200) {
      setNewsletter(BLANK_FORM)
      setError("")
      setSuccess(data.message)
    } else {
      setError(data.message)
    }
  }

    return (
        <>
        <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <h3>{success}{error}</h3>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" value={newsletter.email} onChange={handleChange} />
                <input type="submit" defaultValue="Subscribe" />
            </form>
        </div>
        </>
    )
}