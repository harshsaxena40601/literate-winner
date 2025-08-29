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
    <div className="mobile-pos-layout">
      {/* Products Section - Top */}
      <div className="products-container">
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

      {/* Checkout Section - Bottom */}
      <div className="checkout-container">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-white">Cart ({totals.items})</h3>
            <span className="text-lg font-bold text-white">{currency(totals.net)}</span>
          </div>
          
          {/* Cart Items Summary */}
          <div className="max-h-32 overflow-y-auto">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between py-1">
                <span className="text-sm text-white/80">{item.name} × {item.qty}</span>
                <span className="text-sm text-white/80">{currency(item.qty * item.priceSnapshot)}</span>
              </div>
            ))}
          </div>

          {/* Checkout Button */}
          <button 
            onClick={checkout}
            disabled={cart.length === 0}
            className="btn-accent w-full py-3 font-semibold"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
