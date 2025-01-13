let save1 = document.getElementById("save")
let count1 = document.getElementById("count")
let count =0

function increment(){
    count +=1
    count1.innerText=  count
}

function decrement(){
    count-=1
    count1.innerText = count
}

function reset(){
    count = 0 
    count1.innerText = count
    
}

function save(){
    let saveStr = count + " - "
    save1.textContent += saveStr
  
    count1.textContent = count
    
}


