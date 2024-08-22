import { DatePickerField, Input } from 'components/ui'
import React from 'react'

const CheckColumnForm = ({ register, errors, control }) => {
  return (
    <form className="flex flex-col gap-2">
      <Input
        title={'Name'}
        name={'name'}
        register={register}
        errors={errors}
        placeholder="Marketplace"
      />
      <Input
        errors={errors}
        title={'Quantity'}
        name={'quantity'}
        type="number"
        register={register}
        placeholder="12"
        onKeyDown={(evt) =>
          ['e', 'E', '+', '-', ',', '.'].includes(evt.key) && evt.preventDefault()
        }
      />
      <DatePickerField
        control={control}
        name={'date'}
        label={'Date'}
        placeholder={'Choose date'}
        errors={errors}
        title={'Date'}
        register={register}
      />
      <Input
        errors={errors}
        title={'Progress'}
        name={'progress'}
        type="number"
        suffix={<span className={`text-gray-400`}> %</span>}
        register={register}
        placeholder="12.7"
        onKeyDown={(evt) => ['e', 'E', '+', '-', ','].includes(evt.key) && evt.preventDefault()}
      />
    </form>
  )
}

export default CheckColumnForm
