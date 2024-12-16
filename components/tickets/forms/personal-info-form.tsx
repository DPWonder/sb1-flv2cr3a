"use client";

import { Input } from "@/components/ui/input";
import { FormField } from "./form-field";

interface PersonalInfoFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    socialProfile: string;
  };
  onChange: (field: string, value: string) => void;
}

export function PersonalInfoForm({ formData, onChange }: PersonalInfoFormProps) {
  return (
    <div className="space-y-4">
      <FormField label="Name" required>
        <Input
          value={formData.name}
          onChange={(e) => onChange("name", e.target.value)}
          required
          className="bg-black/50"
        />
      </FormField>

      <FormField label="Email" required>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => onChange("email", e.target.value)}
          required
          className="bg-black/50"
        />
      </FormField>

      <FormField label="Phone (Optional)">
        <Input
          type="tel"
          value={formData.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className="bg-black/50"
        />
      </FormField>

      <FormField label="LinkedIn/GitHub Profile">
        <Input
          value={formData.socialProfile}
          onChange={(e) => onChange("socialProfile", e.target.value)}
          placeholder="https://"
          className="bg-black/50"
        />
      </FormField>
    </div>
  );
}