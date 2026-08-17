import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";

// EmailJS config — safe to expose in frontend code (Public Key only, never the Private Key)
const EMAILJS_SERVICE_ID = "service_41mm3bo";
const EMAILJS_TEMPLATE_ID = "template_67r462c";
const EMAILJS_PUBLIC_KEY = "me568Yyf0eXCGD3sF";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  message: string;
}

const initialFormData: FormData = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  message: "",
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [notRobot, setNotRobot] = useState(false);

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
    if (!formData.company.trim()) newErrors.company = "Company is required";
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
      setNotRobot(false);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  };

  return (
    <section className="w-full max-w-3xl mx-auto">
      <div className="relative rounded-2xl border border-white/10 bg-[#0b1220] shadow-2xl shadow-blue-500/10 overflow-hidden">
        {/* header */}
        <div className="flex items-center gap-4 px-8 py-6 bg-gradient-to-r from-[#0d1526] to-[#0b1220] border-b border-white/10">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-blue-500/30">
            <Send className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Send Me a Message</h2>
            <p className="text-slate-400 text-sm mt-0.5">I respond within one business day</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5" noValidate>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Field
              label="Company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              error={errors.company}
              placeholder="Acme Inc."
            />
            <Field
              label="Website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              error={errors.website}
              placeholder="yourcompany.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wide text-slate-300 mb-1.5">
              Message <span className="text-cyan-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your pipeline goals, target market, or what you are trying to solve…"
              className={`w-full rounded-lg bg-white/5 border px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400/50 transition-colors ${
                errors.message ? "border-red-400/60" : "border-white/10"
              }`}
            />
            {errors.message && (
              <p className="text-red-400 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* not-a-robot check (visual placeholder — wire up real reCAPTCHA if needed) */}
          <label className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 w-fit cursor-pointer select-none">
            <input
              type="checkbox"
              checked={notRobot}
              onChange={(e) => setNotRobot(e.target.checked)}
              className="h-4 w-4 rounded border-white/30 bg-transparent accent-cyan-400"
            />
            <span className="text-sm text-slate-300">I'm not a robot</span>
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium px-7 py-3 transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 opacity-60 blur-md group-hover:opacity-90 transition-opacity -z-10" />
            <span
              aria-hidden
              className="absolute inset-0 rounded-full border border-cyan-300/60 animate-ping opacity-0 group-hover:opacity-40"
            />
            <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-emerald-400 text-sm font-medium">
              Thanks — your message has been sent. I'll get back to you soon!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm font-medium">
              Something went wrong sending your message. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
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
      <label htmlFor={name} className="block text-xs font-semibold uppercase tracking-wide text-slate-300 mb-1.5">
        {label} <span className="text-cyan-400">*</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-lg bg-white/5 border px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/40 focus:border-cyan-400/50 transition-colors ${
          error ? "border-red-400/60" : "border-white/10"
        }`}
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
