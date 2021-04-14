//console.log(links[0].linkPost) donne les 1er lien : Heruko
//console.log(links[1].linkPost) donne les 2emes liens : localhost://8082 eclipse

const links = [
    {
    key: 1,
    linkGet : "https://logement-app-api.herokuapp.com/logements",
    linkPost : "https://logement-app-api.herokuapp.com/logement"
},

{
key: 2,
linkGet : "http://localhost:8082/logements",
linkPost : "http://localhost:8082/logement"
}

];
export default links;