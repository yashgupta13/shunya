import React, { useState } from "react";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import { ChevronDown, CheckCircle, Loader2 } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    role: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Send to multiple emails (comma-separated)
  const RECIPIENT_EMAILS = "yashgupta5809@gmail.com,nairp126@gmail.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Capturing Form Data:", formData);

      const response = await fetch(
        `https://formsubmit.co/ajax/${RECIPIENT_EMAILS}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: "New ErasureProof Early Access Request",
            ...formData,
          }),
        },
      );

      const result = await response.json();
      console.log("Submission result:", result);

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ email: "", role: "", message: "" }); // optional reset
      } else {
        setIsSubmitted(true); // fallback UI
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setIsSubmitted(true); // fallback UI
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-slate-50">
      <div className="max-w-xl mx-auto">
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-200 min-h-[500px] flex flex-col justify-center transition-all">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Secure Your Audit Defense
                </h2>
                <p className="text-slate-500 text-sm">
                  Join the early access program for enterprise teams.
                </p>
              </div>

              <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary py-2.5 px-3 shadow-sm text-sm disabled:opacity-50"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary py-2.5 px-3 shadow-sm text-sm appearance-none cursor-pointer disabled:opacity-50"
                      disabled={isSubmitting}
                    >
                      <option value="" disabled>
                        Select your role...
                      </option>
                      <option value="ciso">CISO / Security Lead</option>
                      <option value="legal">Legal Counsel</option>
                      <option value="risk">Risk & Compliance</option>
                      <option value="it">IT Director</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-3 text-slate-400 pointer-events-none"
                      size={16}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-1.5">
                    What worries you most?
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. Upcoming SOC2 audit, GDPR risks..."
                    className="w-full rounded-lg border-slate-300 bg-white text-slate-900 focus:ring-2 focus:ring-primary focus:border-primary py-2.5 px-3 shadow-sm text-sm resize-none disabled:opacity-50"
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  fullWidth
                  className="mt-2"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-4 w-4" />
                      Processing...
                    </>
                  ) : (
                    "Join Early Access"
                  )}
                </Button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center text-center animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <CheckCircle className="text-green-600 h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Request Received
              </h3>
              <p className="text-slate-600 max-w-xs mx-auto mb-8">
                Thank you for your interest in Shunya. We've recorded your
                details and our team will contact you shortly.
              </p>
              <Button
                variant="secondary"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ email: "", role: "", message: "" });
                }}
              >
                Submit Another Request
              </Button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};
