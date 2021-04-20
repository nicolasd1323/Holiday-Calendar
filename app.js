// const DOMAIN = 'https://calendarific.com/api/v2/holidays';
// const API_KEY = '0b310119eb1e1b4e3fde21fcb08d9ab20e181f1c';
// const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;

// const apiOptions = async () => {
//   const url = 'https://calendarific.com/api/v2/holidays?&api_key=0b310119eb1e1b4e3fde21fcb08d9ab20e181f1c&country=US&year=2019'  
//   try {
//     const response = await axios.get(url)
//     console.log(response.data.response.holidays)
//     let holidayList = Object.keys(response.data.response.holidays[0].date)
//     console.log(holidayList)
//     // setOptions(holidayList)
//     return  holidayList
//   }
//   catch (error) {
//     console.error(error)
//   }
// }



// apiOptions()

// function setOptions(list) {
//   const selectTag = document.querySelector('#months')
//   list.forEach((response) => {
//   console.log()
//     const optionTag = document.createElement('option')
//     optionTag.textContent = holiday
//     optionTag.value = holiday
//     selectTag.append(optionTag)
//   })
//   return list
// }


// function getValue(e) {
//   e.preventDefault()
//   const optionValue = document.querySelector('#months').value
//   console.log(optionValue)
//   getMonthValue(optionValue)
//   return optionValue
// }

// const form = document.querySelector('form')
// form.addEventListener("submit", getValue)



