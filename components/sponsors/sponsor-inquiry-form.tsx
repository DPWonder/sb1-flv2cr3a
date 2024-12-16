"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SponsorTier } from "@/types/sponsor";

interface SponsorInquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTier?: SponsorTier;
}

export function SponsorInquiryForm({ isOpen, onClose, defaultTier }: SponsorInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
    preferredTier: defaultTier || "Platinum",
    timeline: "Immediate",
    additionalComments: "" // New field for additional comments
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would integrate with your email service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Inquiry Sent Successfully",
        description: "Our sponsorship team will contact you within 24 hours.",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again.",
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
          <DialogTitle>Sponsorship Inquiry</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Previous form fields remain the same */}
          
          {/* New Additional Comments field */}
          <div>
            <label className="text-sm font-medium mb-1 block">Additional Comments or Questions</label>
            <Textarea
              value={formData.additionalComments}
              onChange={(e) => setFormData({ ...formData, additionalComments: e.target.value })}
              className="bg-black/50"
              rows={4}
              placeholder="Any specific questions or additional information you'd like to share?"
            />
          </div>

          <div className="text-sm text-gray-400">
            <p>For immediate assistance, contact us at sponsorships@agentsummit.io</p>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}