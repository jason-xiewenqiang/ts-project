import './type'
let hello: string = 'Hello world Ts'
const el: Element | null = document.querySelector('#app')
if (el) {
  el.innerHTML = hello
}
const user: string = ''

fetch('/api/user').then((response) => response.json()).then(data => {
  console.log(data)
}).catch(e => { console.log(e) })
