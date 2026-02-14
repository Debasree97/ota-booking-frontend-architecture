/**
 * Shared TypeScript Types
 * Common type definitions used across multiple features
 */

export interface Flight {
  id: string;
  airline: string;
  origin: string;
  destination: string;
  discountedPrice: number;
  prevPrice: number;
  coupon: string;
  duration: string;
  departureTime: string;
  arrivalTime: string;
}

// search page
export interface SearchFormData {
  from: string;
  to: string;
  date: string;
  fareType: "regular" | "student";
}
