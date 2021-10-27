//Offer Section
let horses = [
    {
        header: 'Horse Riding Classes',
        horse_img: 'we-offer-img-01-391x252',
        read: 'Read More'
    },
    {
        header: 'Horse Grooming',
        horse_img: 'we-offer-img-02-391x252',
        read: 'Read More'
    },
    {
        header: 'Horse Grooming',
        horse_img: 'we-offer-img-03-391x252',
        read: 'Read More'
    }
]

horses.forEach(element => {
    console.log(element)
});

let offerSection = document.getElementById('horse-wrapper');
let html = "";
horses.forEach(e =>{
    html += `
    <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="mb-5">
                        <div class="position-relative">
                            <img src="./images/${e.horse_img}.jpg" alt="" class="img-fluid w-100">
                        </div>
                        <div class="item-content text-center">
                            <h4 class="mt-3 mb-0 text-capitalize fw-bold">${e.header}</h4>
                           <a href="#" class="text-decoration-none text-capitalize">${e.read}</a>
                        </div>
                    </div>
                </div>
    `

    console.log(e);

    offerSection.innerHTML = html;
});

