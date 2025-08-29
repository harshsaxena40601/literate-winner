import React from "react";
import ProductCard from "../POS/ProductCard.jsx";
import { currency } from "../../utils/currency";
import { ShoppingCart, Trash2, Minus, Plus, QrCode, AlertTriangle, Printer, Check } from "lucide-react";

export default function POSPanel({
  showLowStock, lowStockItems, outOfStockItems, gridLayout,
  filteredProducts, remainingStock, lowStockThreshold, addToCart,
  totals, clearCart, cart, dec, inc, removeLine, discount, setDiscount,
  taxPercent, setTaxPercent, lowStockThresholdState, setLowStockThreshold,
  sku, setSku, onQuickAdd, payMode, setPayMode, printReceipt, checkout,
  focusedCartIdRef
}) {
  return (
    <div className="h-[calc(100vh-6rem)] flex flex-col relative">
      {/* Products Section - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-[200px]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id}
              product={product}
              onAdd={addToCart}
            />
          ))}
        </div>
      </div>

      {/* Fixed Checkout Section */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-neutral-800 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-3">
            {/* Cart Summary */}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-white">Cart ({totals.items})</h3>
              <span className="text-lg font-bold text-white">{currency(totals.net)}</span>
            </div>
            
            {/* Payment Controls */}
            <div className="grid grid-cols-2 gap-3">
              <input
                type="number"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                placeholder="Discount"
                className="input"
              />
              <button 
                onClick={checkout}
                disabled={cart.length === 0}
                className="btn-accent font-semibold"
              >
                Checkout ({currency(totals.net)})
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
