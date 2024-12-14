import { WebinarSignup } from "@/components/webinar/webinar-signup";
import { WebinarInfo } from "@/components/webinar/webinar-info";
import { WebinarBenefits } from "@/components/webinar/webinar-benefits";

export default function WebinarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-16">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2">
            <WebinarInfo />
            <WebinarSignup />
          </div>
          <WebinarBenefits />
        </div>
      </div>
    </div>
  );
}