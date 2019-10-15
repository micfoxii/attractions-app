class Api {
    static baseUrl = 'http://localhost:3000'
    static ATTRACTIONS_URL = `${Api.baseUrl}/attractions`
    static TYPES_URL = `${Api.baseUrl}/types`
    static NEIGHBORHOODS_URL = `${Api.baseUrl}/neighborhoods`

    static getAttractions(attractions){
        fetch(`${ATTRACTIONS_URL}`)
        .then(rsp => rsp.json())
        .then(attractions => {
            attractions.forEach(data => new Attraction(data))
            Attraction.renderAll()
        })
        .catch(error => console.log(error))
    }

    // AJAX POST CALL FOR EXISTING ATTRACTIONS
    static submitForm(event) {
        event.preventDefault();

        let data = Attraction.createData();
        fetch('http://localhost:3000/attractions', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(rsp => rsp.json())
        .then(attractionsData => {
            let attraction = new Attraction(attractionsData)
            attraction.formatAttraction()
            clearForm()
        })
    }

    static getTypes(types){
        fetch(`${TYPES_URL}`)
        .then(resp => resp.json())
        .then(types => {types.forEach(type => renderType(type))
        })
        .catch(error => console.log(error))
    }

    static getNeighborhoods(neighborhoods){
        fetch(`${NEIGHBORHOODS_URL}`)
        .then(rsp => rsp.json())
        .then(neighborhoods => {
            neighborhoods.forEach(neighborhood => renderNeighborhood(neighborhood))
        })
        .catch(error => console.log(error))
    }

    
}