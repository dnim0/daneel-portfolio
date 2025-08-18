// src/utils/emailParams.ts
export type BuildParamsInput = {
  name: string;
  contact: string;   // this is the "email or phone" input from your form
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

export function buildEmailJsParams({ name, contact, message }: BuildParamsInput) {
  const isEmail = EMAIL_RE.test(contact.trim());
  const email = isEmail ? contact.trim() : "";
  const phone = isEmail ? "" : contact.trim();
  const time = new Date().toLocaleString();

  return {
    name,
    email,
    phone,                // empty string if user typed an email
    message,
    time,
    from_name: "AIzamo Website",
    from_email: "noreply@aizamo.com", // must be Brevo-verified
    reply_to: email || "noreply@aizamo.com", // fallback
  };
}
