import { getCurrentUser } from "@/features/auth/service";

export default async function DashboardPage() {
  const { profile, user } = await getCurrentUser();

  return (
    <div>
      <h1 className="text-2xl font-semibold">
        Welcome, {profile?.full_name ?? user?.email}
      </h1>
      <p className="text-muted-foreground mt-2">
        Role: {profile?.role ?? "tenant"}
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card ring-foreground/10 rounded-xl p-6 ring-1">
          <h2 className="font-medium">Properties</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Manage your property listings
          </p>
        </div>
        <div className="bg-card ring-foreground/10 rounded-xl p-6 ring-1">
          <h2 className="font-medium">Messages</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            View your conversations
          </p>
        </div>
        <div className="bg-card ring-foreground/10 rounded-xl p-6 ring-1">
          <h2 className="font-medium">Settings</h2>
          <p className="text-muted-foreground mt-1 text-sm">
            Update your profile and preferences
          </p>
        </div>
      </div>
    </div>
  );
}
