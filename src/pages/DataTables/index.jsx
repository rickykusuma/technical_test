import React from 'react'
import { CheckTable, ColumnsTable, ComplexTable, DevelopmentTable } from './components'

const DataTables = () => {
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <DevelopmentTable />
        <CheckTable />
      </div>

      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
        <ColumnsTable />

        <ComplexTable />
      </div>
    </div>
  )
}

export default DataTables
