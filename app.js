const gallery=[
 {src:'assets/e2_main.webp',title:'E-2/12, DLF Phase 1',place:'Gurugram'},
 {src:'assets/dlf2.webp',title:'L-17A/5, DLF Phase 2',place:'Gurugram'},
 {src:'assets/c429.webp',title:'C-429A, Sushant Lok 1',place:'Gurugram'},
 {src:'assets/c398.webp',title:'C-398, Sushant Lok 1',place:'Gurugram'},
 {src:'assets/c388.webp',title:'C-388, Sushant Lok 1',place:'Gurugram'},
 {src:'assets/maple.webp',title:'G-703, Maple Heights',place:'Gurugram'},
 {src:'assets/bancourt.webp',title:'A-204, Surya Bancourt',place:'Gurugram'},
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

// RESTORED MAIN PROPERTY GALLERY — retained in addition to the approved legacy belt.
const portfolioProperties=[
 {img:'assets/e2_main.webp',name:'E-2/12, DLF Phase 1',meta:'5BHK Duplex Villa · Approx. 4,500 sq. ft.',url:'https://drive.google.com/drive/folders/12Fkm4ZA32VaR7Qtp1VCOctJ3OmgnMsfh'},
 {img:'assets/dlf2.webp',name:'L-17A/5, DLF Phase 2',meta:'Four Independent 3BHK Floors · Approx. 1,700 sq. ft. each',url:'https://drive.google.com/drive/folders/1AnB5TJQ3g5quT5NgHQKTtAHsCqZbDGkQ'},
 {img:'assets/c429.webp',name:'C-429A, Sushant Lok 1',meta:'3BHK · Ground Floor · Approx. 1,700 sq. ft.',url:'https://drive.google.com/drive/folders/1VB-iooV0EzAtD3MBpcnwI8BwSN7Xe6_N'},
 {img:'assets/c398.webp',name:'C-398, Sushant Lok 1',meta:'3BHK · Second Floor · Exclusive Terrace',url:'https://drive.google.com/drive/folders/1wvzUyhy89ywLLrZpd7SxcA5_FShVWBs3'},
 {img:'assets/c388.webp',name:'C-388, Sushant Lok 1',meta:'3BHK · First Floor · Approx. 1,700 sq. ft.',url:'https://drive.google.com/drive/folders/1PXS-1MVWVIUdny_MQcqaNh_noEa6pqeK'},
 {img:'assets/maple.webp',name:'G-703, Maple Heights',meta:'3BHK · 7th Floor · Park Facing · Sushant Lok 1',url:'https://drive.google.com/drive/folders/1Ej-pZneVL7DTQkaY12_1Q05aRWeHBQKm'},
 {img:'assets/bancourt.webp',name:'A-204, Surya Bancourt',meta:'4-Bedroom Duplex · Approx. 3,500 sq. ft.',url:'https://drive.google.com/drive/folders/1bDDiuL8sxmgTb8uKvnlkjx06P5G8Niqr'},
 {img:'assets/shanti-1.jpg',name:'Shaanti Bhawan & Wadhwa Residency',meta:'Kankhal, Haridwar · Residential & Hospitality',url:'stays.html'},
 {img:'assets/jalsa-1.jpg',name:'Jalsa Mall, Jaipur',meta:'Landmark commercial / destination development',url:'legacy.html'}
];
(function restoreMainPortfolio(){
 const loc=document.querySelector('.localities'); if(!loc||document.getElementById('main-gallery')) return;
 const section=document.createElement('section'); section.id='main-gallery'; section.className='portfolio';
 section.innerHTML=`<div class="portfolio-head"><p class="eyebrow">OUR PROPERTY PORTFOLIO</p><h2>FEATURED PROPERTIES & PROJECTS</h2><p>The main gallery remains part of the website. The new legacy presentation is an addition, not a replacement.</p></div><div class="portfolio-grid">${portfolioProperties.map(p=>`<article class="property-card"><img src="${p.img}" alt="${p.name}"><div><h3>${p.name}</h3><p>${p.meta}</p><a href="${p.url}" ${p.url.startsWith('http')?'target="_blank" rel="noopener"':''}>View Gallery →</a></div></article>`).join('')}</div>`;
 loc.before(section);
 const st=document.createElement('style'); st.textContent=`.portfolio{padding:52px 5vw 58px;background:#f8f1e2;border-top:1px solid #b78a3c;border-bottom:1px solid #b78a3c}.portfolio-head{text-align:center;max-width:900px;margin:0 auto 28px}.portfolio-head h2{font-size:38px;margin:8px 0;color:#6f4d1f}.portfolio-head p{font-size:16px;line-height:1.55}.portfolio-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.property-card{background:#fffaf0;border:1px solid #c9ad73;border-radius:14px;overflow:hidden;box-shadow:0 8px 20px #0001;transition:.25s}.property-card:hover{transform:translateY(-4px);box-shadow:0 14px 28px #0002}.property-card img{width:100%;height:230px;object-fit:cover;display:block}.property-card>div{padding:16px}.property-card h3{margin:0 0 6px;font-size:22px;color:#5f421e}.property-card p{margin:0 0 12px;line-height:1.45;font-size:14px}.property-card a{color:#8f641e;font-weight:700;text-decoration:none}.property-card a:hover{text-decoration:underline}@media(max-width:950px){.portfolio-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:600px){.portfolio{padding:36px 16px}.portfolio-grid{grid-template-columns:1fr}.portfolio-head h2{font-size:30px}.property-card img{height:220px}}`;
 document.head.appendChild(st);
})();
