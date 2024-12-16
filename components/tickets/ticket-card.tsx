"use client";

import { TicketType } from "@/types/ticket";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Ticket } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface TicketCardProps {
  ticket: TicketType;
  onSelect: (ticketId: string) => void;
}

export function TicketCard({ ticket, onSelect }: TicketCardProps) {
  const isEarlyBird = ticket.earlyBirdDiscount && ticket.earlyBirdDiscount > 0;
  const finalPrice = isEarlyBird ? ticket.price - ticket.earlyBirdDiscount : ticket.price;

  return (
    <Card className="bg-black/50 border-gray-800 relative overflow-hidden">
      {isEarlyBird && (
        <div className="absolute top-4 right-4">
          <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
            Early Bird
          </span>
        </div>
      )}

      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Ticket className="w-5 h-5 text-blue-500" />
          <h3 className="text-xl font-bold">{ticket.name}</h3>
        </div>
        <div className="space-y-2">
          <p className="text-3xl font-bold">
            {formatCurrency(finalPrice)}
            {ticket.groupSize && <span className="text-sm text-gray-400">/person</span>}
          </p>
          {isEarlyBird && (
            <p className="text-sm text-gray-400">
              <span className="line-through">{formatCurrency(ticket.price)}</span>
              {" "}Save {formatCurrency(ticket.earlyBirdDiscount)}
            </p>
          )}
        </div>
        <p className="text-sm text-gray-400 mt-2">{ticket.description}</p>
      </CardHeader>

      <CardContent>
        <ul className="space-y-3">
          {ticket.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-blue-500 mt-1" />
              <span className="text-sm text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button 
          className="w-full" 
          onClick={() => onSelect(ticket.id)}
          disabled={!ticket.available}
        >
          {ticket.available ? 'Select Tickets' : 'Sold Out'}
        </Button>
      </CardFooter>
    </Card>
  );
}