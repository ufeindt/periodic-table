import _data from '../data/periodic-table-data.json'

export type ElementData = {
  atomicNumber: number
  atomicWeight: string
  block: string
  column: number
  highlight?: boolean
  name: string
  row: number
  symbol: string
}

export const tableData: ElementData[] = _data
