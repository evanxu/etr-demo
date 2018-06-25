import formValidate from'@/js/module/form'
import swipper from '@/js/module/swipper'

$(function(){
  swipper()
  console.log('this is checkoutConfirmationPage') 
})

$('button').on('click', function(){
  formValidate()
})