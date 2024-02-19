function buyTicket() {
    hide('information');
    show('for-show');
    show('seat-information');
    getInnerText('left-seat');
}
let n = 0;
const seatClass = document.getElementsByClassName('seat');
for (const seat of seatClass) {
    seat.addEventListener('click', function (event) {
        if(n==4){
            alert('Only 4 ticket you can buy.')
            return;
        }
        seat.classList.add('disableButton');
        seat.setAttribute('disabled',true);
        //show user information field
        show('user-d')
        //for left seat count
        n++;
        console.log(n);
        const allSeat = document.getElementById('left-seat');
        const seatText = allSeat.childNodes[1].innerText;
        const leftSeat = parseInt(seatText);
        const currentSeat = leftSeat - 1;
        //set current seat
        allSeat.childNodes[1].innerText = currentSeat;
        //user selected seat number
        const seatContainer = document.getElementById('user-select').childNodes[1].childNodes[1].innerText;
        const selectedSeatByUser = parseInt(seatContainer);
        const updateSeatAmount = selectedSeatByUser + 1;
        //set selected seat number
        document.getElementById('user-select').childNodes[1].childNodes[1].innerText = updateSeatAmount;
        if (updateSeatAmount === 4) {
            show('coupon');
        }
        //show seat name
        const showDtails = document.getElementById('amaount-container');
        const p = document.createElement('p')
        const p2 = document.createElement('p')
        p2.innerText = "Ac_business"
        const p3 = document.createElement('p')
        //for price
        const perTicket = getInnerText('per-ticket');
        p3.innerText = perTicket + ' ' + 'Taka';
        p.innerText = seat.innerText;
        showDtails.appendChild(p);
        showDtails.appendChild(p2);
        showDtails.appendChild(p3);
        //
        const totalAmaount = getInnerText('total-amaount');
        const total = totalAmaount + perTicket;
        setInnerText('total-amaount', total)
        //grand total
        const grandAmount = getInnerText('grand-total');
        const grandTotal = grandAmount + perTicket;
        setInnerText('grand-total', grandTotal)

        //coupon
        const applyButton = document.getElementById('apply-button');
        document.getElementById('coupon-input').addEventListener('keyup', function (event) {
            const userPress = event.target.value;
            if (userPress == 'NEW15' || userPress == 'Couple20') {
                applyButton.classList.remove('hidden');
            } else {
                applyButton.classList.add('hidden', true);
            }
        })
        
        applyButton.addEventListener('click',function(){
            const newYear = (grandTotal*15)/100;
           const discounPrice = grandTotal - newYear;
           console.log(discounPrice);
           setInnerText('grand-total', discounPrice)
           show('section-dis');
         const discountContainer = document.getElementById('discount');
         discountContainer.innerText = newYear;
        })
    })
}

function forApply(){
    hide('coupon')
}