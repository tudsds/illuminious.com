import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import { Loader2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminLogin() {
  const { user, loading, isAuthenticated } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!loading && isAuthenticated && user?.role === "admin") {
      setLocation("/admin");
    }
  }, [loading, isAuthenticated, user, setLocation]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-illuminious-light">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-illuminious-blue mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (isAuthenticated && user?.role !== "admin") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-illuminious-light">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
            <Lock className="w-8 h-8 text-red-500" />
          </div>
          <h1 className="text-2xl font-bold text-illuminious-navy mb-4">
            Access Denied
          </h1>
          <p className="text-muted-foreground mb-6">
            You don't have permission to access the admin area. Please contact an
            administrator if you believe this is an error.
          </p>
          <Button
            onClick={() => setLocation("/")}
            className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full"
          >
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-illuminious-navy to-illuminious-blue">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4">
        <div className="text-center mb-8">
          <img
            src="/images/illuminious-logo-icon.png"
            alt="Illuminious"
            className="w-16 h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-illuminious-navy mb-2">
            Admin Portal
          </h1>
          <p className="text-muted-foreground">
            Sign in to access the content management system
          </p>
        </div>

        <Button
          asChild
          className="w-full bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full"
        >
          <a href={getLoginUrl()}>
            <Lock className="w-4 h-4 mr-2" />
            Sign in with Manus
          </a>
        </Button>

        <p className="text-xs text-center text-muted-foreground mt-6">
          This is a restricted area. Unauthorized access is prohibited.
        </p>
      </div>
    </div>
  );
}
