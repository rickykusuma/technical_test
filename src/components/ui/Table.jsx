import TableDropdown from 'pages/DataTables/components/TableDropdown'
import React from 'react'
import { Card } from '.'
import { flexRender } from '@tanstack/react-table'

const Table = ({ table, onAdd = () => {}, title, headerComponent }) => {
  return (
    <Card extra={'w-full h-full px-6 pb-6 sm:overflow-x-auto'}>
      <div className="relative flex items-center justify-between pt-4">
        <span className="text-xl font-bold text-navy-700 dark:text-white">{title}</span>
        {headerComponent ? headerComponent : <TableDropdown onAdd={onAdd} />}
      </div>

      <div className="mt-5 mb-1 overflow-x-auto">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b-[1px] border-gray-200 pt-4 pb-2 pr-4 text-start">
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: '',
                          desc: ''
                        }[header.column.getIsSorted()] ?? null}
                      </div>
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className={`${
                            cell.column.id === 'action' ? 'w-fit' : 'min-w-[100px]'
                          }  border-white/0 py-3  pr-4`}>
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      )
                    })}
                  </tr>
                )
              })
            ) : (
              <tr className="">
                <td
                  colSpan={5}
                  className="font-bold text-navy-700 pt-5 dark:text-white w-full h-full text-center">
                  No Data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default Table
