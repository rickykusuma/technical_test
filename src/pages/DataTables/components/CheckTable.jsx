import React, { useState } from 'react'

import { createColumnHelper } from '@tanstack/react-table'
import TableDropdown from './TableDropdown'
import { Checkbox, Table } from 'components'
import { FaRegTrashAlt } from 'react-icons/fa'
import { checkTableData } from 'data/staticData'
import useTable from 'Hooks/useTable'
import { ADD, DELETE, initialModal } from 'constant'
import DeleteModal from 'components/ui/Modal/DeleteModal'
import AddCheckColumnsModal from './Modal/AddCheckColumnsModal'
import { showSuccessMessage } from 'lib/toastMessage'

const columnHelper = createColumnHelper()

function CheckTable() {
  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => <p className="text-sm font-bold text-gray-600 dark:text-white">NAME</p>,
      cell: (info) => (
        <div
          className="flex items-center"
          onClick={handleSelectedData.bind(this, info.row.original)}>
          <Checkbox
            defaultChecked={selectedData?.some((e) => e.id === info.row.original.id)}
            em="10px"
          />
          <p className="ml-3 text-sm font-bold text-navy-700 dark:text-white">{info.getValue()}</p>
        </div>
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
    })
  ]
  const { table, data, handleData, addData } = useTable(checkTableData, columns)
  const [selectedData, setSelectedData] = useState([])
  function handleSelectedData(selData) {
    let newArray = [...selectedData]
    let index = selectedData?.findIndex((data) => data?.id === selData?.id)
    // check if the data exist in selectedData
    if (index !== -1) {
      newArray.splice(index, 1)
    } else {
      newArray.push(selData)
    }
    setSelectedData(() => newArray)
  }
  const [modal, setModal] = useState({ ...initialModal })

  function openModal(type, data = null) {
    setModal((prev) => ({ ...prev, show: true, type: type, data }))
  }
  function closeModal() {
    setModal({ ...initialModal })
  }

  function handleSubmitDelete() {
    // getAllSelectedIds
    let selectedIds = selectedData.map((data) => data?.id)
    let newArray = data?.filter((item) => !selectedIds.includes(item.id))
    setSelectedData([])
    closeModal()
    showSuccessMessage('Data berhasil dihapus')
    return handleData(newArray)
  }
  function handleSubmitData(data) {
    addData(data)
    closeModal()
  }

  return (
    <>
      {modal.type === ADD ? (
        <AddCheckColumnsModal
          title={'Add Check Data'}
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
          data={selectedData}
          isMultipleData={true}
        />
      ) : null}
      <Table
        table={table}
        title={'Complex Table'}
        headerComponent={
          <div className="flex gap-3">
            {selectedData?.length > 0 ? (
              <div className="flex justify-end items-center gap-4 ">
                <span className="text-lg font-bold text-navy-700 dark:text-white ">
                  {selectedData?.length} selected
                </span>
                <div
                  onClick={openModal.bind(this, DELETE)}
                  className={`flex items-center text-xl hover:cursor-pointer bg-lightPrimary p-2 text-red-500 hover:bg-gray-100 dark:bg-navy-700 dark:hover:bg-white/20 dark:active:bg-white/10 linear justify-center rounded-lg font-bold transition duration-200`}>
                  <FaRegTrashAlt className="h-5 w-5" />
                </div>
              </div>
            ) : null}
            <TableDropdown onAdd={openModal.bind(this, ADD)} />
          </div>
        }
      />
    </>
  )
}

export default CheckTable
