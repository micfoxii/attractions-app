class Type {

    function getTypes(){
        fetch(`${TYPES_URL}`)
        .then(resp => resp.json())
        .then(types => {Type.renderType(type)})
        .catch(error => console.log(error))
    }

    // ADDS TYPES TO FORM SELECT OPTIONS
    function renderType(type){
        const select = document.querySelector("#type-select")
        const typeId = type.id

        const option = document.createElement("option")
            option.innerText = `${type.name}`
            option.setAttribute("value", type.name)
            // option.setAttribute("value", type.id)
        
        select.append(option)  
    }
}