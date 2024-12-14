import { CalendarDays, Clock, Users } from "lucide-react";

export function WebinarInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="mb-4 text-4xl font-bold">
          Turn $200k Into $1M with Section 8 Real Estate
        </h1>
        <p className="text-xl text-muted-foreground">
          Join our free webinar and discover Otto's proven system for building wealth
          through Section 8 real estate investing.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">What You'll Learn:</h2>
        <ul className="space-y-3">
          <li className="flex items-start space-x-2">
            <span className="mt-1 text-primary">•</span>
            <span>How to identify profitable Section 8 properties</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="mt-1 text-primary">•</span>
            <span>Strategies for maximizing government-backed rental income</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="mt-1 text-primary">•</span>
            <span>Tips for managing and scaling your Section 8 portfolio</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="mt-1 text-primary">•</span>
            <span>Common mistakes to avoid in Section 8 investing</span>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Webinar Details:</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>Duration: 90 minutes</span>
          </div>
          <div className="flex items-center space-x-2">
            <CalendarDays className="h-5 w-5 text-primary" />
            <span>Available dates selected at registration</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-primary" />
            <span>Limited spots available</span>
          </div>
        </div>
      </div>
    </div>
  );
}