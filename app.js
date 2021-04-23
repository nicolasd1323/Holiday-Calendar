const DOMAIN = "https://calendarific.com/api/v2/holidays";
const API_KEY = "0b310119eb1e1b4e3fde21fcb08d9ab20e181f1c";
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;

const apiOptions = async () => {
  const url =
    "https://calendarific.com/api/v2/holidays?&api_key=0b310119eb1e1b4e3fde21fcb08d9ab20e181f1c&country=US&year=2021";
  try {
    const response = await axios.get(url);
    const holidays = response.data.response.holidays;
    setOptions(holidays);
  } catch (error) {
    console.error(error);
  }
};

apiOptions();

function setOptions(list) {
  const selectTag = document.querySelector("#holiday");
  list.forEach((holiday) => {
    const optionTag = document.createElement("option");
    optionTag.textContent = holiday.name;
    optionTag.value = holiday.name;
    selectTag.append(optionTag);
  })
  change(selectTag, list)
}

function change(selectTag, list) {
  selectTag.addEventListener('change', () => {
    let selectedHoliday = list.find((holiday) => {
      return holiday.name === selectTag.value;
    })
    const newDiv = document.createElement('div')
    newDiv.classList.add('holiday.info')
    const name = document.querySelector("#info-name").innerText = selectedHoliday.name
    const description = document.querySelector('#info-description').innerText = selectedHoliday.description
    const data = document.querySelector('#info-date').innerText = selectedHoliday.date.iso
    document.body.append(newDiv)
  })
}

function removeDescription() {
  const removeDescriptionDiv = document.querySelector(".holiday.info")
  while (removeDescriptionDiv.lastChild) {
    removeDescriptionDiv.removeChild(removeDescriptionDiv.lastChild)
  }
}


