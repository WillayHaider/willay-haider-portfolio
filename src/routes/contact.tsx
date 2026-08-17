import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

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
    <section className="w-full max-w-3xl mx-auto">
      <div className="bg-slate-900 text-white rounded-t-2xl px-8 py-6">
        <h2 className="text-2xl font-bold">Send Me a Message</h2>
        <p className="text-slate-300 text-sm mt-1">I respond within one business day</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-b-2xl shadow-lg px-8 py-8 space-y-5 border border-t-0 border-slate-200"
        noValidate
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Field
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="you@company.com"
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
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your pipeline goals, target market, or what you are trying to solve…"
            className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/40 ${
              errors.message ? "border-red-400" : "border-slate-300"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-green-600 text-sm font-medium">
            Thanks — your message has been sent. I'll get back to you soon!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-500 text-sm font-medium">
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
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/40 ${
          error ? "border-red-400" : "border-slate-300"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
