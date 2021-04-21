const DOMAIN = "https://calendarific.com/api/v2/holidays";
const API_KEY = "0b310119eb1e1b4e3fde21fcb08d9ab20e181f1c";
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;

const apiOptions = async () => {
  const url =
    "https://calendarific.com/api/v2/holidays?&api_key=0b310119eb1e1b4e3fde21fcb08d9ab20e181f1c&country=US&year=2021";
  try {
    const response = await axios.get(url);
    const holidays = response.data.response.holidays;
    // console.log(response.data.response.holidays[0].date.iso)
    // console.log(holidays);
    // let holidayList = holidays.map((holiday) => {
    //   return holiday.name;
    // });
    // console.log(holidayList);
    setOptions(holidays);
    // return  holidayList
  } catch (error) {
    console.error(error);
  }
};

apiOptions();

function setOptions(list) {
  const selectTag = document.querySelector("#holiday");
  console.log(list)
  list.forEach((holiday) => {
    const optionTag = document.createElement("option");
    optionTag.textContent = holiday.name;
    optionTag.value = holiday.name;
    selectTag.append(optionTag);
  });
  selectTag.addEventListener('change', () => {
    console.log(selectTag.value);
    let selectedHoliday = list.find((holiday) => {
      return holiday.name === selectTag.value
      
    })
    console.log(selectedHoliday.description)
  })
}




// ////Source of this code https://www.geeksforgeeks.org/how-to-create-a-link-in-javascript/

// // let linkUID = document.getElementById("Know more about me")
// // let link = document.getElementById("Black-History-Month")

// // linkUID.innerHTML = "Click important holidays"
// // function linking() {
// //   let a = document.createElement('a')
// //   let links = document.createTextNode("United States Independence")
// //   a.appendChild(links)
// //   a.href = ("https://www.history.com/topics/holidays/july-4th")
// //   document.body.appendChild(a)
// // }
// // // ///
