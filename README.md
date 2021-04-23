# Project Overview

## United States Holiday Calendar
file:///Users/Nico1608/General_Assambly/sei/loon/Holiday_Calendar/awsome-page/index.html


## Project Description

The idea of this project is to have a functional and dynamic holiday calendar of the United States.
## API and Data Sample

```"holidays":
{
"name": "New Year's Day",
"description": "New Year's Day is the first day of the Gregorian calendar, which is widely used in many countries such as the USA.",
"id": "us",
"name": "United States"
},
"date": {
"iso": "2019-01-01",
"datetime": {
"year": 2019,
"month": 1,
"day": 
```
## Wireframes

https://wireframe.cc/vU662h

### MVP/PostMVP

#### MVP 


- **Have a dynamic Holiday Calendar.
- **Allow users to have a drop down year calendar by holiday name.
- **See a brief description of each holiday. 
- **clear past searches to start over.
- **Use a external API.
- **Utilized CSS Flex box to give a great design to the web-site.
- **Utilized HTML to structure the content. 

#### PostMVP  

- **Provide links for users to know abot the history of major holidays in the Unites States


## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|April 16-18| Prompt / Wireframes / Timeframes | Complete
|April 19| Project Approval/ Connecting the API with the page/ work with the html structure  |Complete
|April 20| Structure of the page  (HTML) and start coding in JavaScript | Complete
|April 20| coding JavaScript and CSS flex box model | complete
|April 21| Initial Clickable Model using JavaScript | complete
|April 22| MVP- Post MVP | complete
|April 23| Presentation | Incomplete

## Priority Matrix

https://app.conceptboard.com/board/g8mu-dgai-3hc4-nubo-cxg4

## Timeframes



| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API | H | 3hrs| 5hrs | 5hrs |
| Describing each holiday | H | 3.5hrs| 4hrs | 4hrs |
| funtionality of the page | H | 4 hr| 5hrs | 5hrs |
| CSS & Flex box | H | 4.5 hrs| 4hrs | 4hrs |
| HTML work and structure| H | 4.5 hr| 3hrs | 3hrs |
| clering search | H | 2hrs| 2hrs | 2hrs |
| Inserting external links| L | 3 hr| 2hrs | 2hrs |
| DOM work | H | 4.5hrs| 5hrs | 5hrs |
| Addiing a hearder image| L | 1hr| 1hrs | 1hrs |
| Final Adjustments | H | 3hrs| 3hrs | 3hrs |


| Total | H | 33hrs| 34hrs | 34hrs |

## Code Snippet

```function removeDescription() {
  const removeDescriptionDiv = document.querySelector(".holiday.info")
  while (removeDescriptionDiv.lastChild) {
    removeDescriptionDiv.removeChild(removeDescriptionDiv.lastChild)
  }
}
```
I am proud of this code Snippet, because whitout it my page would not as dynamic as it is right now.

## Change Log
 
