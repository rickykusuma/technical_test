import { zodResolver } from '@hookform/resolvers/zod'
import { CheckColumnForm, Modal } from 'components'
import moment from 'moment'
import React from 'react'
import { useForm } from 'react-hook-form'
import { columnsSchema } from 'schemas'
import { v4 as uuidv4 } from 'uuid'
const AddCheckColumnsModal = ({ show, onOk, onCancel, title }) => {
  const {
    handleSubmit,
    control,
    reset,
    register,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      date: undefined,
      progress: undefined,
      quantity: undefined
    },
    resolver: zodResolver(columnsSchema)
  })
  function onSubmit(data) {
    let newData = {
      id: uuidv4(),
      name: data?.name,
      date: moment(data?.date).format('DD.MMM.YYYY'),
      progress: data?.progress,
      quantity: data?.quantity
    }
    onOk(newData)
    reset()
  }
  return (
    <Modal
      onOk={handleSubmit(onSubmit)}
      onCancel={() => {
        onCancel()
        reset()
      }}
      titleOk={'Add'}
      classNameOk={
        '!bg-darkBlue-400 !dark:bg-darkBlue-500 !hover:bg-darkBlue-500 !dark:hover:bg-darkBlue-400'
      }
      titleCancel={'Cancel'}
      show={show}
      showButton={true}>
      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <h3 className="text-base font-semibold leading-6 mb-6 text-gray-900" id="modal-title">
          {title}
        </h3>
        <CheckColumnForm control={control} errors={errors} register={register} />
      </div>
    </Modal>
  )
}

export default AddCheckColumnsModal
