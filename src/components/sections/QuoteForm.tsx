"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Loader2, Mail, Copy, Check } from "lucide-react";
import { getAllProducts, getSiteConfig } from "@/content";
import {
  INQUIRY_TYPE_LABELS,
  prepareQuoteSubmission,
  validateQuotePayload,
  type ValidationErrors,
} from "@/lib/quote-service";
import type {
  InquiryType,
  QuoteRequestPayload,
  QuoteSubmissionResult,
} from "@/types/commerce";

const VALID_INQUIRY_TYPES: InquiryType[] = [
  "graze_box_order",
  "corporate_catering",
  "private_catering",
  "grazing_table",
  "food_truck_booking",
  "general_inquiry",
];

interface QuoteFormProps {
  defaultInquiryType?: InquiryType;
  defaultProductSlug?: string;
}

export function QuoteForm({
  defaultInquiryType = "graze_box_order",
  defaultProductSlug = "",
}: QuoteFormProps) {
  const searchParams = useSearchParams();
  const products = getAllProducts();
  const siteConfig = getSiteConfig();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiryType, setInquiryType] = useState<InquiryType>(defaultInquiryType);
  const [selectedProductSlug, setSelectedProductSlug] = useState(defaultProductSlug);
  const [eventDate, setEventDate] = useState("");
  const [quantityOrGuestCount, setQuantityOrGuestCount] = useState("");
  const [eventDetails, setEventDetails] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [result, setResult] = useState<QuoteSubmissionResult | null>(null);
  const [copied, setCopied] = useState(false);

  // Synchronize URL query parameters (?type=...&product=...)
  useEffect(() => {
    const paramType = searchParams.get("type") as InquiryType | null;
    const paramProduct = searchParams.get("product");

    if (paramType && VALID_INQUIRY_TYPES.includes(paramType)) {
      setInquiryType(paramType);
    } else if (paramProduct) {
      setInquiryType("graze_box_order");
    }

    if (paramProduct) {
      setSelectedProductSlug(paramProduct);
    }
  }, [searchParams]);

  const isDirectBoxOrder = inquiryType === "graze_box_order";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmissionError(null);

    const payload: QuoteRequestPayload = {
      fullName,
      email,
      phone,
      inquiryType,
      selectedProductSlug: isDirectBoxOrder ? selectedProductSlug : undefined,
      eventDate: eventDate || undefined,
      quantityOrGuestCount: quantityOrGuestCount || undefined,
      eventDetails: eventDetails || undefined,
      message,
    };

    const validationErrors = validateQuotePayload(payload);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    try {
      const prepared = await prepareQuoteSubmission(payload);
      setResult(prepared);
    } catch {
      setSubmissionError(
        `We encountered an issue preparing your request. Please contact us directly at ${siteConfig.contact.phoneDisplay} or ${siteConfig.contact.email}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleCopySummary() {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result.summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard API fallback not needed if blocked
    }
  }

  if (result) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg border border-[#5E1914]/30 bg-[#FAF7F2] p-8 sm:p-10"
      >
        <div className="flex items-start gap-4">
          <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-[#5E1914]" />
          <div className="space-y-3">
            <p className="text-[11px] font-semibold tracking-[0.22em] text-[#5E1914] uppercase">
              Request Summary Prepared • Ref {result.referenceCode}
            </p>
            <h3 className="font-serif text-3xl text-[#1C1917]">
              Complete Your Dispatch to Tayrona Catering
            </h3>
            <p className="text-sm leading-relaxed text-[#57534E]">
              Your request details have been validated and formatted with reference{" "}
              <strong className="font-semibold text-[#1C1917]">
                {result.referenceCode}
              </strong>
              . Because online checkout and automated CRM integration are scheduled for our upcoming release, please click below to send this pre-filled request directly to{" "}
              <strong className="font-semibold text-[#1C1917]">
                {siteConfig.contact.email}
              </strong>{" "}
              or copy the summary to share with our concierge.
            </p>
          </div>
        </div>

        <pre className="rounded-md mt-6 overflow-x-auto border border-[#1C1917]/12 bg-[#F3EFE6] p-4 font-mono text-xs leading-relaxed text-[#1C1917]">
          {result.summaryText}
        </pre>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={result.mailtoUrl}
            className="rounded-md inline-flex items-center gap-2.5 bg-[#5E1914] px-7 py-4 text-xs font-semibold tracking-[0.18em] text-[#FAF7F2] uppercase transition-colors hover:bg-[#1C1917]"
          >
            <Mail className="h-4 w-4" />
            <span>Open in Email Client to Send</span>
          </a>

          <button
            type="button"
            onClick={handleCopySummary}
            className="rounded-md inline-flex items-center gap-2 border border-[#1C1917]/25 bg-transparent px-5 py-4 text-xs font-semibold tracking-[0.16em] text-[#1C1917] uppercase transition-colors hover:border-[#1C1917] hover:bg-[#F3EFE6]"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-[#4A5D4E]" />
                <span>Summary Copied</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy Request Summary</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setResult(null)}
            className="text-xs font-medium text-[#57534E] underline-offset-4 hover:text-[#1C1917] hover:underline"
          >
            Edit Request Details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="form-fade-in rounded-lg space-y-7 border border-[#1C1917]/12 bg-[#FAF7F2] p-7 sm:p-10 shadow-sm transition-all duration-300"
    >
      {/* Mode Indicator Banner */}
      <div className="border-l-2 border-[#5E1914] bg-[#F3EFE6] px-4 py-3 text-xs leading-relaxed text-[#57534E]">
        {isDirectBoxOrder ? (
          <p>
            <strong className="font-semibold text-[#1C1917] uppercase">
              Fixed-Price Graze Box Order Request:
            </strong>{" "}
            Select your signature box below. Our team will confirm your requested date and coordinate payment & pickup/delivery details directly (online Square checkout coming soon).
          </p>
        ) : (
          <p>
            <strong className="font-semibold text-[#1C1917] uppercase">
              Custom Event & Catering Quote:
            </strong>{" "}
            Share your event date, location in Toronto/GTA, and estimated headcount for a tailored proposal.
          </p>
        )}
      </div>

      {submissionError && (
        <div
          role="alert"
          className="rounded-md flex items-start gap-3 border border-red-800/30 bg-red-950/5 p-4 text-xs text-red-900"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{submissionError}</span>
        </div>
      )}

      {/* Inquiry Type Selection */}
      <div>
        <label
          htmlFor="inquiryType"
          className="block text-xs font-semibold tracking-[0.16em] text-[#1C1917] uppercase"
        >
          Service or Request Type *
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value as InquiryType)}
          className="rounded-md mt-2 w-full border border-[#1C1917]/20 bg-[#FAF7F2] px-4 py-3.5 text-sm text-[#1C1917] transition-all duration-200 ease-out focus:border-[#5E1914] focus:ring-1 focus:ring-[#5E1914]/30 focus:outline-none"
        >
          {Object.entries(INQUIRY_TYPE_LABELS).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </div>

      {/* Conditional Product Selector when Graze Box Order is active */}
      {isDirectBoxOrder && (
        <div>
          <label
            htmlFor="selectedProductSlug"
            className="block text-xs font-semibold tracking-[0.16em] text-[#1C1917] uppercase"
          >
            Select Signature Graze Box *
          </label>
          <select
            id="selectedProductSlug"
            name="selectedProductSlug"
            value={selectedProductSlug}
            onChange={(e) => setSelectedProductSlug(e.target.value)}
            aria-invalid={Boolean(errors.selectedProductSlug)}
            aria-describedby={
              errors.selectedProductSlug ? "error-selectedProductSlug" : undefined
            }
            className="rounded-md mt-2 w-full border border-[#1C1917]/20 bg-[#FAF7F2] px-4 py-3.5 text-sm text-[#1C1917] transition-all duration-200 ease-out focus:border-[#5E1914] focus:ring-1 focus:ring-[#5E1914]/30 focus:outline-none"
          >
            <option value="">— Choose a Graze Box —</option>
            {products.map((prod) => (
              <option key={prod.id} value={prod.slug}>
                {prod.name} — ${prod.priceCAD} {prod.currency}
              </option>
            ))}
          </select>
          {errors.selectedProductSlug && (
            <p
              id="error-selectedProductSlug"
              className="mt-1.5 text-xs font-medium text-[#5E1914]"
            >
              {errors.selectedProductSlug}
            </p>
          )}
        </div>
      )}

      {/* Client Contact Details */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold tracking-[0.16em] text-[#1C1917] uppercase"
          >
            Full Name *
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "error-fullName" : undefined}
            placeholder="Your name or company contact"
            className="rounded-md mt-2 w-full border border-[#1C1917]/20 bg-[#FAF7F2] px-4 py-3 text-sm text-[#1C1917] placeholder:text-[#57534E]/60 transition-all duration-200 ease-out focus:border-[#5E1914] focus:ring-1 focus:ring-[#5E1914]/30 focus:outline-none"
          />
          {errors.fullName && (
            <p id="error-fullName" className="mt-1.5 text-xs font-medium text-[#5E1914]">
              {errors.fullName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-semibold tracking-[0.16em] text-[#1C1917] uppercase"
          >
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "error-phone" : undefined}
            placeholder="+1 (647) 000-0000"
            className="rounded-md mt-2 w-full border border-[#1C1917]/20 bg-[#FAF7F2] px-4 py-3 text-sm text-[#1C1917] placeholder:text-[#57534E]/60 transition-all duration-200 ease-out focus:border-[#5E1914] focus:ring-1 focus:ring-[#5E1914]/30 focus:outline-none"
          />
          {errors.phone && (
            <p id="error-phone" className="mt-1.5 text-xs font-medium text-[#5E1914]">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-semibold tracking-[0.16em] text-[#1C1917] uppercase"
        >
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "error-email" : undefined}
          placeholder="you@example.com"
          className="rounded-md mt-2 w-full border border-[#1C1917]/20 bg-[#FAF7F2] px-4 py-3 text-sm text-[#1C1917] placeholder:text-[#57534E]/60 transition-all duration-200 ease-out focus:border-[#5E1914] focus:ring-1 focus:ring-[#5E1914]/30 focus:outline-none"
        />
        {errors.email && (
          <p id="error-email" className="mt-1.5 text-xs font-medium text-[#5E1914]">
            {errors.email}
          </p>
        )}
      </div>

      {/* Date & Quantity / Guest Count */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="eventDate"
            className="block text-xs font-semibold tracking-[0.16em] text-[#1C1917] uppercase"
          >
            Preferred Date (Optional)
          </label>
          <input
            id="eventDate"
            name="eventDate"
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            className="rounded-md mt-2 w-full border border-[#1C1917]/20 bg-[#FAF7F2] px-4 py-3 text-sm text-[#1C1917] focus:border-[#5E1914] focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="quantityOrGuestCount"
            className="block text-xs font-semibold tracking-[0.16em] text-[#1C1917] uppercase"
          >
            {isDirectBoxOrder
              ? "Number of Boxes (Optional)"
              : "Estimated Guest Count (Optional)"}
          </label>
          <input
            id="quantityOrGuestCount"
            name="quantityOrGuestCount"
            type="text"
            value={quantityOrGuestCount}
            onChange={(e) => setQuantityOrGuestCount(e.target.value)}
            placeholder={isDirectBoxOrder ? "e.g., 2 boxes" : "e.g., 40 guests"}
            className="rounded-md mt-2 w-full border border-[#1C1917]/20 bg-[#FAF7F2] px-4 py-3 text-sm text-[#1C1917] placeholder:text-[#57534E]/60 transition-all duration-200 ease-out focus:border-[#5E1914] focus:ring-1 focus:ring-[#5E1914]/30 focus:outline-none"
          />
        </div>
      </div>

      {/* Event Context */}
      <div>
        <label
          htmlFor="eventDetails"
          className="block text-xs font-semibold tracking-[0.16em] text-[#1C1917] uppercase"
        >
          Location in Toronto / GTA or Event Type (Optional)
        </label>
        <input
          id="eventDetails"
          name="eventDetails"
          type="text"
          value={eventDetails}
          onChange={(e) => setEventDetails(e.target.value)}
          placeholder="e.g., Downtown Toronto office, North York residence, outdoor venue"
          className="rounded-md mt-2 w-full border border-[#1C1917]/20 bg-[#FAF7F2] px-4 py-3 text-sm text-[#1C1917] placeholder:text-[#57534E]/60 transition-all duration-200 ease-out focus:border-[#5E1914] focus:ring-1 focus:ring-[#5E1914]/30 focus:outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs font-semibold tracking-[0.16em] text-[#1C1917] uppercase"
        >
          Order Notes or Event Details *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "error-message" : undefined}
          placeholder="Tell us about your Graze Box request, dietary notes, or the style of catering you are planning..."
          className="rounded-md mt-2 w-full border border-[#1C1917]/20 bg-[#FAF7F2] px-4 py-3 text-sm text-[#1C1917] placeholder:text-[#57534E]/60 transition-all duration-200 ease-out focus:border-[#5E1914] focus:ring-1 focus:ring-[#5E1914]/30 focus:outline-none"
        />
        {errors.message && (
          <p id="error-message" className="mt-1.5 text-xs font-medium text-[#5E1914]">
            {errors.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-md inline-flex w-full items-center justify-center gap-3 bg-[#5E1914] px-8 py-4 text-xs font-semibold tracking-[0.18em] text-[#FAF7F2] uppercase transition-all duration-200 hover:bg-[#1C1917] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Preparing Request...</span>
            </>
          ) : (
            <span>
              {isDirectBoxOrder ? "Prepare Graze Box Request" : "Prepare Quote Inquiry"}
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
