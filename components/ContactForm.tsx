"use client";

import { useState } from "react";
import { AlertCircle, Check, Loader2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Input, Label, Select, Textarea, FieldError } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { allTypes } from "@/data/properties";
import { submitInquiry } from "@/app/contact/actions";

interface FormState {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const empty: FormState = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  message: "",
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email.";
  else if (!emailRe.test(values.email.trim()))
    errors.email = "Enter a valid email address.";
  if (values.phone.trim() && values.phone.replace(/\D/g, "").length < 7)
    errors.phone = "Enter a valid phone number.";
  if (!values.message.trim()) errors.message = "Tell us a little about what you need.";
  else if (values.message.trim().length < 10)
    errors.message = "A few more words would help us help you.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);

  function setField(field: keyof FormState, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("submitting");
    setSubmitError(null);

    const result = await submitInquiry(values);

    if (result.ok) {
      setStatus("success");
      setValues(empty);
      window.setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
      setSubmitError(
        result.error ?? "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            aria-invalid={!!errors.name}
            placeholder="Your full name"
          />
          <FieldError>{errors.name}</FieldError>
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            aria-invalid={!!errors.email}
            placeholder="you@example.com"
          />
          <FieldError>{errors.email}</FieldError>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            placeholder="+91 ..."
          />
          <FieldError>{errors.phone}</FieldError>
        </div>
        <div>
          <Label htmlFor="interest">Property interest</Label>
          <Select
            id="interest"
            name="interest"
            value={values.interest}
            onChange={(e) => setField("interest", e.target.value)}
          >
            <option value="">Not sure yet</option>
            {allTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="message">Message *</Label>
        <Textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
          aria-invalid={!!errors.message}
          placeholder="Tell us what you're looking for, your budget, and your timeline."
        />
        <FieldError>{errors.message}</FieldError>
      </div>

      <div className="flex items-center gap-4">
        <Button type="submit" disabled={status === "submitting"} withArrow>
          {status === "submitting" ? "Sending…" : "Send enquiry"}
        </Button>
        {status === "submitting" && (
          <Loader2 size={18} className="animate-spin text-brown-500" />
        )}
      </div>

      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            role="status"
            className="flex items-center gap-3 rounded-xl bg-blue-900 px-5 py-4 text-sm text-cream"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brown-500">
              <Check size={16} />
            </span>
            Thank you — your enquiry is in. An agent will be in touch shortly.
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            role="alert"
            className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-800"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100">
              <AlertCircle size={16} />
            </span>
            <span>
              We couldn&apos;t send your enquiry. {submitError} Please try again
              or email us directly.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
