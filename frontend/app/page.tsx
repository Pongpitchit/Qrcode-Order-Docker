"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UtensilsCrossed } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page immediately
    router.push("/login");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center animate-pulse">
            <UtensilsCrossed className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-muted-foreground">
          Redirecting to Login...
        </h1>
        <p className="text-sm text-muted-foreground">
          Please wait while we redirect you to the login page.
        </p>
      </div>
    </div>
  );
}
