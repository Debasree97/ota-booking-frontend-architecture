/**
 * Shared TypeScript Types
 * Common type definitions used across multiple features
 */

export interface Flight {
  id: string;
  airline: string;
  price: number;
  duration: string;
  departureTime: string;
}

// search page
export interface SearchFormData {
  from: string;
  to: string;
  date: string;
  fareType: "regular" | "student";
}
