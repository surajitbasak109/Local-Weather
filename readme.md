##Local Weather App##
For this project I used:

- Bootsrap CSS framework
- jQuery library
- Bootsrap toggle css and library
- Ipinfo API(http://ipinfo.io) to get city information from user IP
- Open Weather API(http://api.openweathermap.org) to get weather information

At first I tried to use geolocation method.

```
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position) {
		var lattitude = position.coords.latitude.toFixed(2);
    var longitude = position.coords.longitude.toFixed(2);
	});
}      
```

It worked nicely on my **localhost** computer. But after iporting codes on codepen.io it doesn't worked. On developer tools it said:

*"getCurrentPosition() and watchPosition() no longer work on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS. See https://goo.gl/rStTGz for more details."*

For this reason I read again Open Weather documentation if there is another way to get weather information. I realized if I get city information  user IP address then it will work as geolocation method.
