import { getCoreRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table'
import { showSuccessMessage } from 'lib/toastMessage'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

const useTable = (tableData, columns) => {
  const keyword = useSelector((state) => state.filter.keyword)
  const [sorting, setSorting] = useState([])
  const [data, setData] = useState(() => [...tableData])
  const filteredData = useMemo(
    () => data?.filter((item) => item.name.toLowerCase().includes(keyword?.toLowerCase())) ?? [],
    [keyword, data]
  )
  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      sorting
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel()
  })

  function handleDelete(selData) {
    let newArray = data.filter((item) => item.id !== selData?.id)

    setData(() => [...newArray])
    showSuccessMessage('Data have been deleted')
  }

  function handleData(data) {
    setData(() => [...data])
  }

  function addData(data) {
    setData((prev) => [...prev, data])
    showSuccessMessage('data have been added successfully')
  }

  return {
    table,
    addData,
    handleDelete,
    handleData,
    data
  }
}

export default useTable
