import { SITE_CONFIG } from "@/content/site";
import { getProductBySlug } from "@/content";
import type {
  InquiryType,
  QuoteRequestPayload,
  QuoteSubmissionResult,
} from "@/types/commerce";

export const INQUIRY_TYPE_LABELS: Record<InquiryType, string> = {
  graze_box_order: "Graze Box Order Request (Fixed-Price CAD)",
  corporate_catering: "Corporate Catering & Office Lunches (Custom Quote)",
  private_catering: "Private Event Catering & Buffets (Custom Quote)",
  grazing_table: "Bespoke Grazing Table Installation (Custom Quote)",
  food_truck_booking: "Food Truck on Wheels Charter (Custom Quote)",
  general_inquiry: "General Hospitality Inquiry",
};

export interface ValidationErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  selectedProductSlug?: string;
  message?: string;
}

export function validateQuotePayload(payload: QuoteRequestPayload): ValidationErrors {
  const errors: ValidationErrors = {};

  if (!payload.fullName || payload.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!payload.email || !emailRegex.test(payload.email.trim())) {
    errors.email = "Please provide a valid email address.";
  }

  const cleanedPhone = payload.phone.replace(/[^\d+]/g, "");
  if (!cleanedPhone || cleanedPhone.length < 7) {
    errors.phone = "Please provide a phone number where our team can reach you.";
  }

  if (
    payload.inquiryType === "graze_box_order" &&
    (!payload.selectedProductSlug || !payload.selectedProductSlug.trim())
  ) {
    errors.selectedProductSlug = "Please select which Graze Box you would like to request.";
  }

  if (!payload.message || payload.message.trim().length < 8) {
    errors.message =
      "Please share a few details about your order request, preferred date, or event.";
  }

  return errors;
}

/**
 * Clean submission adapter for Release 01.
 * Since no external backend database or transactional mail service is configured yet,
 * this adapter validates and structures the request into a verified dispatch payload
 * (ready for direct email transmission to tayronacatering@gmail.com or future API webhook).
 */
export async function prepareQuoteSubmission(
  payload: QuoteRequestPayload
): Promise<QuoteSubmissionResult> {
  // Brief intentional async transition for UI state feedback
  await new Promise((resolve) => setTimeout(resolve, 450));

  const timestampIso = new Date().toISOString();
  const suffix = Math.floor(1000 + Math.random() * 9000);
  const referenceCode = `TAY-${suffix}`;

  const selectedProduct = payload.selectedProductSlug
    ? getProductBySlug(payload.selectedProductSlug)
    : undefined;

  const lines: string[] = [
    `TAYRONA CATERING — REQUEST SUMMARY (${referenceCode})`,
    `--------------------------------------------------`,
    `Request Type: ${INQUIRY_TYPE_LABELS[payload.inquiryType]}`,
    `Client Name: ${payload.fullName.trim()}`,
    `Email: ${payload.email.trim()}`,
    `Phone: ${payload.phone.trim()}`,
  ];

  if (selectedProduct) {
    lines.push(
      `Selected Graze Box: ${selectedProduct.name} ($${selectedProduct.priceCAD} ${selectedProduct.currency})`
    );
  }

  if (payload.eventDate) {
    lines.push(`Preferred Date: ${payload.eventDate}`);
  }

  if (payload.quantityOrGuestCount) {
    lines.push(`Quantity / Estimated Guests: ${payload.quantityOrGuestCount}`);
  }

  if (payload.eventDetails) {
    lines.push(`Event Location / Context (Toronto/GTA): ${payload.eventDetails.trim()}`);
  }

  lines.push(
    ``,
    `Notes & Details:`,
    payload.message.trim(),
    ``,
    `--------------------------------------------------`,
    `Submitted via Tayrona Catering Web Foundation`
  );

  const summaryText = lines.join("\n");
  const subject = encodeURIComponent(
    `[${referenceCode}] Tayrona Catering — ${INQUIRY_TYPE_LABELS[payload.inquiryType]} (${payload.fullName.trim()})`
  );
  const body = encodeURIComponent(summaryText);
  const mailtoUrl = `mailto:${SITE_CONFIG.contact.email}?subject=${subject}&body=${body}`;

  return {
    status: "ready_for_dispatch",
    referenceCode,
    timestampIso,
    mailtoUrl,
    summaryText,
  };
}
