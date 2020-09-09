gsap.from('header', { opacity:0, duration:.6, y:-10 });
gsap.from('.profile-picture', { opacity:0, duration:1, delay:0, y:50 });

let width = window.innerWidth;
if(width <= 880){
    // alert(`${width}`);
    // console.log('hole')
    let myobj = document.getElementById('hamburger');
    myobj.remove();
}
