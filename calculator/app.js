let input = document.querySelector('#inputBox');
let button = document.querySelectorAll('button');

let string = "";

button.forEach((button) => {
    button.addEventListener('click', (e) =>{
        console.log(e.target.innerHTML)
        console.log(e.target.value)
        console.log("hellow");
        if(e.target.innerHTML === "="){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML === "AC"){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML === "DEL"){
            string = string.substring(0,string.length-1)
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }

    })

    
});

