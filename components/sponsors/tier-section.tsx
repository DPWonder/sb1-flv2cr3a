"use client";

import { useState } from "react";
import { SponsorTierInfo } from "@/types/sponsor";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { SponsorInquiryForm } from "./sponsor-inquiry-form";

interface TierSectionProps {
  tierInfo: SponsorTierInfo;
}

export function TierSection({ tierInfo }: TierSectionProps) {
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  return (
    <>
      <Card className="bg-black/50 border-gray-800 hover:border-blue-500/50 transition-colors">
        <CardHeader className="text-center">
          <h3 className="text-2xl font-bold">{tierInfo.tier}</h3>
          <p className="text-sm text-gray-400 mt-2">{tierInfo.description}</p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 mb-6">
            {tierInfo.perks.map((perk, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-300">{perk}</span>
              </li>
            ))}
          </ul>

          <Button 
            className="w-full"
            onClick={() => setShowInquiryForm(true)}
          >
            Contact Us
          </Button>
        </CardContent>
      </Card>

      <SponsorInquiryForm
        isOpen={showInquiryForm}
        onClose={() => setShowInquiryForm(false)}
        tier={tierInfo.tier}
      />
    </>
  );
}