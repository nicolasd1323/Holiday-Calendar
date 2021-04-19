const DOMAIN = 'https://calendarific.com/api/v2/holidays';
const API_KEY = '0b310119eb1e1b4e3fde21fcb08d9ab20e181f1c';
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;

const getOptions = async () => {
  const url = 'https://calendarific.com/api/v2/holidays?&api_key=0b310119eb1e1b4e3fde21fcb08d9ab20e181f1c&country=US&year=2019'  
  try {
    const response = await axios.get(url)
    console.log(response.data)
    let HolidayList = Object.keys(response.data)
    console.log(HolidayList)
    
    return  HolidayList
  }
  catch (error) {
    console.error(error)
  }
}

getOptions()