import React, { useState } from 'react'
import { createColumnHelper } from '@tanstack/react-table'
import { FaRegTrashAlt } from 'react-icons/fa'
import useTable from 'Hooks/useTable'
import { checkTableData } from 'data/staticData'
import { ADD, DELETE, initialModal } from 'constant'
import DeleteModal from 'components/ui/Modal/DeleteModal'
import { Table } from 'components'
import AddCheckColumnsModal from './Modal/AddCheckColumnsModal'

const columnHelper = createColumnHelper()

function ColumnsTable() {
  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>,
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>
      )
    }),
    columnHelper.accessor('progress', {
      id: 'progress',
      header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">PROGRESS</p>,
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>
      )
    }),
    columnHelper.accessor('quantity', {
      id: 'quantity',
      header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">QUANTITY</p>,
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>
      )
    }),
    columnHelper.accessor('date', {
      id: 'date',
      header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">DATE</p>,
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>
      )
    }),
    columnHelper.accessor('action', {
      id: 'action',
      header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">ACTION</p>,
      cell: (info) => (
        <div
          onClick={openModal.bind(this, DELETE, info.row.original)}
          className={`flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-red-500 hover:bg-gray-100 dark:bg-navy-700 w-fit dark:hover:bg-white/20 dark:active:bg-white/10 linear justify-center rounded-lg font-bold transition duration-200`}>
          <FaRegTrashAlt className="h-5 w-5" />
        </div>
      )
    })
  ]
  const { table, handleDelete, addData } = useTable(checkTableData, columns)
  const [modal, setModal] = useState({ ...initialModal })

  function openModal(type, data = null) {
    setModal((prev) => ({ ...prev, show: true, type: type, data }))
  }
  function closeModal() {
    setModal({ ...initialModal })
  }

  function handleSubmitDelete() {
    closeModal()
    return handleDelete(modal?.data)
  }
  function handleSubmitData(data) {
    addData(data)
    closeModal()
  }

  return (
    <>
      {modal.type === ADD ? (
        <AddCheckColumnsModal
          title={'Add Columns Data'}
          onCancel={closeModal}
          onOk={handleSubmitData}
          show={modal.show}
        />
      ) : null}
      {modal.type === DELETE ? (
        <DeleteModal
          onCancel={closeModal}
          onOk={handleSubmitDelete}
          show={modal.show}
          data={modal.data}
        />
      ) : null}
      <Table table={table} onAdd={openModal.bind(this, ADD)} title={'5-Columns Table'} />
    </>
  )
}

export default ColumnsTable
