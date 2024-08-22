import React from 'react'
import ErrorMessage from './ErrorMessage'
import { Controller } from 'react-hook-form'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { ThemeProvider, createTheme } from '@mui/material'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LuCalendarDays } from 'react-icons/lu'

const DatePickerField = ({ control, label, labelClassName, name, errors, ...datePickerProps }) => {
  const theme = createTheme({
    typography: {
      fontFamily: 'DM Sans,sans-serif',
      fontWeightRegular: 500,
      fontSize: 12
    },
    components: {
      MuiIconButton: {
        styleOverrides: {
          sizeMedium: {}
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            '&:hover > .MuiOutlinedInput-notchedOutline': {
              borderColor: '#d9d9d9'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#d9d9d9',
              borderWidth: '1px'
            },
            '&.Mui-error .MuiOutlinedInput-notchedOutline': {
              borderColor: 'red',
              borderWidth: '1px'
            },
            color: '#111827',
            backgroundColor: '#FFFFFF0F'
          },
          input: {
            paddingBlock: '6px',
            paddingLeft: '8px',
            '&::placeholder': {
              fontWeight: 650
            }
          },
          notchedOutline: {
            borderColor: '#d1d5db'
          }
        }
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            borderColor: 'white'
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {}
        }
      }
    }
  })

  return (
    <div className="w-full flex flex-col ">
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <>
            {label ? (
              <span className={`${errors?.[name] ? '!text-red-500' : ''} } ${labelClassName}`}>
                {label}
              </span>
            ) : null}

            <LocalizationProvider dateAdapter={AdapterMoment}>
              <ThemeProvider theme={theme}>
                <DatePicker
                  {...field}
                  value={field?.value || null}
                  slots={{ openPickerIcon: LuCalendarDays }}
                  slotProps={{
                    textField: {
                      variant: 'outlined',
                      placeholder: 'Choose date'
                    }
                  }}
                  format="DD.MMM.YYYY"
                  {...datePickerProps}
                />
              </ThemeProvider>
            </LocalizationProvider>
          </>
        )}
      />
      {errors[name] ? <ErrorMessage errorMessage={errors[name]?.message} /> : null}
    </div>
  )
}

export default DatePickerField
