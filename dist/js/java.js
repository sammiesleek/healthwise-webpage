window.addEventListener('scroll', ()=>{
    const nav = document.getElementById('header')
        nav.classList.toggle('sticky');
        
        if(window.scrollY >= 20){
        alert('click')
        nav.classList.add('sticky'); 
        alert('hello')
    }
    else{ 
        nav.classList.remove('sticky')
    }
})
