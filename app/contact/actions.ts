"use server";

import { createClient } from "@/lib/supabase/server";

export interface InquiryInput {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}

export interface InquiryResult {
  ok: boolean;
  error?: string;
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Persists a contact inquiry to Supabase. Validation runs server-side so it
 * cannot be bypassed by the client. No auth required — public submissions are
 * allowed by an RLS insert policy on the `inquiries` table.
 */
export async function submitInquiry(input: InquiryInput): Promise<InquiryResult> {
  const name = input.name?.trim() ?? "";
  const email = input.email?.trim() ?? "";
  const phone = input.phone?.trim() ?? "";
  const interest = input.interest?.trim() ?? "";
  const message = input.message?.trim() ?? "";

  if (!name) return { ok: false, error: "Name is required." };
  if (!email || !emailRe.test(email)) {
    return { ok: false, error: "A valid email is required." };
  }
  if (message.length < 10) {
    return { ok: false, error: "Please include a slightly longer message." };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("inquiries").insert({
    name,
    email,
    phone: phone || null,
    interest: interest || null,
    message,
  });

  if (error) {
    return { ok: false, error: error.message };
  }

  return { ok: true };
}
