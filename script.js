let parks_list = document.getElementById('parks-list');
let search = document.getElementById("search").addEventListener('click', grabData);


async function grabData() {
   try {
        let input = document.getElementById("input").value;
        const apiUrl = "https://data.winnipeg.ca/resource/tx3d-pfxq.json?" + `$where=park_name LIKE '%${input}%'` + "&$order=park_id DESC" + "&$limit=10";
        const endcodedUrl = encodeURI(apiUrl);
        const response = await fetch(endcodedUrl);
        const data = await response.json();
        console.log(data);


   } catch (error) {
    console.log(error);
   }
}
