// string to json
let eventList = JSON.parse(localStorage.getItem("eventList"));
// json to string
localStorage.setItem("eventList", JSON.stringify(state.eventList));

