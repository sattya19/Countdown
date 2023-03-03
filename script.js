const countdown =() =>{
    const countDate = new Date ('May 19,2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap  = countDate - now;
    
    const seconds = 1000;
    const minutes = seconds*60;
    const hours = minutes* 60;
    const days= hours * 24;
   



    const textDays = Math.floor(gap / days);
    const textHours = Math.floor((gap % days)/hours);
    const textMinutes = Math.floor((gap % hours )/minutes);
    const textSeconds = Math.floor((gap % minutes)/seconds);

    console.log(textDays);


    document.querySelector('.days').innerText= textDays;
 
    document.querySelector('.hours').innerText= textHours;
    document.querySelector('.minutes').innerText= textMinutes;
    document.querySelector('.seconds').innerText= textSeconds;


}
setInterval(countdown,1000);