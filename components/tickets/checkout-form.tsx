"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { TicketType } from "@/types/ticket";
import { formatCurrency } from "@/lib/utils";

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
    type: "regular" // regular, developer, startup
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const calculatePrice = () => {
    let price = ticket.price;
    if (formData.type === "developer") {
      price *= 0.8; // 20% discount for developers
    } else if (formData.type === "startup") {
      price *= 0.7; // 30% discount for startups
    }
    return price * formData.quantity;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSubmit({
        ...formData,
        ticketId: ticket.id,
        finalPrice: calculatePrice()
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
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Name</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-black/50"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-black/50"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Phone (Optional)</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-black/50"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">LinkedIn/GitHub Profile</label>
              <Input
                value={formData.socialProfile}
                onChange={(e) => setFormData({ ...formData, socialProfile: e.target.value })}
                placeholder="https://"
                className="bg-black/50"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Attendee Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full bg-black/50 border border-gray-800 rounded-md p-2"
              >
                <option value="regular">Regular Attendee</option>
                <option value="developer">Developer (20% off)</option>
                <option value="startup">Startup/Entrepreneur (30% off)</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-1 block">Promo Code</label>
              <Input
                value={formData.promoCode}
                onChange={(e) => setFormData({ ...formData, promoCode: e.target.value })}
                className="bg-black/50"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800">
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-bold">{formatCurrency(calculatePrice())}</span>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Proceed to Payment"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}