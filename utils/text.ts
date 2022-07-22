export const shrinkText = (text: string, space: number) => {
  return `${text.split(' ').slice(0, space).join(' ')}...`
}

export const removeAccents = (str: string) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
