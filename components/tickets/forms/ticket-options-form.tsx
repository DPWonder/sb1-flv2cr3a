"use client";

import { FormField } from "./form-field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

interface TicketOptionsFormProps {
  formData: {
    type: string;
    promoCode: string;
  };
  onChange: (field: string, value: string) => void;
}

export function TicketOptionsForm({ formData, onChange }: TicketOptionsFormProps) {
  return (
    <div className="space-y-4">
      <FormField label="Attendee Type">
        <Select
          value={formData.type}
          onValueChange={(value) => onChange("type", value)}
        >
          <SelectTrigger className="bg-black/50">
            <SelectValue placeholder="Select attendee type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="regular">Regular Attendee</SelectItem>
            <SelectItem value="developer">Developer (20% off)</SelectItem>
            <SelectItem value="startup">Startup/Entrepreneur (30% off)</SelectItem>
          </SelectContent>
        </Select>
      </FormField>

      <FormField label="Promo Code">
        <Input
          value={formData.promoCode}
          onChange={(e) => onChange("promoCode", e.target.value)}
          className="bg-black/50"
          placeholder="Enter promo code"
        />
      </FormField>
    </div>
  );
}