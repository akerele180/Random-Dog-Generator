const btn = documnet.querySelector('#button');
const img = document.querySelector('.image');

function generateDog(){
    fetch('https://random.dog/woof.json')
        .then(res => res.json())
        .then(data => {
            img.innerHTML = `<img src="${data.url}" />`
        })
}

img.addEventListener('click', ()=>{
    console.log('akerele');
})

btn.addEventListener('click', generateDog);