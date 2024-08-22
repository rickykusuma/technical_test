import React, { useState } from 'react'
import { DiApple } from 'react-icons/di'
import { DiAndroid } from 'react-icons/di'
import { DiWindows } from 'react-icons/di'

import { createColumnHelper } from '@tanstack/react-table'
import Progress from 'components/ui/Progress'
import { FaRegTrashAlt } from 'react-icons/fa'
import { developmentDataTable } from 'data/staticData'
import useTable from 'Hooks/useTable'
import { ADD, DELETE, initialModal } from 'constant'
import DeleteModal from 'components/ui/Modal/DeleteModal'
import { Table } from 'components'
import AddDevelopmentModal from './Modal/AddDevelopmentModal'

const columnHelper = createColumnHelper()
function DevelopmentTable() {
  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>,
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>
      )
    }),
    columnHelper.accessor('tech', {
      id: 'tech',
      header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">TECH</p>,
      cell: (info) => (
        <div className="flex items-center gap-2">
          {info.getValue().map((item, key) => {
            if (item === 'apple') {
              return (
                <div key={key} className="text-[22px] text-gray-600 dark:text-white">
                  <DiApple />
                </div>
              )
            } else if (item === 'android') {
              return (
                <div key={key} className="text-[21px] text-gray-600 dark:text-white">
                  <DiAndroid />
                </div>
              )
            } else if (item === 'windows') {
              return (
                <div key={key} className="text-xl text-gray-600 dark:text-white">
                  <DiWindows />
                </div>
              )
            } else return null
          })}
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
        <div className="flex items-center gap-3">
          <p className="text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}%</p>
          <Progress width="w-[68px]" value={info.getValue()} />
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
  const { table, handleDelete, addData } = useTable(developmentDataTable, columns)
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
        <AddDevelopmentModal onCancel={closeModal} onOk={handleSubmitData} show={modal.show} />
      ) : null}
      {modal.type === DELETE ? (
        <DeleteModal
          onCancel={closeModal}
          onOk={handleSubmitDelete}
          show={modal.show}
          data={modal.data}
        />
      ) : null}
      <Table table={table} onAdd={openModal.bind(this, ADD)} title={'Deployment Table'} />
    </>
  )
}

export default DevelopmentTable
