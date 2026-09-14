import { useState } from 'react'
import { social } from '../data/social'
import LinkedInIcon from '../components/LinkedInIcon.jsx'

// Sends via FormSubmit (https://formsubmit.co) — a no-backend form relay.
// The first submission ever sent to this address triggers a one-time
// confirmation email from FormSubmit; submissions won't arrive until that's confirmed.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/abonamassa@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('sending')
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: 'New message from anabonamassa.com',
        }),
      })
      if (!response.ok) throw new Error('Request failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="section contact-section">
      <h1 className="section-heading">get in touch</h1>

      {status === 'sent' ? (
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

          {status === 'error' && (
            <p className="contact-error">Something went wrong sending that — try again in a moment.</p>
          )}

          <button type="submit" className="btn-outline" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </form>
      )}

      <a href={social.linkedin} target="_blank" rel="noreferrer" className="contact-linkedin">
        <LinkedInIcon />
        Connect on LinkedIn
      </a>
    </section>
  )
}
