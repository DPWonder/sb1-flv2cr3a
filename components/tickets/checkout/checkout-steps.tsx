"use client";

import { useState } from "react";
import { PersonalInfoForm } from "../forms/personal-info-form";
import { TicketOptionsForm } from "../forms/ticket-options-form";
import { PriceSummary } from "./price-summary";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface CheckoutStepsProps {
  formData: any;
  onChange: (field: string, value: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  basePrice: number;
}

export function CheckoutSteps({ formData, onChange, onSubmit, isSubmitting, basePrice }: CheckoutStepsProps) {
  const [step, setStep] = useState(1);
  const totalSteps = 2;

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      onSubmit();
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Progress value={(step / totalSteps) * 100} className="h-2" />
        <p className="text-sm text-gray-400 text-center">
          Step {step} of {totalSteps}
        </p>
      </div>

      {step === 1 && (
        <PersonalInfoForm 
          formData={formData} 
          onChange={onChange}
        />
      )}

      {step === 2 && (
        <>
          <TicketOptionsForm 
            formData={formData} 
            onChange={onChange}
          />
          <div className="pt-4 border-t border-gray-800">
            <PriceSummary
              basePrice={basePrice}
              quantity={formData.quantity}
              discountType={formData.type}
              promoDiscount={0} // You can calculate this based on promo code
            />
          </div>
        </>
      )}

      <div className="flex gap-4">
        {step > 1 && (
          <Button 
            type="button" 
            variant="outline" 
            onClick={prevStep}
            className="flex-1"
          >
            Back
          </Button>
        )}
        <Button 
          type="button" 
          onClick={nextStep}
          disabled={isSubmitting}
          className="flex-1"
        >
          {step === totalSteps ? (isSubmitting ? "Processing..." : "Complete Purchase") : "Next"}
        </Button>
      </div>
    </div>
  );
}