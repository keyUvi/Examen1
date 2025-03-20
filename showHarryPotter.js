import getHarryPotter from "./getHarryPotter.js";

async function showHarryPotter(){
    const data = await getHarryPotter();
    const div = document.getElementById("personajes");

    data.forEach(e => {
        let pe = document.createElement("p");
        pe.innerHTML = e.name;
        div.appendChild(pe);
        
    });
}

export default showHarryPotter; 