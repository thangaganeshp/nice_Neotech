const scriptURL = 'https://script.google.com/macros/s/AKfycbzb4m0tN_wt0m7QIfSAS1AV2zCyNUB9lsGY3F32Ew4HsxiZ8StGbklfvQqOoJrkcOthhw/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
