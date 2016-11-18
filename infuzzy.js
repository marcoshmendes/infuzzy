/* Infuzzy.JS
/ Marcos Mendes 2016
/ mhmendes.com | @marcoshmendes
/ MIT License 
*/

(function (window) {

    'use strict';

    function infuzzy() {

        var _infuzzy = {};

        var info = {
            browserName: null,
            browserVersion: null,
            browserVersionShort: null,
            osName: null,
            osVersion: null,
            userAgent: navigator.userAgent,
            device: null,
            language: navigator.language,
        }

        // Utils
        function extractVersion(browser) {
            if (info.userAgent.indexOf(browser) >= 0) {
                
                switch(browser){
                    case "Chrome":
                        var browserVersion = info.userAgent.match(/Chrome\/((\d+\.)+\d+)/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                        break;
                    case "Firefox":
                        var browserVersion = info.userAgent.match(/Firefox\/((\d+\.)+\d+)/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                        break;
                    case "MJ12bot":
                        var browserVersion = info.userAgent.match(/MJ12bot\/v?((\d+\.)+\d+)/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                        break;
                }
            }
        };

        _infuzzy.sayHi = function () {
            console.log("Hi stranger");
        };

        _infuzzy.getInfo = function () {

            // Browser Detection Area **********

            // Chrome
            if (info.userAgent.indexOf("Chrome") >= 0) {

                if (info.userAgent.search(/Mobile/i) >= 0) {
                    info.browserName = "Chrome";
                    info.device = "Mobile";
                    info.browserVersion = extractVersion(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 2);
                }
                else {
                    info.browserName = "Chrome";
                    info.device = "Desktop";
                    info.browserVersion = extractVersion(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 2);
                }
            }

            // FireFox
            if (info.userAgent.indexOf("Firefox") >= 0) {
                if (info.userAgent.search(/Mobile/i) >= 0) {
                    info.browserName = "Firefox";
                    info.device = "Mobile";
                    info.browserVersion = extractVersion(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 2);
                }
                else {
                    info.browserName = "Firefox";
                    info.device = "Desktop";
                    info.browserVersion = extractVersion(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 2);
                }
            }

            // Bots
            if (info.userAgent.indexOf("MJ12bot") >= 0) {
                    info.browserName = "MJ12bot";
                    info.device = "Desktop";
                    info.browserVersion = extractVersion(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 2);
            }

            // OS Name Detection Area *************

            if (info.userAgent.indexOf("Windows") >= 0) {
                info.osName = "Windows";
            }
            else if (info.userAgent.indexOf("Android") >= 0) {
                info.osName = "Android";
            }
            else if (info.userAgent.indexOf("MJ12bot") >= 0) {
                info.osName = "Search Engine";
            }

            // OS Version Detect *************

            // Android
            if (info.userAgent.indexOf("Android") >= 0) {
                var extract = info.userAgent.match(/Android \d\.\d\.?\d?/i);
                var splited = extract[0].split("Android");
                info.osVersion = splited[1].trim();
            }

            if (info.userAgent.indexOf("MJ12bot") >= 0) {
                info.osVersion = info.browserVersion;
            }

            // Windows

            if (info.userAgent.indexOf("Windows") >= 0 || info.userAgent.indexOf("Win95") >= 0) {
                var osVersion = info.userAgent.match(/(NT) \d\d?\.\d\d?|Windows 98; Win 9x 4.90|Windows ME|Windows 98|Win98|Windows 95|Win95|Windows CE|Windows XP|WinNT4.0|Windows Phone OS \d\.\d|Windows Phone \d\d?\.\d/i);
                switch (osVersion[0]) {
                    case "NT 10.0":
                        info.osVersion = "10.0";
                        info.device = "Desktop";
                        break;
                    case "NT 6.4":
                        info.osVersion = "10.0";
                        info.device = "Desktop";
                        break;
                    case "NT 6.3":
                        info.osVersion = "8.1";
                        info.device = "Desktop";
                        break;
                    case "NT 6.2":
                        info.osVersion = "8";
                        info.device = "Desktop";
                        break;
                    case "NT 6.1":
                        info.osVersion = "7";
                        info.device = "Desktop";
                        break;
                    case "NT 6.0":
                        info.osVersion = "Vista";
                        info.device = "Desktop";
                        break;
                    case "NT 5.2":
                        info.osVersion = "Server 2003 | XP x64 Edition";
                        info.device = "Desktop";
                    case "NT 5.1":
                        info.osVersion = "XP";
                        info.device = "Desktop";
                        break;
                    case "NT 5.01":
                        info.osVersion = "2000, Service Pack 1 (SP1)";
                        info.device = "Desktop";
                        break;
                    case "NT 5.0":
                        info.osVersion = "2000";
                        info.device = "Desktop";
                    case "NT 4.0":
                        info.osVersion = "NT 4.0";
                        info.device = "Desktop";
                        break;
                    case "Windows 98":
                        info.osVersion = "98";
                        info.device = "Desktop";
                        break;
                    case "Win98":
                        info.osVersion = "98";
                        info.device = "Desktop";
                        break;
                    case "Windows 95":
                        info.osVersion = "95";
                        info.device = "Desktop";
                        break;
                    case "Win95":
                        info.osVersion = "95";
                        info.device = "Desktop";
                        break;
                    case "Windows 98; Win 9x 4.90":
                        info.osVersion = "ME";
                        info.device = "Desktop";
                        break;
                    case "WinNT4.0":
                        info.osVersion = "NT 4.0";
                        info.device = "Desktop";
                        break;
                    case "Windows CE":
                        info.osVersion = "Windows CE";
                        info.device = "Desktop";
                        break;
                    case "Windows Phone OS 7.0":
                        info.osVersion = "Windows Phone 7.0";
                        info.device = "Phone";
                        break;
                    case "Windows Phone OS 7.5":
                        info.osVersion = "Windows Phone 7.5";
                        info.device = "Mobile";
                    case "Windows Phone 8.0":
                        info.osVersion = "Windows Phone 8.0";
                        info.device = "Mobile";
                        break;
                    case "Windows Phone 8.1":
                        info.osVersion = "Windows Phone 8.1";
                        info.device = "Mobile";
                        break;
                    case "Windows Phone 10.0":
                        info.osVersion = "Windows Phone 10.0";
                        info.device = "Mobile";
                        break;
                } // Switch
            } // If Windows


            // Game Consoles

            if (info.userAgent.indexOf("Xbox") >= 0) {
                if (info.userAgent.search(/NT \d\.\d/i) >= 0) {
                    info.osName = "Windows";
                    info.osVersion = null;
                    info.device = "Xbox 360 Desktop Mode";
                }
                if (info.userAgent.indexOf("Windows Phone") >= 0) {
                    info.osName = "Windows";
                    info.osVersion = null;
                    info.device = "Xbox 360 Mobile Mode";
                }
                if (info.userAgent.indexOf("Xbox One") >= 0) {
                    info.osName = "Windows";
                    info.osVersion = null;
                    info.device = "Xbox One";
                }
            }
          

            return info;

        };

        return _infuzzy;
    }

    if (typeof(window.infuzzy) === 'undefined') {
        window.infuzzy = infuzzy();
    }

})(window);