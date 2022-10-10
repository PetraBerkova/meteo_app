fetch('https://api.open-meteo.com/v1/forecast?latitude=48.63&longitude=19.10&hourly=temperature_2m,relativehumidity_2m,surface_pressure,windspeed_10m&past_days=3')
.then(response=>response.json())
.then(datas=>{
    console.log(datas);
    console.log(datas.hourly.temperature_2m)
  let teplota =  document.querySelector('#teplota');
  let time = document.querySelector('#time');
  let vietor = document.querySelector('#vietor');
  let tlak= document.querySelector('#tlak');
  let vlhkost = document.querySelector('#vlhkost');

  datas.hourly.time.forEach( tim => {
    let x = document.createElement('p');
    x.innerText= tim
    time.appendChild(x);
});

    
   datas.hourly.temperature_2m.forEach( tem => {
       let x = document.createElement('p');
       x.innerHTML= tem;
       teplota.appendChild(x);
   });

   datas.hourly.windspeed_10m.forEach( win => {
    let x = document.createElement('p');
    x.innerHTML= win;
    vietor.appendChild(x);
});

datas.hourly.surface_pressure.forEach( pre => {
    let x = document.createElement('p');
    x.innerHTML= pre;
    tlak.appendChild(x);
});

datas.hourly.relativehumidity_2m.forEach( hum => {
    let x = document.createElement('p');
    x.innerHTML= hum;
    vlhkost.appendChild(x);
});




//neprisla som na to ako tam dostat data do grafu inak ako vypisat rucne

   const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: '',
        datasets: [{
            label: 'Denná Teplota',
            data:[ ],
            backgroundColor:'transparent',
            borderColor:'red',
            borderWidth: 4
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

})

let celsia = document.querySelector('#celsia');
let faradai = document.querySelector('#faradai');
let btn = document.querySelector('#btn');





celsia.addEventListener('change', function(){
    let a =   document.querySelector('#celsia').value;
    let y = (9/5)*a+32;
   document.querySelector('#faradai').value = y;
})

faradai.addEventListener('change', function(){
let b =   document.querySelector('#faradai').value;
 let z = (5/9)*b-32;
 document.querySelector('#celsia').value = z;
 })

 btn.addEventListener('click',function(){

    let c = document.querySelector('#huminidy').value;
    let b =   document.querySelector('#faradai').value;
    console.log(b);
    console.log(c)
    let index = -42.379 + (2.04901523*b)+(10.14333127*c)-(0.222475541*b*c)-(6.83783*0.001*(b*b))-(5.481717*0.01*(c*c))+(1.22874*0.001*(b*b)*c)+(8.5282*0.0001*b*(c*c))-(1.99*0.000001*(b*b)*(c*c))
    document.querySelector('#vypocet').innerText=index
 }
    
 )