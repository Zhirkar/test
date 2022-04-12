const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
		'X-RapidAPI-Key': '7bb053dca8mshf4aec411e519983p1d5fd1jsn0bd9a76c029f'
	}
};

fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=Iraq', options)
	.then(response => response.json())
	.then(data => {
            console.log(data.data);


            const container = document.getElementById("weatherContainer");

            const a = document.createElement("div");
            a.innerHTML = `
          <div style='color:#fff;margin-left:20px' >
              <div >
              <h1>Last Corona Update in Iraq</h1>
                  <h1 style='text-align:center;display:flex;align-items:center;justify-content:center;background-color:#D98B48;height:170px;width:210px;color:#fff;font-size:25px;border-radius:3px'>Confirmed ${data.data.confirmed}</h3>
                  <div/>
                  <h1 style='text-align:center;display:flex;align-items:center;justify-content:center;background-color:#eeeeee;height:170px;width:210px;color:#292929;font-size:25px;border-radius:3px'>Deaths  ${data.data.deaths}</h3>            
              </div>
          </div>`;
            // console.log(container)
            container.appendChild(a);


          })
	.catch(err => console.error(err));