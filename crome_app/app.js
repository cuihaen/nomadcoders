const h1 = document.querySelector('.hello h1');

function handleTitleClick(){
   if( h1.className = 'clicked'){
    h1.className = '';
   }else{
    h1.className = "clicked";
   }
}

h1.addEventListener('click', handleTitleClick);

// step01. find the element.
// step02. listen for an event.
// step03. react to that event.(reaction means show something or hide something or change the color of something)