"use client";

import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/layout/footer";
import { PageHeader } from "@/components/layout/page-header";
import { TicketCard } from "@/components/tickets/ticket-card";
import { TicketForm } from "@/components/tickets/ticket-form";
import { tickets } from "@/data/tickets";
import { TicketPurchase } from "@/types/ticket";
import { useCheckout } from "@/hooks/use-checkout";
import { useToast } from "@/components/ui/use-toast";

export default function TicketsPage() {
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const { handleCheckout, isLoading, error } = useCheckout();
  const { toast } = useToast();

  const selectedTicket = tickets.find(ticket => ticket.id === selectedTicketId);

  const handleTicketSelect = (ticketId: string) => {
    setSelectedTicketId(ticketId);
  };

  const handlePurchaseSubmit = async (purchase: TicketPurchase) => {
    try {
      await handleCheckout(purchase);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to process payment. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Navigation />
      <PageHeader
        title="Get Your Tickets"
        description="Join us at the premier conference for AI agents and autonomous systems"
      />
      
      <main className="container mx-auto px-4 py-16">
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
      </main>
      
      <Footer />
    </>
  );
}