const input = document.querySelector('.tasks-field');
const button = document.querySelector('.add')
const ul = document.querySelector('ul')
const clear = document.querySelector('.clear')


button.addEventListener('click',function(e){
  if (input.value){
    ul.innerHTML +=  `<li class ='flex'> ${input.value}
     <button class="delete">Delete</button></li>
`
 
  }
  

input.value = '';

})





clear.addEventListener('click',clearALl)

function clearALl(){
 ul.innerHTML = '';
}






