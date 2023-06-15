import { getCurrentUser } from "../actions/getCurretUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import EmptyState from "../components/EmptyState";
import FavoritesClient from "./FavoritesClient";

export default async function ListingPage() {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState title="No favorites found" subtitle="Please make one" />;
  }

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
}
