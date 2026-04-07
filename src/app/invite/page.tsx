import InvitationClient from "../invitation-client";

type SearchParams = {
  guest?: string | string[];
};

export default async function InvitePage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await searchParams;
  const rawGuest = resolvedSearchParams.guest;
  const guestName = Array.isArray(rawGuest) ? rawGuest[0] : rawGuest;

  return <InvitationClient initialGuestName={guestName ?? ""} />;
}
