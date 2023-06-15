import { getCurrentUser } from "@/app/actions/getCurretUser";
import getReservations from "../actions/getReservations";
import EmptyState from "../components/EmptyState";
import ReservationsClient from "./ReservationsClient";

export default async function ReservationPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({ authorId: currentUser.id });

  if (reservations.length === 0) {
    return (
      <EmptyState title="No reservations found" subtitle="Please make one" />
    );
  }

  return (
    <ReservationsClient reservations={reservations} currentUser={currentUser} />
  );
}
