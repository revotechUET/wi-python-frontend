import 'toastr/build/toastr.min.css'
import toastr from 'toastr'

export const name = 'alertMessage'

export function service () {
  toastr.options = {
    "progressBar": false,
    "positionClass": "toast-top-right",
    "showDuration": "50",
    "hideDuration": "50",
    "showEasing": "linear",
    "hideEasing": "linear",
    "showMethod": "slideDown",
    "hideMethod": "slideUp",
    "iconClass": "close-16x16"
  }
  return toastr
}

