export const formatINR = (value) =>
  Number(value ?? 0).toLocaleString('en-IN', { style: 'currency', currency: 'INR' });

export const parseAmount = (str) => {
  if (typeof str === 'number') return str;
  if (!str) return 0;
  // remove any non-digit/decimal chars (₹, commas, spaces)
  const cleaned = String(str).replace(/[^\d.-]/g, '');
  const num = Number(cleaned);
  return Number.isFinite(num) ? num : 0;
};

// Alias for legacy imports
export const currency = formatINR;
