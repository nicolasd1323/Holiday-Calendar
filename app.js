const DOMAIN = 'https://calendarific.com/api/v2/holidays';
const API_KEY = '0b310119eb1e1b4e3fde21fcb08d9ab20e181f1c';
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;

const apiOptions = async () => {
  const url = 'https://calendarific.com/api/v2/holidays?&api_key=0b310119eb1e1b4e3fde21fcb08d9ab20e181f1c&country=US&year=2019'  
  try {
    const response = await axios.get(url)
    const holidays = response.data.response.holidays
    // console.log(response.data.response.holidays[0].date.iso)
    console.log(holidays)
    let holidayList = holidays.map((holiday) => {

    return holiday.name
    }
    )
    console.log(holidayList)
    setOptions(holidayList)
    // return  holidayList
  }
  catch (error) {
    console.error(error)
  }
}

apiOptions()

function setOptions(list) {
  const selectTag = document.querySelector('#holiday')
  list.forEach((holiday) => {
    const optionTag = document.createElement('option')
    optionTag.textContent = holiday
    optionTag.value = holiday
    selectTag.append(optionTag)
  })
console.log(selectTag.value)
}



// function showHolidaysData(data) {
//   //name
//   //flag
//   //capital
//   console.log("inside showHolidaysData", data)
//   let HolidaysData = `
//   <h1 id="country-name">${data.response.holidays[0].date}</h1>`
//   // // <img src="${data.flag}" alt="country-flag" style="width: 250px;" height: auto;">
//   // // <h3>Capital: ${data.capital}</h3>
//   // // <p>Population: ${data.population}</p>
//   // 
//   console.log(HolidaysData)
//   document.querySelector("#months")
//   insertAdjacentHTML('beforeend', HolidaysData)
//   return HolidaysData
// }




////Source of this code https://www.geeksforgeeks.org/how-to-create-a-link-in-javascript/

// let linkUID = document.getElementById("Know more about me")
// let link = document.getElementById("Black-History-Month")

// linkUID.innerHTML = "Click important holidays"
// function linking() {
//   let a = document.createElement('a')
//   let links = document.createTextNode("United States Independence")
//   a.appendChild(links)
//   a.href = ("https://www.history.com/topics/holidays/july-4th")
//   document.body.appendChild(a)
// }
// ///