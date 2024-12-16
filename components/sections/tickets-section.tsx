"use client";

import { useState } from "react";
import { TicketCard } from "@/components/tickets/ticket-card";
import { TicketForm } from "@/components/tickets/ticket-form";
import { tickets } from "@/data/tickets";
import { TicketPurchase } from "@/types/ticket";
import { useCheckout } from "@/hooks/use-checkout";
import { useToast } from "@/components/ui/use-toast";

export function TicketsSection() {
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const { handleCheckout, isLoading } = useCheckout();
  const { toast } = useToast();

  const selectedTicket = tickets.find(ticket => ticket.id === selectedTicketId);

  const handleTicketSelect = (ticketId: string) => {
    setSelectedTicketId(ticketId);
  };

  const handlePurchaseSubmit = async (purchase: TicketPurchase) => {
    try {
      await handleCheckout(purchase);
      toast({
        title: "Processing payment",
        description: "You will be redirected to the payment page.",
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to process payment. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="tickets" className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Tickets</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Join us at the premier conference for AI agents and autonomous systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            onSelect={handleTicketSelect}
          />
        ))}
      </div>

      {selectedTicket && (
        <TicketForm
          ticket={selectedTicket}
          isOpen={!!selectedTicketId}
          onClose={() => setSelectedTicketId(null)}
          onSubmit={handlePurchaseSubmit}
        />
      )}
    </section>
  );
}