import { formatCurrency } from "@/lib/utils";

interface PriceSummaryProps {
  basePrice: number;
  quantity: number;
  discountType: string;
  promoDiscount?: number;
}

export function PriceSummary({ basePrice, quantity, discountType, promoDiscount = 0 }: PriceSummaryProps) {
  const getDiscountPercentage = () => {
    switch (discountType) {
      case "developer": return 0.2; // 20% off
      case "startup": return 0.3; // 30% off
      default: return 0;
    }
  };

  const calculateTotal = () => {
    const subtotal = basePrice * quantity;
    const discount = subtotal * getDiscountPercentage();
    return subtotal - discount - promoDiscount;
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>{formatCurrency(basePrice * quantity)}</span>
      </div>
      
      {getDiscountPercentage() > 0 && (
        <div className="flex justify-between text-sm text-green-500">
          <span>{discountType === "developer" ? "Developer Discount" : "Startup Discount"}</span>
          <span>-{formatCurrency(basePrice * quantity * getDiscountPercentage())}</span>
        </div>
      )}
      
      {promoDiscount > 0 && (
        <div className="flex justify-between text-sm text-green-500">
          <span>Promo Discount</span>
          <span>-{formatCurrency(promoDiscount)}</span>
        </div>
      )}
      
      <div className="flex justify-between font-bold pt-2 border-t border-gray-800">
        <span>Total</span>
        <span>{formatCurrency(calculateTotal())}</span>
      </div>
    </div>
  );
}