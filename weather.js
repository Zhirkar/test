//inst classes//

const ft = new Fetch();
const ui = new UI();

//add event listeners//
const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
const city = ["Erbil", "Sulaymānīyah", "Kirkuk", "Halabja", "Duhok"];
let currentCityName = "";
$.ajax({
  url: "https://geolocation-db.com/jsonp",
  jsonpCallback: "callback",
  dataType: "jsonp",
  success: function (location) {
    currentCityName = location.city;
    $("#country").html(location.country_name);
    $("#state").html(location.state);
    $("#city").html(location.city);
    $("#latitude").html(location.latitude);
    $("#longitude").html(location.longitude);
    $("#ip").html(location.IPv4);
  },
});

window.onload = () => {
  city.map(async (city) => {
    await ft.getCurrent(city).then((data) => {
      // if((city==='Sulaymānīyah'))
      const check =
        (city == "Sulaymānīyah" ? "Sulaymaniyah" : city) === currentCityName;

      if (data) ui.populateUI(data, check);
      //call saveToLS
      // ui.saveToLS(data);
    });
  });
};
