const form = document.querySelector('#search-form > form')
const input : HTMLInputElement | null = document.querySelector('#input-loc')
const sectionTimeInfo = document.querySelector('#time-info')




form?.addEventListener('submit',async (event)=>{
    event.preventDefault();
    console.log('Submit')

    if(input === null || !sectionTimeInfo){ return }
    const localization = input.value

    if(localization.length <3){
        alert(' Precisa ter 3 letras')

        return
    }

   try {
     const response = await fetch(``)
    const data = await response.json()

    console.log(data)

    const infos = {
        temp:Math.round(data.main.temp),
        loc:data.name,
        icon:`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    }

  

    sectionTimeInfo.innerHTML = `
           <div class="time-data">
                <h2>${infos.loc}</h2>

                <span>${infos.temp} </span>
            </div>


            <img src="${infos.icon}" >
    `
   } catch (error) {
    console.log(error)
   }finally{
    console.log('Welcome to your weather searcher')
   }
})