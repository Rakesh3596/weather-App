const apiKey="23a8a0e381237a77487955c104e619b9"



async function getdata(){
    let city = document.getElementById('city').value;
    // let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    let url2=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`

    try{
        let res= await fetch(url2)
        let wet=await res.json()
        displayData(wet)
        console.log(wet)
        
    }catch (err){  
        let inp=document.getElementById('city')
        inp.value=""
        
        let iframe= document.getElementById('gmap_canvas');
        iframe.src="";

        let con=document.getElementById('cont')
        con.innerHTML="";
        
        let img=document.createElement('img')
        img.src="https://www.memesmonkey.com/images/memesmonkey/9a/9ad82e6a79545671947f04f1116bd04a.jpeg"
        fail.append(img)
        alert('Invalid Place')
        // window.location.reload() ; 
        
     }

}



function displayData(data){
    let tit=document.getElementById('tit')
    tit.innerHTML=""

    let fail= document.getElementById('fail')
        fail.innerHTML="";


    let h3= document.createElement('h3') ;
        h3.innerText=data.city.name;
        tit.append(h3)
        
    let con=document.getElementById('cont')
    con.innerHTML="";
    
        

        let iframe= document.getElementById('gmap_canvas');
        iframe.src=`https://maps.google.com/maps?q=${data.city.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`         

        for(let i=0; i<data.list.length; i=i+8){
            let card= document.createElement('div')
        let p1= document.createElement('p') ;
        p1.innerText=`Date :${data.list[i].dt_txt}`;

        let p2= document.createElement('p') ;
        p2.innerText=`current temp :${Math.floor(data.list[i].main.temp-273.15)} Degree Celsius`;

        let p3= document.createElement('p') ;
        p3.innerText=`Max temp: ${Math.floor(data.list[i].main.temp_max-273.15)} Degree Celsius`

        let p4= document.createElement('p') ;
        p4.innerText=`Max temp: ${Math.floor(data.list[i].main.temp_min-273.15)}Degree Celsius`

        let p5= document.createElement('p') ;
        p5.innerText=`Weather: ${data.list[i].weather[0].main}`

        card.append(p1,p2,p3,p4,p5)
        con.append(card)
        } 


        let inp=document.getElementById('city')
        inp.value=""
        

           
        
    
}


function getLocationWeather() {
    navigator.geolocation.getCurrentPosition(success);
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude);
      console.log(longitude);
    }
  }

  getLocationWeather()


