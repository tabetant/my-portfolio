"use client";

import { useState, type FormEvent } from "react";
import { Send, Check } from "lucide-react";

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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-zinc-700 text-sm font-medium mb-1.5">
          Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm bg-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-shadow"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-zinc-700 text-sm font-medium mb-1.5">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm bg-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-shadow"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-zinc-700 text-sm font-medium mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2.5 rounded-lg border border-zinc-300 text-zinc-900 text-sm bg-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-shadow resize-y"
          placeholder="What would you like to discuss?"
        />
      </div>

      <button
        type="submit"
        disabled={submitted}
        className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-500 disabled:bg-emerald-600 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:shadow-md hover:shadow-violet-600/30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
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

      <p className="text-zinc-400 text-xs">
        This opens your default email client with the message pre-filled.
      </p>
    </form>
  );
}
