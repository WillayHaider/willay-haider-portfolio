import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

const EMAILJS_SERVICE_ID = "service_41mm3bo";
const EMAILJS_TEMPLATE_ID = "template_67r462c";
const EMAILJS_PUBLIC_KEY = "me568Yyf0eXCGD3sF";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  website: string;
  message: string;
}

const initialFormData: FormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  website: "",
  message: "",
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.first_name.trim()) newErrors.first_name = "First name is required";
    if (!formData.last_name.trim()) newErrors.last_name = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.website.trim()) newErrors.website = "Website is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { ...formData },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      setFormData(initialFormData);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto rounded-2xl border border-border bg-card overflow-hidden shadow-[var(--shadow-card)]">
      <div className="flex items-start gap-3 sm:gap-4 px-5 sm:px-8 py-5 sm:py-6 border-b border-border">
        <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] shadow-[var(--shadow-glow)]">
          <Send className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
        </div>
        <div className="min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">Let's Connect</h2>
          <p className="text-muted-foreground text-xs sm:text-sm mt-1">I reply within 1–2 business days</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="px-5 sm:px-8 py-6 sm:py-8 space-y-4 sm:space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <Field
            label="First Name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            error={errors.first_name}
            placeholder="Mike"
          />
          <Field
            label="Last Name"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            error={errors.last_name}
            placeholder="Ross"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          <Field
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="your@email.com"
          />
          <Field
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <Field
          label="Company Website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          error={errors.website}
          placeholder="yourcompany.com"
        />

        <div>
          <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">
            Message <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your pipeline goals, target market, or what you are trying to solve…"
            className={`w-full rounded-lg border bg-input px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
              errors.message ? "border-destructive" : "border-border"
            }`}
          />
          {errors.message && (
            <p className="text-destructive text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full sm:w-auto flex sm:inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground font-bold px-7 py-3 shadow-[var(--shadow-glow)] transition-transform duration-300 hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <Send className="h-4 w-4" />
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-sm font-medium" style={{ color: "oklch(0.7 0.18 145)" }}>
            Thank you, your message has been received. I'll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-destructive text-sm font-medium">
            Something went wrong sending your message. Please try again or email me directly.
          </p>
        )}
      </form>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: keyof FormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder?: string;
}

function Field({ label, name, value, onChange, error, type = "text", placeholder }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">
        {label} <span className="text-primary">*</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-lg border bg-input px-3.5 sm:px-4 py-2.5 sm:py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring ${
          error ? "border-destructive" : "border-border"
        }`}
      />
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
}
