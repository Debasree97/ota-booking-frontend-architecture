/**
 * Booking Page
 * Entry point for the booking flow for a selected flight
 */

// Page implementation will be added here

export default function BookingPage({
  params,
}: {
  params: { flightId: string };
}) {
  return <div>Booking Page - Flight ID: {params.flightId}</div>;
}
