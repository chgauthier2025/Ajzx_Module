let resultsDiv = document.getElementById('results');
let search = document.getElementById("search").addEventListener('click', grabData);

async function grabData() {
    
    try {
        let input = document.getElementById("input").value;

        if (!input == "") {
            resultsDiv.innerHTML = " ";
            const apiUrl = "https://data.winnipeg.ca/resource/tx3d-pfxq.json?" + `$where=park_name LIKE '%${input}%'` + "&$order=park_id DESC" + "&$limit=10";

            const endcodedUrl = encodeURI(apiUrl);
            const response = await fetch(endcodedUrl);
            const data = await response.json();
            console.log(data);

             data.forEach(function(item) {
                // Access variables using dot notation or bracket notation
                console.log("Park Name:", item.park_name);
                console.log("Park Description:", item.location_description);
                let div = document.createElement('div');
                let p1 = document.createElement("p");
                let p2 = document.createElement("p");
                div.innerHTML = `Park Name: ${item.park_name}`;
                p1.innerHTML = `Neighbourhood: ${item.neighbourhood}`;
                p2.innerHTML = `Description: ${item.location_description}`;
                resultsDiv.append(div);
                div.append(p1);
                div.append(p2);
                
             });
            
            
        } else {
            alert("Error: Please enter a letter or text to search for a park");
        }
    } catch (error) {
        console.log(error);
    }

    input.value = "";
}
