import { IDocument } from '../interfaces'
import { removeAccents } from './text'

export const filterData = (data: IDocument[], sectionFilter: string) => {
  if (sectionFilter === 'Todo') {
    return data.slice(0, 8)
  }

  return data
    .filter(
      (document) =>
        removeAccents(document.category) === removeAccents(sectionFilter)
    )
    .slice(0, 7)
}
