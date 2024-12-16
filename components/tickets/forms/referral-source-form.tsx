"use client";

import { FormField } from "./form-field";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ReferralSourceFormProps {
  value: string;
  onChange: (value: string) => void;
}

export function ReferralSourceForm({ value, onChange }: ReferralSourceFormProps) {
  return (
    <FormField label="How did you hear about us?">
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="bg-black/50">
          <SelectValue placeholder="Select source" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="social">Social Media</SelectItem>
          <SelectItem value="email">Email Campaign</SelectItem>
          <SelectItem value="referral">Colleague/Referral</SelectItem>
          <SelectItem value="search">Search Engine</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
    </FormField>
  );
}