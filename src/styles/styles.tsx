export const primaryStyles = {
  wrapper: `flex flex-col gap-2`,
  button: `inline-flex items-center justify-center gap-1 px-3 py-2 text-sm font-medium text-white rounded-md cu-button not-prose md:px-6 md:py-3 md:text-base hover:text-white focus:outline-none bg-cu-red hover:bg-cu-black-600`,
  required: ``,
  // required: `border border-cu-red px-5 py-4 bg-cu-red-25 rounded-md`
}

export const textStyles = {
  label: `block font-semibold text-lg`,
  helper: `block text-sm text-cu-black-600 mb-1`,
  required: `text-cu-red`,
}

export const fieldStyles = {
  input: `border border-cu-black-200 rounded-md placeholder:text-cu-black-400`,
  select: `border border-cu-black-200 rounded-md`,
  radioCheck: `flex items-center gap-2`,
  horizontalOptions: `flex flex-row gap-10`,
  verticalOptions: `flex flex-col gap-2`,
  uploads: `max-w-xs focus:outline-none`,
  errorInput: `border border-red-600 rounded-md p-2`,
  disabled: `disabled:bg-slate-100 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none `,
  disabledCheckbox: `disabled:pointer-events-none disabled:bg-gray-300 disabled:text-black-800 `,
  disabledUpload: `disabled:pointer-events-none`,
}

export const fieldErrorStyles = {
  input: `text-sm font-medium text-cu-red`,
}
