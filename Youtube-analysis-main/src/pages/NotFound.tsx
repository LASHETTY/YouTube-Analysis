
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-analytics-background text-analytics-foreground">
      <div className="text-center space-y-6 max-w-md px-4">
        <div className="flex justify-center">
          <Video className="h-20 w-20 text-analytics-purple" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">404</h1>
        <p className="text-xl text-muted-foreground">This content isn't available</p>
        <p className="text-muted-foreground">
          The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild className="bg-analytics-blue hover:bg-analytics-blue/90">
          <a href="/">Return to Dashboard</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
