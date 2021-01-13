let url = 'https://api.thecatapi.com/v1/images/search'
document.getElementById('breedForm').onsubmit = function (e) {
    e.preventDefault();
    let breed = document.getElementById('breedForm').elements.breed.value;
    console.log(breed)
    url+='?q='+breed;
    fetch(url).then((data)=>{
        return data.json()
    }).then((data)=>{
        let imgUrl = data[0].url;
        document.getElementById('catImage').setAttribute('src', imgUrl);
        document.getElementById('catImageDiv').setAttribute('style', 'display : block !important')
    })
}