import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <>
      <Navigation />
      <PageHeader
        title="Thank You!"
        description="Your ticket purchase was successful"
      />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            <CheckCircle2 className="w-24 h-24 text-green-500" />
          </div>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Payment Confirmed</h2>
            <p className="text-gray-400">
              We've sent your tickets and receipt to your email address.
              Please check your inbox (and spam folder) for the confirmation.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">What's Next?</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Save your QR code for check-in</li>
              <li>Review the conference schedule</li>
              <li>Join our community channels</li>
            </ul>
          </div>

          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/agenda">View Schedule</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}