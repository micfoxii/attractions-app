class Attraction {
    static all = []

    constructor(data){
        this.id = data.id
        this.name = data.name
        this.address = data.address
        this.description = data.description
        this.neighborhood_id = data.neighborhood_id
        this.type_id = data.type_id
        this.type = data.type
        this.neighborhood = data.neighborhood
        this.likes = data.likes
        Attraction.all.push(this)
    }

    static renderAll(){
        document.querySelector("#attraction-list").innerHTML = ""
        Attraction.all.forEach(attraction => attraction.formatAttraction())
    }
   
    static createData(){
        return {attraction: {
            name: document.querySelector("#att-name").value, 
            neighborhood_id: document.querySelector("#neighborhood-select").value,
            type_id: document.querySelector("#type-select").value,
            address: document.querySelector("#att-address").value,
            description: document.querySelector("#att-description").value,
            likes: "0"
            }}
    }

    // FORMATS AND ADDS ATTRACTIONS TO LIST
     formatAttraction(){
        const ul = document.querySelector("#attraction-list")
        const li = document.createElement("li")
            li.innerHTML = 
            `
            <h2 id="att-name-type" > ${this.name}: ${this.type.name}</h2>
            <div id="att-name" > ${this.neighborhood.name} </div>
            <div id="att-address" > ${this.address} </div><br>
            <div id="att-likes" > ${this.likes} people like ${this.name} </div> <br>
            <div id="att-description" > Description: ${this.description} </div> <br>
            `
        
            li.setAttribute("id", `attraction-${this.id}`)

        const likeBtn = document.createElement("button")
            likeBtn.innerHTML = (`Like ${this.name}`)
            likeBtn.setAttribute("id", `${this.id}`)
            likeBtn.setAttribute("class", "like_button")
            likeBtn.addEventListener("click", likeAttraction)


        const updateAttractionBtn = document.createElement("button")
            updateAttractionBtn.innerHTML = (`Update ${this.name} Details`)

        const deleteAttractionBtn = document.createElement("button")
            deleteAttractionBtn.innerHTML = (`Delete ${this.name}`)
            deleteAttractionBtn.setAttribute("id", `${this.id}`)
            deleteAttractionBtn.setAttribute("class", "delete_button")
            deleteAttractionBtn.addEventListener("click", deleteAttraction)

        ul.append(li)
        li.append(likeBtn, updateAttractionBtn, deleteAttractionBtn) 
    }
    

}