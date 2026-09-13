const gallery=[
 {src:'assets/shanti-1.jpg',title:'Shaanti Bhawan & Wadhwa Residency',place:'Kankhal, Haridwar'},
 {src:'assets/shanti-2.jpg',title:'Shaanti Bhawan — Exterior',place:'Haridwar'},
 {src:'assets/shanti-3.jpg',title:'Shaanti Bhawan — Courtyard',place:'Haridwar'},
 {src:'assets/jalsa-1.jpg',title:'Jalsa Mall',place:'Jaipur'},
 {src:'assets/jalsa-2.jpg',title:'Jalsa Mall — Main Façade',place:'Jaipur'},
 {src:'assets/jalsa-3.jpg',title:'Jalsa Mall — Frontage',place:'Jaipur'},
 {src:'assets/jalsa-4.jpg',title:'Jalsa Mall — Landmark Development',place:'Jaipur'},
 {src:'assets/jalsa-5.jpg',title:'Jalsa Mall — Urban Destination',place:'Jaipur'}
];
let idx=0; const main=document.getElementById('galleryMain'),title=document.getElementById('galleryTitle'),place=document.getElementById('galleryPlace'),counter=document.getElementById('counter'),thumbs=document.getElementById('thumbs'),frame=document.querySelector('.gallery-frame');
function render(){const g=gallery[idx];frame.classList.remove('fade');void frame.offsetWidth;frame.classList.add('fade');main.src=g.src;title.textContent=g.title;place.textContent=g.place;counter.textContent=String(idx+1).padStart(2,'0')+' / '+String(gallery.length).padStart(2,'0');[...thumbs.children].forEach((b,i)=>b.style.opacity=i===idx?'1':'.55')}
gallery.forEach((g,i)=>{let b=document.createElement('button');b.innerHTML=`<img src="${g.src}" alt="${g.title}">`;b.onclick=()=>{idx=i;render()};thumbs.appendChild(b)});render();
setInterval(()=>{idx=(idx+1)%gallery.length;render()},3000);document.getElementById('next').onclick=()=>{idx=(idx+1)%gallery.length;render()};document.getElementById('prev').onclick=()=>{idx=(idx-1+gallery.length)%gallery.length;render()};
for(const b of document.querySelectorAll('.stay-tabs button'))b.addEventListener('click',()=>{document.querySelectorAll('.stay-tabs button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')});
document.getElementById('searchBtn').addEventListener('click',()=>{const st=document.getElementById('stayType').value;if(st==='short')location.href='stays.html';else if(st==='long')location.href='annual.html';else document.getElementById('properties').scrollIntoView({behavior:'smooth'})});