import React, { useEffect } from 'react'

const Modal = ({
  children,
  onOk,
  onCancel,
  titleOk,
  titleCancel,
  classNameOk,
  classNameCancel,
  showButton = false,
  show = false
}) => {
  useEffect(() => {
    if (show) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'auto'
  }, [show])
  return show ? (
    <div
      className="fixed h-full w-full z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true">
      <div
        className="fixed inset-0 bg-gray-500 z-50 bg-opacity-75 transition-opacity"
        aria-hidden="true"></div>
      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full h-screen items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            {children}
            {showButton ? (
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 ">
                <button
                  onClick={() => {
                    onOk()
                  }}
                  type="button"
                  className={`inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto ${classNameOk}`}>
                  {titleOk}
                </button>
                <button
                  onClick={onCancel}
                  type="button"
                  className={`mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto ${classNameCancel}`}>
                  {titleCancel}
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
