# Infuzzy JS
Infuzzy.js is a light wheight javascript framework that greatly detect browser and OS information taken from 'Navigator' object, the information is retrieved as json, no need of server side technology, everything on client side. It is focused on making you, the developer, get stats and information about your site or app, like most used browsers and operational systems that visit you everyday, beyond that, you can track bot traffic, indentify browser that not support your app's feature and lots of uses, all of this in only one function. Simple, fast and powerful.

### Installing

Package manager is not available yet, but it is planned when infuzzy get its 1.0 version. For getting started to test infuzzy, import the JS file `infuzzy.js` on your web app, that's all you need to do.

```html
<script src="infuzzy.js"></script>
```
### Running the tests
Call function `sayHi()` to check if everything's ok.

```javascript
infuzzy.sayHi(); // Hello, Stranger
```

if infuzzy call you 'stranger', everything's is ok, up and running. Yes, it is a reference from closer

### Usage

All you need to do is call the function `getInfo()`

```javascript
var report = infuzzy.getInfo();
```

### Object Format

Example of returned object from `infuzzy.getinfo()`

```javascript
{
  "browserName": "Chrome",
  "browserVersion": "53.0.2785.116",
  "browserVersionShort": "53",
  "osName": "Windows",
  "osVersion": "7",
  "userAgent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36",
  "device": "Desktop",
  "language": "pt-BR",
  "isBot": false,
  "url": "http://domain.com/page",
  "ip": null
}
```

**`ip` will be always null, it is part of infuzzy object to let you use it with Third-party API or something like that since is not possible get IP Address in the client side. Use it or not, it's up to you **

### Support

Infuzzy is in development, till now we have the support bellow:

* Browsers | all versions
  * Chrome
  * Firefox
* SO | all versions
  * Windows
  * Android
* Platform
  * Desktop
  * Mobile
* Game Consoles
  * Xbox 360
  * Xbox One
* Bots
  * MJ12bot
  * Googlebot
  * AdsBot-Google-Mobile
  * bingbot
  * SimplePie
  * BingPreview
  * Yahoo! Slurp
  * SiteLockSpider
  * okhttp
  * curl
  * ips-agent
  * BLEXBot
  * YandexBot
  * ScoutJet

### To Do

* Browsers
  * Internet Explorer
  * Edge
  * Safari
  * Opera
  * UC
  * Iron
  * Seamonkey
* OS
  * Linux
  * Mac Os
  * Firefox OS
  * Chrome OS
  * Blackberry
  * IOS

### Authors

* **Marcos Mendes** - @marcoshmendes

### License

This project is licensed under the MIT License
