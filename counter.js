const count = document.getElementById("count")
const incrementbtn =document. getElementById ("incrementbtn")
const decrementbtn = document.getElementById ("decrementbtn")
const resetbtn = document.getElementById ("reset")
// const customincrement = document.getElementById ("customincrement")
let value = 0;
//let incrementvalue
const incrementinputvalue = document.querySelector("#increment-value")
//increment
incrementbtn.addEventListener("click",function()
{
value +=1
count.innerText= value
})

//decrement
decrementbtn.addEventListener("click",function(){
if ( value === 0){
    alert("alert")
    return
    }
    value -=1
count.innerText= value
})

//reset
// resetbtn.addEventListener("click",function(){
// value == 0
// count.innerText= value
// })
function displayresult(){
    const result = document.getElementById("count")
    result.innerText = 0;
}

function handleReset(){
    value == 0;
    displayresult()
}
function customincrement(){
    const inputvalue = document.getElementById("increment-value")
    const parseIntvalue = inputvalue.value
    count.innerText = parseIntvalue
    
}
// customincrement.addEventListener()