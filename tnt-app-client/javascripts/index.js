
document.addEventListener('DOMContentLoaded', function() {
    addSubmitEventToAttractionForm()
    Api.getNeighborhoods()
    Api.getTypes()
    Api.getAttractions()
    
    // Api.neighborhoodList()

    // toggleButton()
    // attractionForm()  
})



////////////////////////////////// WORKING CODE //////////////////////////////////

function renderNeighborhood(neighborhood){
    const select = document.querySelector("#neighborhood-select")
    const neighborhoodId = neighborhood.id

    const option = document.createElement("option")
        option.innerText = `${neighborhood.name}`
        option.setAttribute("value", neighborhood.id)
        // option.setAttribute("value", neighborhood.id)
    
    select.append(option)  
}

function renderType(type){
    const select = document.querySelector("#type-select")
    const typeId = type.id

    const option = document.createElement("option")
        option.innerText = `${type.name}`
        option.setAttribute("value", type.id)
        // option.setAttribute("value", type.id)
    
    select.append(option)  
}

function clearForm() {
    document.querySelector("#att-name").value = ""
    document.querySelector("#neighborhood-select").value = ""
    document.querySelector("#type-select").value = ""
    document.querySelector("#att-address").value = ""
    document.querySelector("#att-description").value = ""

}
function deleteAttraction(event){
    // event.preventDefault()

    const attractionId = this.getAttribute("id")
    const attractionUrl = `${ATTRACTIONS_URL}/${this.id}`
    const getAttractionCard = document.getElementById(`attraction-${attractionId}`)

    fetch(attractionUrl, {
        method: "DELETE"
    })

    .then(() => {
        getAttractionCard.remove()
        Attraction.all = Attraction.all.filter(attraction => attraction.id !== this.id)
    })
    // .then(rsp => rsp.json())
    // .then(Api.getAttractions)
}

function addSubmitEventToAttractionForm(){
    document.querySelector("#new-attr-form").addEventListener('submit', Api.submitForm)
}

function likeAttraction(event){
    event.preventDefault()
    
    const attractionId = this.getAttribute("id")
    const attractionUrl = `${ATTRACTIONS_URL}/${attractionId}`

    debugger
    // PATCH likes

}

/////////////////////////////// TO DO /////////////////////////////////
// TOGGLE BUTTON FOR ADD ATTRACTION

// function addAttractionButton(button){
//     const main = document.querySelector("main")
//     const p = document.createElement("p")
//     const toggleBtn = document.createElement("button")
//         toggleBtn.class = "submit"
//         toggleBtn.name = "submit"
//         toggleBtn.id = "toggle-btn"
//         toggleBtn.style
//         toggleBtn.innerText = "Add New Attraction"

//     main.append(p)
//     p.append(toggleBtn)
// }

// function toggleButton(){
//     var addAtt = false
//     const toggleAtt = document.querySelector("#toggle-btn")
//     const attForm = document.querySelector("#att-form-div")

//     toggleAtt.addEventListener('click', () => {
//         addAtt = !addAtt
//         if(addAtt){
//             // attForm.style.display = 'block'
//             attForm.addEventListener("submit", event => {
//                 event.preventDefault()

//             })
//         } else {
//             // attForm.style.display = 'none'
//         }
//     })
// }