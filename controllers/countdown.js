function countdown() {
    const targetDate = new Date('2024-05-01T00:00:00').getTime();
  
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  
      //veo los valores en consola
      //console.log(days);
      //console.log(hours);
      //console.logs(minutes);

      document.getElementById('days').innerHTML = days + ' Días';
      document.getElementById('hours').innerHTML = hours + ' Horas';
      document.getElementById('minutes').innerHTML = minutes + ' Minutos';
  
      if (distance < 0) {
        clearInterval(interval);
        document.getElementById('days').innerHTML = 'Expired';
        document.getElementById('hours').innerHTML = '';
        document.getElementById('minutes').innerHTML = '';
      }
    }, 1000);
  }
  
  module.exports=countdown;