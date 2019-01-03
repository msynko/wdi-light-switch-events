
const lightswitch = document.querySelector('.switch');
const light = document.querySelector('.light');
const text = document.querySelector('h1')

 lightswitch.addEventListener('click', function() {
   if (lightswitch.className === 'switch off') {
     lightswitch.className = 'switch on';
     light.className = 'light';
     text.innerText = 'It\'s so bright in here!';
   }
   else if (lightswitch.className === 'switch on') {
     lightswitch.className = 'switch off';
     light.className = 'dark';
     text.innerText = 'Hey, who turned off the lights?';
   }
 });
