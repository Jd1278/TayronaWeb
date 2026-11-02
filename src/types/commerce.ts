/**
 * Future Commerce, Checkout, Square Payment & Operations Domain Blueprint
 * -----------------------------------------------------------------------
 * Prepared in Release 01 so that Release 02+ (Persistent Cart, Square Checkout,
 * Delivery Zone Validation, Event Scheduling & Admin) can plug directly into
 * existing Product, Service, and QuoteRequest flows without refactoring UI components.
 */

export type InquiryType =
  | "graze_box_order"
  | "corporate_catering"
  | "private_catering"
  | "grazing_table"
  | "food_truck_booking"
  | "general_inquiry";

export interface QuoteRequestPayload {
  fullName: string;
  email: string;
  phone: string;
  inquiryType: InquiryType;
  selectedProductSlug?: string;
  selectedServiceSlug?: string;
  eventDate?: string;
  quantityOrGuestCount?: string;
  eventDetails?: string;
  message: string;
}

export interface QuoteSubmissionResult {
  status: "ready_for_dispatch" | "submitted" | "error";
  referenceCode: string;
  timestampIso: string;
  mailtoUrl: string;
  summaryText: string;
  errorMessage?: string;
}

/**
 * Future E-Commerce & Square Integration Entities (Prepared, Not Active in Release 01)
 */
export interface ProductOption {
  id: string;
  productId: string;
  name: string;
  values: { label: string; priceDeltaCAD: number }[];
  required: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  productSlug: string;
  name: string;
  unitPriceCAD: number;
  quantity: number;
  selectedOptions?: Record<string, string>;
  notes?: string;
}

export interface Cart {
  id: string;
  items: CartItem[];
  subtotalCAD: number;
  currency: "CAD";
  updatedAtIso: string;
}

export interface Customer {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  companyName?: string;
}

export interface DeliveryZone {
  id: string;
  name: string;
  postalCodePrefixes: string[];
  deliveryFeeCAD: number;
  minimumOrderCAD?: number;
}

export interface TimeSlot {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface Availability {
  date: string;
  isBlocked: boolean;
  availableSlots: TimeSlot[];
}

export interface DeliveryInfo {
  method: "delivery" | "pickup";
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  province: "ON";
  postalCode?: string;
  deliveryZoneId?: string;
  scheduledDate: string;
  timeSlotId?: string;
  deliveryInstructions?: string;
}

export interface TaxPolicy {
  region: "ON-CA";
  hstRate: number; // e.g. 0.13 in Ontario when configured
}

export interface Discount {
  code: string;
  type: "percentage" | "fixed_cad";
  value: number;
}

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  unitPriceCAD: number;
  totalPriceCAD: number;
}

export interface PaymentAttempt {
  id: string;
  provider: "square";
  squarePaymentId?: string;
  amountCAD: number;
  status: "pending" | "authorized" | "completed" | "failed";
  createdAtIso: string;
}

export interface Payment {
  id: string;
  orderId: string;
  provider: "square";
  status: "unpaid" | "paid" | "refunded";
  totalChargedCAD: number;
  attempts: PaymentAttempt[];
}

export interface Order {
  id: string;
  orderNumber: string;
  customer: Customer;
  items: OrderItem[];
  delivery: DeliveryInfo;
  subtotalCAD: number;
  taxCAD: number;
  deliveryFeeCAD: number;
  discountCAD: number;
  totalCAD: number;
  payment?: Payment;
  status: "draft" | "pending_payment" | "confirmed" | "in_preparation" | "completed" | "cancelled";
  createdAtIso: string;
}

export interface EventBooking {
  id: string;
  quoteRequestId: string;
  customer: Customer;
  serviceType: "corporate_catering" | "private_catering" | "grazing_table" | "food_truck";
  eventDate: string;
  location: string;
  status: "inquiry" | "quoted" | "accepted" | "declined" | "completed";
}
