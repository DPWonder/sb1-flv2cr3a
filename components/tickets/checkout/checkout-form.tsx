"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { TicketType } from "@/types/ticket";
import { PersonalInfoForm } from "../forms/personal-info-form";
import { TicketOptionsForm } from "../forms/ticket-options-form";
import { PriceSummary } from "./price-summary";

interface CheckoutFormProps {
  ticket: TicketType;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => Promise<void>;
}

export function CheckoutForm({ ticket, isOpen, onClose, onSubmit }: CheckoutFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    socialProfile: "",
    promoCode: "",
    quantity: 1,
    type: "regular"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSubmit({
        ...formData,
        ticketId: ticket.id
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-black/90 border-gray-800">
        <DialogHeader>
          <DialogTitle>{ticket.name}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <PersonalInfoForm 
            formData={formData} 
            onChange={handleFieldChange} 
          />
          
          <TicketOptionsForm 
            formData={formData} 
            onChange={handleFieldChange} 
          />

          <div className="pt-4 border-t border-gray-800">
            <PriceSummary
              basePrice={ticket.price}
              quantity={formData.quantity}
              discountType={formData.type}
            />
            
            <Button 
              type="submit" 
              className="w-full mt-4" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Proceed to Payment"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}