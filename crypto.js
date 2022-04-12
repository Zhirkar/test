const APIKEY = "73089ee3-1899-4178-98eb-410603e5515d";
const URL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";
const qString = "?CMC_PRO_API_KEY=" + APIKEY + "&symbol=BTC,ETH,LTC,ADA";
let headers = new Headers();
// headers.append("X-CMC_PRO_API_KEY", APIKEY);
// headers.append('Content-Type', 'application/json');
// headers.append('Accept', 'application/json');
// headers.append('Origin','http://127.0.0.1:5501');

// 05f94f8a3ef526a1e5232833732654a7761f96a8
window.onload = () => {
  fetch(
    "https://api.nomics.com/v1/currencies/ticker?key=05f94f8a3ef526a1e5232833732654a7761f96a8&ids=BTC,ETH,XRP,DOGE,USDT,BNB,SOL,SHIB&interval=1d&convert=USD&per-page=100&page=1"
  )
    .then((response) => response.json())
    .then((data) => {
      data.map((dt) => {
        console.log({ dt });
        const container = document.getElementById("cryptoContainer");

        const a = document.createElement("div");
        a.innerHTML = `
      <div id='cryptoItem' >
          <div >
              <h3>${dt.name}</h3>
              <img style="height: 100px;width: 100px;padding-top:10px;padding-bottom:10px" height={100} width={100} src='${dt.logo_url}'/>
              <div/>
              <span >1${dt.currency}=${dt.price} </span>            
          </div>
      </div>`;
        // console.log(container)
        container.appendChild(a);
      });
    });
};
