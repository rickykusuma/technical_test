import getRandomNumber from '../lib/getRandomNumber'
import { v4 as uuidv4 } from 'uuid'
export const checkTableData = [
  {
    id: uuidv4(),
    name: 'Marketplace',
    quantity: 2458,
    date: '12.Jan.2021',
    progress: getRandomNumber(1, 100, 1)
  },
  {
    id: uuidv4(),
    name: 'Venus DB PRO',
    quantity: 1485,
    date: '21.Feb.2021',
    progress: getRandomNumber(1, 100, 1)
  },
  {
    id: uuidv4(),
    name: 'Venus DS',
    quantity: 1024,
    date: '13.Mar.2021',
    progress: getRandomNumber(1, 100, 1)
  },
  {
    id: uuidv4(),
    name: 'Venus 3D Asset',
    quantity: 858,
    date: '24.Jan.2021',
    progress: getRandomNumber(1, 100, 1)
  },

  {
    id: uuidv4(),
    name: 'Marketplace',
    quantity: 258,
    date: '12.Jan.2021',
    progress: getRandomNumber(1, 100, 1)
  }
]
export const complexTableData = [
  {
    id: uuidv4(),
    name: 'Marketplace',
    status: 'Approved',
    date: '24.Jan.2021',
    progress: getRandomNumber(1, 100, 1)
  },
  {
    id: uuidv4(),
    name: 'Marketplace',
    status: 'Disable',
    date: '30.Dec.2021',
    progress: getRandomNumber(1, 100, 1)
  },
  {
    id: uuidv4(),
    name: 'Marketplace',
    status: 'Error',
    date: '20.May.2021',
    progress: getRandomNumber(1, 100, 1)
  },
  {
    id: uuidv4(),
    name: 'Marketplace',
    status: 'Approved',
    date: '12.Jul.2021',
    progress: getRandomNumber(1, 100, 1)
  }
]

export const developmentDataTable = [
  {
    id: uuidv4(),
    name: 'Marketplace',
    tech: ['apple', 'android', 'windows'],
    date: '12.Jan.2021',
    progress: getRandomNumber(1, 100, 1)
  },
  {
    id: uuidv4(),
    name: 'Venus DB PRO',
    tech: ['apple'],
    date: '21.Feb.2021',
    progress: getRandomNumber(1, 100, 1)
  },
  {
    id: uuidv4(),
    name: 'Venus DS',
    tech: ['apple', 'windows'],
    date: '13.Mar.2021',
    progress: getRandomNumber(1, 100, 1)
  },
  {
    id: uuidv4(),
    name: 'Venus 3D Asset',
    tech: ['apple', 'android', 'windows'],
    date: '24.Jan.2021',
    progress: getRandomNumber(1, 100, 1)
  }
]
