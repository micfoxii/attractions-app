class Neighborhood {
    static all = []

    constructor(data){
        this.id = data.id
        this.name = data.name
        // this.borough = borough.data
        this.attractions = attractions.data
        Neighborhood.all.push(this)
    }
    
    static renderAll(){
        document.querySelector("#neighborhood-list").innerHTML = ""
        Neighborhood.all.forEach(neighborhood => neighborhood.formatNeighborhood())
    }

    static createData(){
        return {neighborhood: {
            name: document.querySelector("#nghbrhd-name").value
        }}
    }
    
    static formatNeighborhood(){
        const ul = document.querySelector("#neighborhood-list")
        const li = document.createElement("li")
            li.innerHTML = 
            `
            <h2 id="nghbrhd-name"> ${this.name} </h2>
            `
        ul.append(li)

    }
}