
async function getHarryPotter(){
    const url = "hp-api.onrender.com/api/characters"
    try {
        const data = await fetch(url)
        if(!data.ok){
            throw new Error("el error es:", data.status)
        }

        const dataJson = await data.json();
        console.log(dataJson)
    } catch (error) {
    }
}

export default getHarryPotter;
