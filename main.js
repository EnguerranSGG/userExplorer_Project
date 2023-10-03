let body = document.querySelector('body')

let header = document.createElement('header')
let main = document.createElement('main')
let aside = document.createElement('aside')

let ban = document.createElement("div")
ban.className = "ban";
ban.innerHTML = "<h1>userEXplorer</h1>";
header.appendChild(ban)

let templates = document.createElement('section')
templates.className = "templates"
templates.innerHTML = "";
aside.appendChild(templates)

body.appendChild(header);
body.appendChild(main);
body.appendChild(aside);


fetch("https://reqres.in/api/users?page=1")
    .then(function (resp) {
        return resp.json();
    })

    .then(function (data) {

        const allData = []
        allData.push(data)
        console.log(allData[0].data)

        allData[0].data.forEach(user => {
            let template = document.createElement('div')
            template.innerHTML = `<div class="carte"><img src="${user.avatar}" alt="${user.last_name}"/>
        <p>Prénom : ${user.first_name}</p>
        <p>Nom : ${user.last_name}</p>
        <p>e-mail : ${user.email}</p>
        <button id="btn${user.id}">Voir plus</button></div>
        <div class="ameno${user.id}"><div><img src="${user.avatar}" alt="${user.last_name}"/>
        <p class="descri${user.id}"></p>
        <p> Contacter > <a href="mailto:${user.email}"> ${user.first_name} </a></p>
        <button id="btn_close${user.id}">Fermer</button></div></div>`
            templates.appendChild(template)
        })

        const description1 = document.querySelector(".ameno1")
        const btn1 = document.getElementById("btn1")
        const descri1 = document.querySelector(".descri1")
        btn1.addEventListener("click", () => {
            description1.className = 'ameno_appear'
            descri1.innerHTML = "Growth hacker";
        })

        const description2 = document.querySelector(".ameno2")
        const btn2 = document.getElementById("btn2")
        const descri2 = document.querySelector(".descri2")
        btn2.addEventListener("click", () => {
            description2.className = 'ameno_appear';
            descri2.innerHTML = "Responsable RH";
        })

        const description3 = document.querySelector(".ameno3")
        const btn3 = document.getElementById("btn3")
        const descri3 = document.querySelector(".descri3")

        btn3.addEventListener("click", () => {
            description3.className = 'ameno_appear';
            descri3.innerHTML = "Business developer";
        })

        const description4 = document.querySelector(".ameno4")
        const btn4 = document.getElementById("btn4")
        const descri4 = document.querySelector(".descri4")
        btn4.addEventListener("click", () => {
            description4.className = 'ameno_appear';
            descri4.innerHTML = "Responsable comptabilité";
        })

        const description5 = document.querySelector(".ameno5")
        const btn5 = document.getElementById("btn5")
        const descri5 = document.querySelector(".descri5")
        btn5.addEventListener("click", () => {
            description5.className = 'ameno_appear';
            descri5.innerHTML = "Développeur Front-end";
        })

        const description6 = document.querySelector(".ameno6")
        const btn6 = document.getElementById("btn6")
        const descri6 = document.querySelector(".descri6")

        btn6.addEventListener("click", () => {
            description6.className = 'ameno_appear';
            descri6.innerHTML = "Responsable RH adjoint";

        })

        const btnClose1 = document.getElementById('btn_close1')
        btnClose1.addEventListener("click", () => {
            description1.className = 'ameno1';
        })

        const btnClose2 = document.getElementById('btn_close2')
        btnClose2.addEventListener("click", () => {
            description2.className = 'ameno2';
        })

        const btnClose3 = document.getElementById('btn_close3')
        btnClose3.addEventListener("click", () => {
            description3.className = 'ameno3';
        })

        const btnClose4 = document.getElementById('btn_close4')
        btnClose4.addEventListener("click", () => {
            description4.className = 'ameno4';
        })

        const btnClose5 = document.getElementById('btn_close5')
        btnClose5.addEventListener("click", () => {
            description5.className = 'ameno5';
        })

        const btnClose6 = document.getElementById('btn_close6')
        btnClose6.addEventListener("click", () => {
            description6.className = 'ameno6';
        })

    });


