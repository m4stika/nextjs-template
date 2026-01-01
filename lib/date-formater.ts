export default function dateFormatter(dateValue: Date | string, format: string): string {
  // Validasi apakah `dateValue` adalah valid Date
  const newDateValue = dateValue instanceof Date ? dateValue : new Date(dateValue);
  const date = newDateValue instanceof Date && !isNaN(newDateValue.getTime()) ? newDateValue : new Date();
  const padZero = (num: number) => num.toString().padStart(2, '0');

  const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

  const fullYear = date.getFullYear();
  const shortYear = fullYear % 100; // 2 digit year
  const month = date.getMonth() + 1; // 1-based month
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Replace format tokens with actual values
  const formattedDate = format
    .replace('yyyy', fullYear.toString())
    .replace('yy', padZero(shortYear))
    .replace('MMM', months[date.getMonth()])
    .replace('MM', padZero(month)) // Month
    .replace('dd', padZero(day))
    .replace('HH', padZero(hours))
    .replace('mi', padZero(minutes)) // Minutes
    .replace('SS', padZero(seconds));

  return formattedDate;
}

// Contoh penggunaan
// console.log(dateFormatter("2024-10-25", 'dd-MMM-yyyy')); // Output: "26-Nov-2024"
// console.log(dateFormatter(new Date(), 'dd-MMM-yyyy')); // Output: "26-Nov-2024"
// console.log(dateFormatter(new Date(), 'dd-MM-yy'));    // Output: "26-11-24"
// console.log(dateFormatter(new Date(), 'dd-MMM-yyyy HH:MM:SS')); // Output: "26-Nov-2024 15:30:45"
// console.log(dateFormatter(new Date(), 'yyyy-MM-dd'));  // Output: "2024-11-26"
