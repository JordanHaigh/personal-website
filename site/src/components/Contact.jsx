import { useEffect, useRef, useState } from "react";

const contactEmail = "jhaigh1997@gmail.com";

export default function Contact() {
  const [draft, setDraft] = useState(null);
  const previewRef = useRef(null);

  useEffect(() => {
    if (draft) previewRef.current?.focus();
  }, [draft]);

  function prepareDraft(event) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const name = String(values.get("name")).trim();
    const email = String(values.get("email")).trim();
    const message = String(values.get("message")).trim();
    if (!name || !email || !message) return;
    const body = `${message}\n\nFrom: ${name}\nReply to: ${email}`;
    setDraft({
      name, email, message,
      href: `mailto:${contactEmail}?subject=${encodeURIComponent(`Website enquiry from ${name}`)}&body=${encodeURIComponent(body)}`,
    });
  }

  function invalidateDraft(event) {
    event.target.setCustomValidity(event.target.value.trim() ? "" : "Please fill out this field.");
    setDraft(null);
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <h2 className="section-heading" id="contact-title">Contact</h2>
      <p className="contact-intro">Have an idea? Let's talk.</p>
      <p className="contact-note">Have a project, a technical challenge, or a question?<br />Reach me at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
      <form className="contact-form" id="contact-form" aria-describedby="form-note" onSubmit={prepareDraft}>
        <fieldset id="contact-fields">
          <label htmlFor="name">Name</label><input id="name" name="name" placeholder="Your name" autoComplete="name" required maxLength={100} onInput={invalidateDraft} />
          <label htmlFor="email">Email</label><input id="email" name="email" type="email" placeholder="Your email" autoComplete="email" required maxLength={254} onInput={invalidateDraft} />
          <label htmlFor="message">Message</label><textarea id="message" name="message" placeholder="What would you like to talk about?" rows={5} required maxLength={5000} onInput={invalidateDraft} />
          <div className="form-bottom"><p id="form-note">Prepare your message, then open it in your email app.</p><button className="text-link" type="submit">Prepare email <span aria-hidden="true">↗</span></button></div>
        </fieldset>
        {draft && (
          <div className="message-preview" id="message-preview" ref={previewRef} tabIndex={-1}>
            <h3>Your email draft</h3>
            <p id="preview-sender">{draft.name} · {draft.email}</p>
            <p id="preview-body">{draft.message}</p>
            <a className="text-link" id="email-draft" href={draft.href}>Open email draft <span aria-hidden="true">↗</span></a>
            <p className="preview-note">Opens your email app. Review the draft and send it there.</p>
          </div>
        )}
      </form>
    </section>
  );
}
