 const dogImageDiv=document.querySelector('#dogimage');

fetch('https://dog.ceo/api/breeds/image/random').then( response=>response.json())
.then(json=>{
    dogImageDiv.innerHTML=`<img src='${json.message}'/>`
})