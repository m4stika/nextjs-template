
type FormatCurrencyOptions = {
  currency?: string; // Simbol mata uang
  locale?: string;   // Locale untuk pemformatan
  precision?: number; // Jumlah angka desimal
  negativePrefix?: string; // Prefix untuk angka negatif
  negativeSuffix?: string; // Suffix untuk angka negatif
};

export function formatCurrency(
  value: number = 0,
  options: FormatCurrencyOptions = {}
): string {
  const {
    currency = "", // Default tanpa simbol mata uang
    locale = "id-ID", // Default ke format Indonesia
    precision = 0, // Default tanpa angka desimal
    negativePrefix = "(", // Default tanda negatif
    negativeSuffix = ")", // Default tanda negatif
  } = options;

  // Pastikan nilai absolut untuk pemrosesan
  const isNegative = value < 0;
  const absValue = Math.abs(value);

  // Gunakan Intl.NumberFormat untuk pemformatan
  const formatter = new Intl.NumberFormat(locale, {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  });

  // Format angka
  const formattedNumber = formatter.format(absValue);

  // Hasil akhir dengan simbol mata uang dan penanganan negatif
  return isNegative
    ? `${negativePrefix}${currency} ${formattedNumber} ${negativeSuffix}`
    : `${currency} ${formattedNumber}`;
}

