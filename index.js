const url = 'https://api.thecatapi.com/v1/images/search'
function getImage(){
fetch(url).then((data)=>{
    return data.json();
}).then((data)=>{
    console.log(data);
    let imgUrl = data[0].url;
    console.log(imgUrl);
    document.getElementById('catImage').setAttribute('src', '')
    document.getElementById('catImage').setAttribute('src', imgUrl);
}).catch((error)=>{
    alert('An error occured while getting the image')
})

}