const fetch = require("node-fetch");
module.export = [
    async function gett(url) {
        fetch(url)
        .then(res => res.text())
        .then(body => console.log(body))
}];

//? 
// pra nn ficar na index né sua baitola