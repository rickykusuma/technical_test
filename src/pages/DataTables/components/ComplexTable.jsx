import React, { useState } from 'react'
import { Progress, Table } from 'components'
import { MdCancel, MdCheckCircle, MdOutlineError } from 'react-icons/md'
import { createColumnHelper } from '@tanstack/react-table'
import { FaRegTrashAlt } from 'react-icons/fa'
import { complexTableData } from 'data/staticData'
import useTable from 'Hooks/useTable'
import { ADD, DELETE, initialModal } from 'constant'
import DeleteModal from 'components/ui/Modal/DeleteModal'
import AddComplexModal from './Modal/AddComplexModal'

const columnHelper = createColumnHelper()

export default function ComplexTable() {
  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>,
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>
      )
    }),
    columnHelper.accessor('status', {
      id: 'status',
      header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">STATUS</p>,
      cell: (info) => (
        <div className="flex items-center">
          {info.getValue() === 'Approved' ? (
            <MdCheckCircle className="text-green-500 me-1 dark:text-green-300" />
          ) : info.getValue() === 'Disable' ? (
            <MdCancel className="text-red-500 me-1 dark:text-red-300" />
          ) : info.getValue() === 'Error' ? (
            <MdOutlineError className="text-amber-500 me-1 dark:text-amber-300" />
          ) : null}
          <p className="text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>
        </div>
      )
    }),
    columnHelper.accessor('date', {
      id: 'date',
      header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">DATE</p>,
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>
      )
    }),
    columnHelper.accessor('progress', {
      id: 'progress',
      header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">PROGRESS</p>,
      cell: (info) => (
        <div className="flex items-center">
          <Progress width="w-[108px]" value={info.getValue()} />
        </div>
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
  const { table, handleDelete, addData } = useTable(complexTableData, columns)
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
        <AddComplexModal onCancel={closeModal} onOk={handleSubmitData} show={modal.show} />
      ) : null}
      {modal.type === DELETE ? (
        <DeleteModal
          onCancel={closeModal}
          onOk={handleSubmitDelete}
          show={modal.show}
          data={modal.data}
        />
      ) : null}
      <Table table={table} title={'Complex Table'} onAdd={openModal.bind(this, ADD)} />
    </>
  )
}
