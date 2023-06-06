const stateSelect=document.getElementById('stateSelect')
const citySelect=document.getElementById('citySelect')
const cityLocations = {
    KA:["Bangalore", "Mysore", "Hubli", 'Bijapur', 'Bagalkot', 'Gulbarga'],
    MH:["Mumbai", "Pune", "Satata", 'Solapur', 'Kolhapur', 'Sangli'],
    AP:["Vijaywada", "Visakhapatnam", "Chittor", 'Nellore', 'Kolhapur', 'Eluru']
    }

stateSelect.addEventListener('change', function(){
    citySelect.innerHTML=''
    const selectedState=stateSelect.value;
    if(selectedState){
        const cities= cityLocations[selectedState]
        cities.forEach((cityData)=>{
            const cityoption=document.createElement('option')
            cityoption.value=cityData
            cityoption.textContent=cityData
            citySelect.appendChild(cityoption)
        })
    }
})