import { getCurrentUser } from "@/app/actions/getCurretUser";
import getReservations from "@/app/actions/getReservations";
import EmptyState from "@/components/EmptyState";
import TripsClient from "./TripsClient";

export default async function TripsPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const reservations = await getReservations({ userId: currentUser.id });

  if (!reservations) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you have not reserved any trips yet"
      />
    );
  }

  return <TripsClient reservations={reservations} currentUser={currentUser} />;
}