fetch("https://reqres.in/api/users?page=2")
    .then(function (resp) {
        return resp.json();
    })

    .then(function (data) {
        const allData2 = []
        allData2.push(data)
        console.log(allData2[0].data[0].email)

        allData2[0].data.forEach(user => {
            let template2 = document.createElement('div')
            template2.innerHTML = `<div class="carte"><img src="${user.avatar}" alt="${user.last_name}"/>
        <p>Prénom : ${user.first_name}</p>
        <p>Nom : ${user.last_name}</p>
        <p>e-mail : ${user.email}</p>
        <button id="btn${user.id}">Voir plus</button></div>
        <div class="ameno${user.id}"><div><img src="${user.avatar}" alt="${user.last_name}"/>
        <p class="descri${user.id}"></p><p> Contacter >
        <a href="mailto:${user.email}"> ${user.first_name} </a></p>
        <button id="btn_close${user.id}">Fermer</button></div></div>`
            templates.appendChild(template2)
        });

        const description7 = document.querySelector(".ameno7")
        const btn7 = document.getElementById("btn7")
        const descri7 = document.querySelector(".descri7")
        btn7.addEventListener("click", () => {
            description7.className = 'ameno_appear';
            descri7.innerHTML = "UI designer";
        })

        const description8 = document.querySelector(".ameno8")
        const btn8 = document.getElementById("btn8")
        const descri8 = document.querySelector(".descri8")
        btn8.addEventListener("click", () => {
            description8.className = 'ameno_appear';
            descri8.innerHTML = "Assistant comptabilité";
        })

        const description9 = document.querySelector(".ameno9")
        const btn9 = document.getElementById("btn9")
        const descri9 = document.querySelector(".descri9")
        btn9.addEventListener("click", () => {
            description9.className = 'ameno_appear';
            descri9.innerHTML = "Directeur";
        })

        const description10 = document.querySelector(".ameno10")
        const btn10 = document.getElementById("btn10")
        const descri10 = document.querySelector(".descri10")
        btn10.addEventListener("click", () => {
            description10.className = 'ameno_appear';
            descri10.innerHTML = "Developpeur Full-Stack";
        })

        const description11 = document.querySelector(".ameno11")
        const btn11 = document.getElementById("btn11")
        const descri11 = document.querySelector(".descri11")
        btn11.addEventListener("click", () => {
            description11.className = 'ameno_appear';
            descri11.innerHTML = "Hôte d'acceuil";

        })

        const description12 = document.querySelector(".ameno12")
        const btn12 = document.getElementById("btn12")
        const descri12 = document.querySelector(".descri12")
        btn12.addEventListener("click", () => {
            description12.className = 'ameno_appear';
            descri12.innerHTML = "Développeuse Back-end";

        })

        const btnClose7 = document.getElementById('btn_close7')
        btnClose7.addEventListener("click", () => {
            description7.className = 'ameno7';
        })

        const btnClose8 = document.getElementById('btn_close8')
        btnClose8.addEventListener("click", () => {
            description8.className = 'ameno8';
        })

        const btnClose9 = document.getElementById('btn_close9')
        btnClose9.addEventListener("click", () => {
            description9.className = 'ameno9';
        })

        const btnClose10 = document.getElementById('btn_close10')
        btnClose10.addEventListener("click", () => {
            description10.className = 'ameno10';
        })

        const btnClose11 = document.getElementById('btn_close11')
        btnClose11.addEventListener("click", () => {
            description11.className = 'ameno11';
        })

        const btnClose12 = document.getElementById('btn_close12')
        btnClose12.addEventListener("click", () => {
            description12.className = 'ameno12';
        })
    })

