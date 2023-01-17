//1
const num = document.querySelector('.num')
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const clear = document.querySelector('.clear')
let a = 0

 plus.addEventListener('click',() =>{
     a++
     if (a > 0){
         num.innerText = a
         num.style.color = 'green'
     }
 })
 minus.addEventListener('click',()=>{
     a--
     if(a >= 0){
         num.innerText = a
         num.style.color = 'red'
     }

 })

 clear.addEventListener('click',()=>{
     a = 0
     num.innerText = a
     num.style.color = 'black'
 })

//2
const box = document.querySelector('.box')
const x = document.querySelector('.x')
const y = document.querySelector('.y')

 box.addEventListener('mousemove',(e)=>{
     x.innerText = e.screenX
     y.innerText = e.screenY
 })

