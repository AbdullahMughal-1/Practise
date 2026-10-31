async function fetchdata() {
    const responce = await fetch('./data.json')
    const data = await responce.json()


    const datamap = data.map((item) =>(
        item.amount
    ))

    const maxAmount = Math.max(...datamap) 
    console.log(maxAmount)

    const dayarr = ['sun' , 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
    const todaystring=[new Date().getDay()]
    data.forEach(element => {
        const dayContainer = document.querySelector('.' +element.day )
        const bar = dayContainer.querySelector('.height')
        const heightpercentage = (element.amount / maxAmount) *100

        bar.style.height = `${heightpercentage}%`
    });





}



fetchdata()

































// async function fetchData() {
//     const responce = await fetch('./data.json')
//     const data = await responce.json()
    
//     console.log(data)
//     let amounts = data.map((value)=>(
//         value.amount
// )  )

// const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
// const todayString = days[new Date().getDay()]

// const maxAmount = Math.max(...amounts)
// console.log(maxAmount);

// data.forEach(item => { 
//     const dayContainer =document.querySelector('.' + item.day)
//     const bar = dayContainer.querySelector(".height")
//     const heightPercentage = (item.amount / maxAmount *100);
    
//     bar.style.height = `${heightPercentage}%`

    
    
// });


    
// }

// fetchData()

