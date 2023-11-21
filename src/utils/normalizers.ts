export function normalizeCep(value: string | undefined) {
  if (!value) return ''

  return value
    .replace(/[\D]/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})(\d+?)/, '$1')
}

export function normalizeCardNumber(value: string | undefined) {
  if (!value) return ''

  return value
    .replace(/[\D]/g, '')
    .replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4')
}
