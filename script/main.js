let AllBtn = document.getElementsByClassName('seat-Btn')
let count = 0
let getSeatCount = document.getElementById('seats').innerText
let seatCount = parseInt(getSeatCount)

for (const btn of AllBtn) {
    btn.addEventListener('click', function (e) {
        count += 1
        addInnerText('seat-number', count)

        enableDocument()
        seatCount = seatCount - 1
        addInnerText('seats', seatCount)
        const colorBtn = btn.innerText

        // to set color
        setColorOfTheButton(colorBtn)

        // to append details
        const getNameOfSeat = e.target.innerText

        const selectedPlaceContainer = document.getElementById('selected-place-container')
        const li = document.createElement('li')

        const p = document.createElement('p')
        p.innerText = getNameOfSeat
        const p1 = document.createElement('p')
        p1.innerText = 'Economic'
        const p2 = document.createElement('p')
        p2.innerText = '550'

        li.appendChild(p)
        li.appendChild(p1)
        li.appendChild(p2)

        // total price
        const TotalPrice = count * 550
        document.getElementById('total-price').innerText = TotalPrice

        grandTotalCost()

        selectedPlaceContainer.appendChild(li)
    })
}

function grandTotalCost() {

    const total = document.getElementById('total-price').innerText;
    const totalPrice = parseInt(total)

    addInnerText('grand-total', totalPrice)

}
function applyBtn() {
    const getCoupon = document.getElementById('coupon-apply')
    const total = document.getElementById('total-price').innerText;
    const totalPrice = parseInt(total)

    if (getCoupon.value === 'NEW15') {
        addInnerText('grand-total', totalPrice - (totalPrice * .15))
    }
    else if (getCoupon.value === 'Couple 20') {
        addInnerText('grand-total', totalPrice - (totalPrice * .20))
    }
    else {
        alert('You do not have an appropriate Coupon')
    }
}
function enableDocument() {
    const countSeats = document.getElementById('seat-number').innerText
    const pName= document.getElementById('passengerName')
    const number = document.getElementById('PhoneNumber')
    const mail = document.getElementById('mailId')
    const nextBtn = document.getElementById('nextBtn')

    number.addEventListener('input', function () {
        if (countSeats === '1' && !isNaN(Number(number.value))) {
            nextBtn.disabled = false
            nextBtn.addEventListener('click', function () {
                document.getElementById('hidden-modal').classList.remove('hidden')

                const Continue = document.getElementById('continueBtn')
                Continue.addEventListener('click', function () {
                    document.getElementById('hidden-modal').classList.add('hidden')
                })
            })
        }
        else {
            nextBtn.disabled = true
        }
    })
    pName.addEventListener('input', function () {
        if (countSeats === '1' && !isNaN(Number(number.value))) {
            nextBtn.disabled = false
            nextBtn.addEventListener('click', function () {
                document.getElementById('hidden-modal').classList.remove('hidden')

                const Continue = document.getElementById('continueBtn')
                Continue.addEventListener('click', function () {
                    document.getElementById('hidden-modal').classList.add('hidden')
                })
            })
        }
        else {
            nextBtn.disabled = true
        }
    })
    mail.addEventListener('input', function () {
        if (countSeats === '1' && !isNaN(Number(number.value))) {
            nextBtn.disabled = false
            nextBtn.addEventListener('click', function () {
                document.getElementById('hidden-modal').classList.remove('hidden')

                const Continue = document.getElementById('continueBtn')
                Continue.addEventListener('click', function () {
                    document.getElementById('hidden-modal').classList.add('hidden')
                })
            })
        }
        else {
            nextBtn.disabled = true
        }
    })

}
