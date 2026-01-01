import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export function isEmpty(obj: Record<string, unknown>) {
  return Object.keys(obj).length === 0;
}

export const debounce = <T extends unknown[]>(func: (...args: T) => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => { func.call(null, ...args) }, delay);
  };
}
