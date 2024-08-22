import { Checkbox, DatePickerField, ErrorMessage, Input } from 'components/ui'
import { capitalize } from 'lodash'
import React from 'react'

const DeploymentForm = ({ register, errors, control }) => {
  return (
    <form className="flex flex-col gap-2">
      <Input
        title={'Name'}
        name={'name'}
        register={register}
        errors={errors}
        placeholder="Marketplace"
      />
      <div className="flex flex-col gap-1">
        <span>Platform</span>
        <div className="flex gap-2 items-center">
          {['apple', 'android', 'windows'].map((platform, idx) => (
            <div key={`checkbox-deployment-${idx}`} className="flex gap-2 items-center">
              <Checkbox value={platform} name={'tech'} register={register} errors={errors} />
              <span>{capitalize(platform)}</span>
            </div>
          ))}
        </div>
        {errors?.['tech'] ? <ErrorMessage errorMessage={errors['tech']?.message} /> : null}
      </div>
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

export default DeploymentForm
