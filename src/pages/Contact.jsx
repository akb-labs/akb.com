import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    // No backend is wired up yet — this just confirms the form works.
    // Swap this out for a real submit (e.g. Formspree, Netlify Forms, or your own endpoint).
    setSubmitted(true)
  }

  return (
    <section className="section contact-section">
      <h1 className="section-heading">get in touch</h1>

      {submitted ? (
        <p className="contact-success">Thanks — I'll get back to you soon.</p>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" required value={form.name} onChange={handleChange} />

          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" required value={form.email} onChange={handleChange} />

          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            required
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="btn-outline">
            Send
          </button>
        </form>
      )}
    </section>
  )
}
