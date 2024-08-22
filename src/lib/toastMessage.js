import { toast } from 'react-toastify'

export const showSuccessMessage = (content) => {
  toast.success(`${content ?? 'Successfully'}`, {
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    autoClose: 2000
  })
}

export const showErrorMessage = (content) => {
  if (content === 'bearer token invalid') {
    content = 'Sesi telah habis'
  }
  toast.error(`${content ?? 'Failed'}`, {
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    autoClose: 2000
  })
}

export const showWarningMessage = (content) => {
  toast.warning(`${content ?? 'Be carefully!'}`, {
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    autoClose: 2000
  })
}
