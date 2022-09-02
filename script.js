 const dogImageDiv=document.querySelector('#dogimage');
 const dogButton=document.querySelector('#dogButton');

function dog()
{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then( response=>response.json())
    .then(json=>{
    dogImageDiv.innerHTML=`<img src='${json.message}'height=500 width=600/>`
})
}

dogButton.addEventListener("click",()=>
{
   dog();
})
