// Selection of elements
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const numberMultiplicator = document.querySelector("#multiplicator")

const multiplicationTable = document.querySelector("#multiplication-operations") 
const multiplicationTitle = document.querySelector("#multiplication-title span")

// Functions
const createTable = (number, multiplicatorNumber) =>{
    multiplicationTable.innerHTML = ""

    for(i = 1; i <= multiplicatorNumber; i++){
        const result = number * i

        const template = `
        <div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
        </div>
        `

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html") // Transforma o "template" para aparaecer de forma funcional na web

        const row = htmlTemplate.querySelector(".row")
        multiplicationTable.appendChild(row) // Mostra o template criado
    }
    multiplicationTitle.innerText = number
}

// Events
multiplicationForm.addEventListener("submit", (e) =>{
    e.preventDefault()

    const multiplicationNumber = +numberInput.value
    const multiplicatorNumber = +numberMultiplicator.value

    if(!multiplicationNumber || !multiplicatorNumber){
        console.log("Inválido")
        return;
    }

    createTable(multiplicationNumber, multiplicatorNumber);
})