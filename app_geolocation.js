/*
* This script will not work on insecure origin.
* getCurrentPosition() and watchPosition() no longer work on insecure origins.
* To use this feature, you should consider switching your application to a secure origin,
* such as HTTPS. See https://goo.gl/rStTGz for more details.
*/

$(document).ready(function () {
  var app_id = '5eedbf557a377cc3f17486fe58e21681';
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lattitude = position.coords.latitude.toFixed(2);
      var longitude = position.coords.longitude.toFixed(2);
      var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lattitude + '&lon=' + longitude + '&appid=' + app_id;
      $.getJSON(url, function (data) {
        var html = '',
          temp = data.main.temp,
          weather_description = data.weather[0].description;
        weather_icon = data.weather[0].icon;
        humidity = data.main.humidity + '%',
          sunrise_h = new Date(data.sys.sunrise * 1000).getHours(),
          sunset_h = new Date(data.sys.sunset * 1000).getHours(),
          sunrise_m = new Date(data.sys.sunrise * 1000).getMinutes(),
          sunset_m = new Date(data.sys.sunrise * 1000).getMinutes(),
          city = data.name,
          country = data.sys.country,
          current_time = new Date().toLocaleString(),
          temp_in_celsius = Math.round(temp - 273.15) + ' \u00B0' + 'C',
          temp_in_fahrenheit = (Math.round((temp - 273.15) * 9 / 5 + 32)) + ' \u00B0' + 'F';
        if (sunrise_h < 10) sunrise_h = '0' + sunrise_h;
        else sunrise_h;
        if (sunrise_m < 10) sunrise_m = '0' + sunrise_m;
        else sunrise_m;
        if (sunset_h < 10) sunset_h = '0' + sunset_h;
        else sunset_h;
        if (sunset_m < 10) sunset_m = '0' + sunset_m;
        else sunset_m;
        // alert(weather_description);
        html += '<h3 class="city text-center">' + city + ', ' + country + '</h3>';
        html += '<span class="temp celsius">' + temp_in_celsius + '</span>';
        html += '<span class="temp fehrenheit">' + temp_in_fahrenheit + '</span>';
        html += '<p class="w-desc text-center">' + weather_description + '</p>';
        html += '<p class="w-icon"><img src="http://openweathermap.org/img/w/' + weather_icon + '.png" alt="' + weather_description + '"></p>';
        html += '<p class="cd text-center">' + current_time + '</p>';
        html += '<p class="additional_info"><span class="c-hm"><strong>Humidity: </strong>' + humidity + '</span>';
        html += '<span class="sunrise"><strong>Sunrise</strong>: ' + sunrise_h + ":" + sunrise_m + ' </span>';
        html += '<span class="sunrise"><strong>Sunset</strong>: ' + sunset_h + ":" + sunset_m + ' </span>';
        $('#weather_report').html(html);
      });
    });
  }


  $('#toggle').change(function () {
    if ($('#toggle').prop("checked") == true) {
      $('.celsius').addClass('hidden');
      $('.fehrenheit').addClass('visible');
    } else {
      $('.celsius').removeClass('hidden');
      $('.fehrenheit').removeClass('visible');
    }
  });
});