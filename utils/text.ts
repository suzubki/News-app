export const shrinkText = (text: string, space: number) => {
  return `${text.split(' ').slice(0, space).join(' ')}...`
}
