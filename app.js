let usd =document.getElementById('usd')
let uzs =document.getElementById('uzs')
let icon =document.getElementById('icon')



icon.addEventListener('click', ()=>{
    let val = usd.value;
    usd.value =uzs.value;
    uzs.value=val;
    
    let val2 = usd.placeholder;
    usd.placeholder =uzs.placeholder;
    uzs.placeholder=val2;




})




let request = new XMLHttpRequest()


usd.addEventListener('input', ()=>{
    if(request.readyState ==4){
        let data =JSON.parse(request.responseText)
        console.log(data);
        let kurs =data[0].Rate


        let val =usd.value
        let natija = val * kurs
        uzs.value =natija
        
    }
})


uzs.addEventListener('input', ()=>{
    if(request.readyState ==4){
        let data =JSON.parse(request.responseText)
        console.log(data);
        let kurs =data[0].Rate


        let val = uzs.value
        let natija = val / kurs
        usd.value =natija
        
    }
})



request.open('GET', 'https://cbu.uz/uz/arkhiv-kursov-valyut/json/')
request.send()







