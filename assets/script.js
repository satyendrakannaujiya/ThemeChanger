  
function openNav() {
        console.log('hello');
        var element = document.querySelector('.sidebar');
        element.classList.toggle('hidden');


    }

    function closeNav() {

        var element = document.querySelector('.sidebar');
        element.classList.toggle('hidden');

    }


       function myFunction(){

         var element = document.querySelector('#mySelect').value;
          document.querySelector('.css-link').href=`./assets/${element}.css`;

         console.log(element);

       }