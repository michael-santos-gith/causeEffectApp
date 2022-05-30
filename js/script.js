const datas = document.querySelectorAll("#display-result p");
const users = document.querySelectorAll("#container-user li");

const people = [
    {name:"Patrick Williams", street:"Dunedin", city:"Tasman", country:"Australia", telephone:"(813)6566128", birthday:"17/12/1982"},
    {name:"Sam Brady", street:"Cashel", city:"Monaghan", country:"Northern Ireland", telephone:"0616418290", birthday:"21/11/1981"},
    {name:"Pinja Laurila", street:"Heinola", city:"Uusimaa", country:"Finland", telephone:"03913861", birthday:"29/07/1975"},
    {name:"Roberto Griffin", street:"Cary", city:"Alabama", country:"United States of America", telephone:"(639)6714890", birthday:"19/01/1955"},
    {name:"Ellen Torres", street:"Newry", city:"Tyne and Wear", country:"England", telephone:"015396 66203", birthday:"06/01/1957"},
    {name:"Gökhan Oraloğlu", street:"Karabük", city:"Osmaniye", country:"Turkey", telephone:"(213)8537691", birthday:"26/10/1994"},
    {name:"Oğuzhan Paksüt", street:"Eskişehir", city:"Sakarya", country:"Turkey", telephone:"(440)5422890", birthday:"03/01/1978"},
    {name:"Quim Rocha", street:"Fortaleza", city:"Roraima", country:"Brasil", telephone:"(83) 67170637", birthday:"13/11/1988"}
]

users.forEach((currentValue, index) => {
    if (index === 0) {
        currentValue.addEventListener('click', () => {
            datas[0].textContent = people[index].name;
            datas[1].textContent = people[index].street;
            datas[2].textContent = people[index].city;
            datas[3].textContent = people[index].country;
            datas[4].textContent = people[index].telephone;
            datas[5].textContent = people[index].birthday;
        })
        
    }
})