/* const data = [
    "Gergely Kiss",
    "Krisztián Bui",
    "Buczkó Balázs",
    "András Varga",
    "Borbála Teréz Kovács"

];

*/
const data = [

    {
        name: "Gergely Kiss",
        favoriteFood:"csirke/rizs"
    },
    {
        name: "Krisztián Bui",
        favoriteFood:"banán"
    },
    {
        name: "Buczkó Balázs",
        favoriteFood:"kolbászos rájás pizza"
    },
    {
        name: "Borbála Teréz Kovács",
        favoriteFood:"avokádó"
    },
    {
        name: "Benett Viszokai",
        favoriteFood:"alma"
    },
    {
        name: "Pörneczi Kriszián",
        favoriteFood:"almáspite"
    },
]
 function loadEvent() {
    console.log("Az oldal betöltődött")

    const root = document.querySelector("#root")
    
    for (const frontendstudent of data) {
        root.insertAdjacentHTML("beforeend", `
            <section>
                <h1>${frontendstudent.name}</h1>
                <p>${frontendstudent.favoriteFood}</p>
            </section>
        
        `)
        
    }
  

}
window.addEventListener("load", loadEvent)
