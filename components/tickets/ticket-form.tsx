"use client";

import { useState } from "react";
import { TicketType, TicketPurchase } from "@/types/ticket";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

interface TicketFormProps {
  ticket: TicketType;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (purchase: TicketPurchase) => void;
}

export function TicketForm({ ticket, isOpen, onClose, onSubmit }: TicketFormProps) {
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    company: "",
    dietaryRestrictions: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ticketId: ticket.id,
      quantity,
      ...formData
    });
  };

  const totalPrice = quantity * (
    ticket.earlyBirdDiscount 
      ? ticket.price - ticket.earlyBirdDiscount 
      : ticket.price
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-black/90 border-gray-800">
        <DialogHeader>
          <DialogTitle>Purchase {ticket.name}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {ticket.groupSize ? (
              <div className="space-y-2">
                <Label htmlFor="quantity">Number of Team Members</Label>
                <Input
                  id="quantity"
                  type="number"
                  min={ticket.groupSize}
                  max={ticket.maxQuantity}
                  step={ticket.groupSize}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="bg-black/50"
                />
                <p className="text-sm text-gray-400">
                  Minimum {ticket.groupSize} members required
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  min={1}
                  max={ticket.maxQuantity}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="bg-black/50"
                />
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-black/50"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-black/50"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company (Optional)</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-black/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="dietary">Dietary Restrictions (Optional)</Label>
              <Input
                id="dietary"
                value={formData.dietaryRestrictions}
                onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                className="bg-black/50"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800">
            <div className="flex justify-between mb-4">
              <span>Total</span>
              <span className="font-bold">{formatCurrency(totalPrice)}</span>
            </div>
            <Button type="submit" className="w-full">
              Proceed to Payment
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}