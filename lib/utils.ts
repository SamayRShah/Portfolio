import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface TwTemplateFunction {
  (strings: TemplateStringsArray, ...values: unknown[]): string
}
export const tw: TwTemplateFunction = (strings, ...values) =>
  String.raw({ raw: strings }, ...values)

export const formatDate = (date: Date) => {
  const parsedDate = date instanceof Date ? date : new Date(date)
  if (isNaN(parsedDate.getTime())) return 'Invalid date'

  return parsedDate.toLocaleDateString('en-us', {
    month: 'short',
    year: '2-digit'
  })
}

export const formatDateRange = (start: Date, end?: Date) =>
  `${formatDate(start)} – ${end ? formatDate(end) : 'present'}`
