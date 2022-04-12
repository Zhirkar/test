class UI {
  constructor() {
    this.uiContainer = document.getElementById("content");
    this.city;
    this.defaultCity = "erbil";
  }

  populateUI(data, isCurrentCity) {
    let weather ;
    let bg;

    let Degrees = Math.round((data?.main?.temp || 0) - 272.15);
    // if (data.weather[0].description == 'few clouds') {
    //   weather = 'cl';
    // } else if(data.weather[0].description == 'few clouds'){
    //   weather= 'dl'
    // }
    if (isCurrentCity) {
      const currentCityDiv = document.getElementById("currentCity");
    
      currentCityDiv.innerHTML = `
      <div class="card ">
      <div class="card-body ">
      <h5 class="card-title">currentCity</h5>
      <h5 class="card-title">${data?.name}</h5>
      <h6 class="card-subtitle">${Degrees} C°</h6>
      <p class="card-text ">${num}</p>
      
      
      </div>
      </div>`;
      // currentCityDiv.appendChild(currentCityDiv);
    } else {
      // if (data?.weather[0]?.description=='scattered clouds') {
      //   weather = 'cloud';
      // } else if(data?.weather[0]?.description== 'clear sky'){
      //   weather ='light_mode'
        
      // }

      //! gorini kashw hawa bo icon
      switch(data?.weather[0]?.description) {
        case 'scattered clouds':
          weather = 'cloud_queue';
          break;
        case 'clear sky':
          weather = 'light_mode';
          break;
          case 'broken clouds':
          weather = 'filter_drama';
          break;
        case 'overcast clouds':
          weather = 'cloud';
          break;
         
        
          

        default:
          weather = 'light_mode';
      }

            //! gorini backgroundi cardakan
            let city;
            switch(data?.name) {
              case 'Sulaymānīyah':
                bg = 'img/View_of_Sulaimani.jpg';
                city = 'SLEMANI';
                Degrees = Degrees-9;
                break;

                case 'Dahuk':
                bg = 'img/duhok.jpg';
                city = 'DUHOK';

                break;

                case 'Kirkuk':
                bg = 'img/kirkuk.jpg';
                city = 'KIRKUK';

                break;

                case 'Halabja':
                bg = 'img/halabja.jpg';
                city = 'HALABJA';

                break;

                case 'Erbil':
                bg = 'img/erbil.jpg';
                city = 'HAWLER';

                break;
                
      
              default:
                bg = '';
            }



      const a = document.createElement("div");
      a.innerHTML = `
    <div class="card " style='margin:10px; background-image: url(${bg});'>
        <div class="card-body">
            <h5 class="card-title" >${city}</h5>
            <h6 class="card-subtitle ">${Degrees} C°</h6>
            <span class="material-icons icon"> ${weather} </span>            
        </div>
    </div>`;
      this.uiContainer.appendChild(a);
    }
    // console.log(data?.weather[0]?.description);

  }


  clearUI() {
    uiContainer.innerHTML = "";
  }

  saveToLS(data) {
    let city = localStorage.getItem("city");
    if (city === null) {
      localStorage.setItem("city", JSON.stringify([data]));
    } else {
      city = JSON.parse(city);
      city.push(data);
      localStorage.setItem("city", JSON.stringify(data));
    }
  }

  getFromLS() {
    if (localStorage.getItem("city") === null) {
      return this.defaultCity;
    } else {
      this.city = JSON.parse(localStorage.getItem("city"));
    }

    return this.city;
  }

  clearLS() {
    localStorage.clear();
  }
}
