"use client";

import { useState, type FormEvent } from "react";
import { Send, Check } from "lucide-react";

const inputClasses =
  "w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-900/60 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-shadow";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Antoine,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:antoine.tabet@mail.utoronto.ca?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block font-mono text-zinc-400 text-xs uppercase tracking-[0.18em] mb-2"
        >
          Name <span className="text-violet-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={inputClasses}
          placeholder="Your name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-mono text-zinc-400 text-xs uppercase tracking-[0.18em] mb-2"
        >
          Email <span className="text-violet-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className={inputClasses}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-zinc-400 text-xs uppercase tracking-[0.18em] mb-2"
        >
          Message <span className="text-violet-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={`${inputClasses} resize-y`}
          placeholder="What would you like to discuss?"
        />
      </div>

      <button
        type="submit"
        disabled={submitted}
        className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 disabled:bg-emerald-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:shadow-md hover:shadow-violet-600/30 active:scale-[0.98] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        {submitted ? (
          <>
            <Check className="w-4 h-4" />
            Opening mail client...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>

      <p className="font-mono text-zinc-600 text-xs">
        This opens your default email client with the message pre-filled.
      </p>
    </form>
  );
}
