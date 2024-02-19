let AllBtn = document.getElementsByClassName('seat-Btn')
let count = 0

for(const btn of AllBtn){
    btn.addEventListener('click', function (e){
        count+=1
        addInnerText('seat-number', count)
        const colorBtn= btn.innerText

        // to set color
        setColorOfTheButton(colorBtn)

        // to append details
        const getNameOfSeat= e.target.innerText
        
        const selectedPlaceContainer = document.getElementById('selected-place-container')
        const li= document.createElement('li')

        const p= document.createElement('p')
        p.innerText= getNameOfSeat
        const p1= document.createElement('p')
        p1.innerText= 'Economic'
        const p2= document.createElement('p')
        p2.innerText= '550'

        li.appendChild(p)
        li.appendChild(p1)
        li.appendChild(p2)

        const TotalPrice= count*550 
        document.getElementById('total-price').innerText= TotalPrice

        selectedPlaceContainer.appendChild(li)
    })
}