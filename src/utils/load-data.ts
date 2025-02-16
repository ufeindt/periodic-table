import _data from '../data/periodic-table-data.json'

export type ElementData = {
  atomicNumber: number
  atomicWeight: string
  block: 's' | 'f' | 'p' | 'd'
  column: number
  highlight?: boolean
  name: string
  row: number
  symbol: string
}

export const tableData = _data as ElementData[]
