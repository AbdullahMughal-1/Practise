const slider = document.getElementById('slider')
const bill = document.getElementById("billing-toggle")
const pagepreview = document.getElementById('pageviews-text')
const price = document.getElementById('price-text')


const pricingData = [
  { views: "10K", price: 8 },
  { views: "50K", price: 12 },
  { views: "80K", price: 16 },
  { views: "100K", price: 20 },
  { views: "150K", price: 25 },
];


function updatePricing(){
    let currentvalue = slider.value

    let baseprice = pricingData[currentvalue].price
    let view = pricingData[currentvalue].views

    let finalprice = baseprice
    if(bill.checked === true){
        finalprice = baseprice * 0.75
    }
    pagepreview.textContent = `${view} PAGEVIEWS`;
     price.innerHTML = `$${finalprice.toFixed(2)} <span class="month"> / month</span>`;
}

slider.addEventListener('input', updatePricing);
toggle.addEventListener('change', updatePricing);

updatePricing()