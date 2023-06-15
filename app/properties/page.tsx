import { getCurrentUser } from "@/app/actions/getCurretUser";
import EmptyState from "@/components/EmptyState";
import PropertiesClient from "./PropertiesClient";
import getListings from "../actions/getListings";

export default async function PropertiesPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const listings = await getListings({ userId: currentUser.id });

  if (!listings) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you have no properties"
      />
    );
  }

  return <PropertiesClient listings={listings} currentUser={currentUser} />;
}
