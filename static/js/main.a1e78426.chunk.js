(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(7),r=a.n(c),l=(a(13),a(1)),o=a(2),s=a(4),m=a(3),u=a(5),d=function(e){return i.a.createElement("div",{className:"SearchResults"},void 0!==e.cityData.name?i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{src:"https://www.cray.com/blog/wp-content/uploads/2015/09/Weather-Blog-Image.jpg",alt:""}),i.a.createElement("span",{className:"card-title"},e.cityData.name,", ",i.a.createElement("strong",null,e.cityData.country)," (",e.cityData.lat,", ",e.cityData.lon,")")),i.a.createElement("div",{className:"card-content"},i.a.createElement("ul",null,i.a.createElement("li",null,"Weather: ",e.cityData.weather," (",e.cityData.weatherDesc,")"),i.a.createElement("li",null,"Temperature: ",Math.floor(e.cityData.temp-273.15),"\xb0C"),i.a.createElement("li",null,"Cloudiness: ",e.cityData.cloudiness,"%"),i.a.createElement("li",null,"Humidity: ",e.cityData.humidity,"%"),i.a.createElement("li",null,"Pressure: ",e.cityData.pressure," hPa"),i.a.createElement("li",null,"Visibility: ",e.cityData.visibility," meters"),i.a.createElement("li",null,"Wind direction: ",e.cityData.windDeg,"\xb0"),i.a.createElement("li",null,"Wind speed: ",e.cityData.windSpeed," m/s")))):null)},h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={city:null,cityData:{}},a.cityInputChanged=function(e){a.setState({city:e.target.value})},a.cityInputSubmitted=function(e){e.preventDefault();var t=document.querySelector("#info");!0===/^\d*$/.test(a.state.city)?fetch("https://api.openweathermap.org/data/2.5/weather?zip=".concat(a.state.city,"&appid=5be44980ca68a407fbce5803b86b4188")).then(function(e){return e.json()}).then(function(e){200!==e.cod?t.innerHTML="The entered zip code was not found.":a.getWeather(e,t)}):!0===/^[a-zA-Z\s,]*$/.test(a.state.city)?fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a.state.city,"&appid=5be44980ca68a407fbce5803b86b4188")).then(function(e){return e.json()}).then(function(e){200!==e.cod?t.innerHTML="The entered city was not found.":a.getWeather(e,t)}):t.innerHTML="The entered city/zip is invalid."},a.getWeather=function(e,t){a.setState({cityData:{name:e.name,cloudiness:e.clouds.all,lat:e.coord.lat,lon:e.coord.lon,time:e.dt,temp:e.main.temp,maxTemp:e.main.temp_max,minTemp:e.main.temp_min,pressure:e.main.pressure,humidity:e.main.humidity,country:e.sys.country,visibility:e.visibility,weather:e.weather[0].main,weatherDesc:e.weather[0].description,windDeg:e.wind.deg,windSpeed:e.wind.speed}}),t.innerHTML=""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Search container center"},i.a.createElement("form",{className:"container",onSubmit:this.cityInputSubmitted},i.a.createElement("div",{className:"input-field"},i.a.createElement("label",{htmlFor:"city"},"City name or ZIP code"),i.a.createElement("input",{type:"text",id:"city",onChange:this.cityInputChanged}),i.a.createElement("span",{className:"helper-text red-text",id:"info"})),i.a.createElement("button",{className:"btn waves-effect waves-light"},"Submit")),i.a.createElement(d,{cityData:this.state.cityData}))}}]),t}(n.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App center"},i.a.createElement("h2",null,"Weather App"),i.a.createElement("h5",null,"This app shows you the current weather of any city."),i.a.createElement(h,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.a1e78426.chunk.js.map