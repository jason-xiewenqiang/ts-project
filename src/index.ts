let hello: string = 'Hello world Ts'
const el: Element | null = document.querySelector('#app')
if (el) {
  el.innerHTML = hello
}