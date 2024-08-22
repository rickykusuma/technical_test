import { DatePickerField, Input, SelectField } from 'components/ui'
import React from 'react'

const ComplexForm = ({ register, errors, control }) => {
  return (
    <form className="flex flex-col gap-2">
      <Input
        title={'Name'}
        name={'name'}
        register={register}
        errors={errors}
        placeholder="Marketplace"
      />
      <SelectField
        title={'Status'}
        name={'status'}
        register={register}
        errors={errors}
        placeholder="Marketplace"
        options={[
          {
            id: 0,
            label: 'Approved',
            value: 'Approved'
          },
          {
            id: 1,
            label: 'Disable',
            value: 'Disable'
          },
          {
            id: 2,
            label: 'Error',
            value: 'Error'
          }
        ]}
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
        onWheel={() => document.activeElement.blur()}
        suffix={<span className={`text-gray-400`}> %</span>}
        register={register}
        placeholder="12.7"
        onKeyDown={(evt) => ['e', 'E', '+', '-', ','].includes(evt.key) && evt.preventDefault()}
      />
    </form>
  )
}

export default ComplexForm
