let horses = [
    {
        horse_img: 'gallery-1-463x383',  
        horse_name: 'Arabian Horse',
        horse_price: '$70,000'
    },
    {
        horse_img: 'gallery-2-463x383', 
        horse_name: 'Quarter Horse',
        horse_price: '$23,000' 
    },
   
    {
        horse_img: 'gallery-3-463x383',  
        horse_name: 'Thoroughbred',
        horse_price: '$50,000'
    },
   
    {
        horse_img: 'gallery-4-463x383',  
        horse_name: 'Tennessee Walker',
        horse_price: '$45,500'
    },
   
    {
        horse_img: 'gallery-5-463x383',  
        horse_name: 'Appaloosa',
        horse_price: '$29,000'
    },
   
    {
        horse_img: 'gallery-6-463x383',  
        horse_name: 'Morgan Horse',
        horse_price: '$35,000'
    },
   
    {
        horse_img: 'gallery-7-463x383',  
        horse_name: 'Paint Horse',
        horse_price: '$24,000'
    },
   
    {
        horse_img: 'gallery-8-463x383',  
        horse_name: 'Warm-blood Horse',
        horse_price: '$20,000'
    },
   
    {
        horse_img: 'gallery-9-463x383',  
        horse_name: 'Miniature Horse',
        horse_price: '$10,200'
    },
   
    {
        horse_img: 'gallery-10-463x383',  
        horse_name: 'Andalusian Horse',
        horse_price: '$25,000'
    },
   
    {
        horse_img: 'gallery-11-463x383',  
        horse_name: 'Estonian Draft Horse',
        horse_price: '$20,000'
    },
   
    {
        horse_img: 'gallery-12-463x383',  
        horse_name: 'Misaki Horse',
        horse_price: '$30,000'
    }
]

horses.forEach(element => {
    console.log(element)
});

let gallerySection = document.getElementById('horse-wrapper');
let html = "";
horses.forEach(e => {
    html += `
    <div class="col-md-4 mt-4 col-lg-3">
    <div class="gallery-img">
      <img src="./images/${e.horse_img}.jpg" alt="horse" class="img-fluid">
    </div>
    <div class="gallery-content text-center">
      <h4 class="mt-3 mb-0 text-capitalize fw-bold">${e.horse_name}</h4>
      <p>${e.horse_price}</p>
  </div>
  </div>  
    `

    console.log(e)
    gallerySection.innerHTML = html;
});