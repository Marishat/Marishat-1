"use client";

import { useState } from "react";
import { EMAIL } from "@/lib/data";

type SendState = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [sendState, setSendState] = useState<SendState>("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const sendMessage = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setSendState("error");
      return;
    }
    setSendState("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: form.subject ? `Portfolio ✉️ ${form.subject}` : "New message from your portfolio",
          message: form.message,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setSendState("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSendState("error");
    }
  };

  return (
    <div className="form-card">
      <h3>Send me a message 🌸</h3>
      <p className="sub">I usually reply within a day.</p>

      <div className="form-row">
        <div className="field">
          <label htmlFor="f-name">Your name</label>
          <input id="f-name" value={form.name} onChange={set("name")} placeholder="Jane Doe" />
        </div>
        <div className="field">
          <label htmlFor="f-email">Your email</label>
          <input
            id="f-email"
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="jane@example.com"
          />
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-subject">Subject</label>
        <input
          id="f-subject"
          value={form.subject}
          onChange={set("subject")}
          placeholder="QA opportunity / research collab…"
        />
      </div>

      <div className="field">
        <label htmlFor="f-message">Message</label>
        <textarea
          id="f-message"
          value={form.message}
          onChange={set("message")}
          placeholder="Hi Marishat, I saw your portfolio and…"
        />
      </div>

      <button className="cv-btn" onClick={sendMessage} disabled={sendState === "sending"}>
        {sendState === "sending" ? "Sending…" : "Send message →"}
      </button>

      {sendState === "sent" && (
        <p className="send-note ok">✓ Message sent! Thank you — I&apos;ll get back to you soon.</p>
      )}
      {sendState === "error" && (
        <p className="send-note err">
          Please fill in your name, email and message — or email me directly at {EMAIL}.
        </p>
      )}
    </div>
  );
}
