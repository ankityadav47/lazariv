let elem = document.querySelectorAll('.div-part2-right');
let firstvideo = document.querySelector('#firstVideo');
let playbutton= document.querySelector('.playbutton');
let img = document.querySelector('.part6-img');
let part6video = document.querySelector('.part6-img video');
const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});

function page2img(){
  elem.forEach((e)=>{
    e.addEventListener('mouseenter',()=>{
         gsap.to(e.childNodes[2],{
        scale:1,
      })
    })
    e.addEventListener('mouseleave',()=>{
      gsap.to(e.childNodes[2],{
        scale:0,
      })
    })
    e.addEventListener('mousemove',(dets)=>{
        gsap.to(e.childNodes[2],{
        x:dets.x - e.getBoundingClientRect().x-60,
        y:dets.y - e.getBoundingClientRect().y-100,
  
      })
    })
  
  })
}

function page3video(){
  playbutton.addEventListener("click",()=>{
    firstvideo.play();
    gsap.to(firstvideo,{
      scaleX:1,
      scaleY: 1,
      borderRadius: 0,
      ease: Expo.easeInOut,
      duration: 1.5,
      })
  })
  firstvideo.addEventListener('click',()=>{
    firstvideo.pause();
    gsap.to(firstvideo,{
      scaleX:0.8,
      scaleY:0,
      ease: Expo.easeInOut,
      duration: 1.5,
    })
  })
}

function page6video(){
  img.addEventListener('mouseenter',(e)=>{
    part6video.play();
    gsap.to(part6video,{
      opacity: 1,
    })
    gsap.to(img.childNodes[1],{
      scale: 1,
    })
    
  })
  img.addEventListener('mouseleave',(e)=>{
    part6video.pause();
    gsap.to(part6video,{
      opacity: 0,
    })
    gsap.to(img.childNodes[1],{
      scale:0,
    })
  })
  img.addEventListener('mousemove',(elem)=>{
    gsap.to(img.childNodes[1],{
      x:elem.x - img.getBoundingClientRect().x -40, 
      y:elem.y - img.getBoundingClientRect().y - 50
    })
  })
}
page2img();
page3video();
page6video();