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

        // Teste Library
        _infuzzy.sayHi = function () {
            return "Hi stranger";
        };

        // Extract Browser Version
        var extractVersion = function(browser) {
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
                    case "Googlebot":
                        var browserVersion = info.userAgent.match(/Googlebot.*\/\d\.\d/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                        break;
                    case "AdsBot-Google-Mobile":
                        var browserVersion = info.userAgent.match(/AdsBot-Google-Mobile/);
                        return null;
                        break;
                    case "bingbot":
                        var browserVersion = info.userAgent.match(/bingbot\/\d\.\d/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                        break;
                    case "BingPreview":
                        var browserVersion = info.userAgent.match(/BingPreview\/\d\.\d.?/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                        break;
                    case "SimplePie":
                        var browserVersion = info.userAgent.match(/SimplePie\/\d\.\d\.\d?/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                        break;
                    case "Yahoo! Slurp":
                        return null;
                        break;
                    case "SiteLockSpider":
                        return null;
                        break;
                    case "okhttp":
                        var browserVersion = info.userAgent.match(/okhttp\/\d\.\d\.\d?/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                        break;
                    case "curl":
                        var browserVersion = info.userAgent.match(/curl\/\d\.\d\d?\.\d?/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                        break;
                    case "ips-agent":
                        return null;
                        break;
                    case "BLEXBot":
                        var browserVersion = info.userAgent.match(/BLEXBot\/\d\.\d/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                        break;
                    case "YandexBot":
                        var browserVersion = info.userAgent.match(/YandexBot\/\d\.\d/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                        break;
                    case "ScoutJet":
                        return null;
                        break;
                }// switch
            } //if
        }; //function

        var browserDetec = function () {

        }

        

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
                    info.browserVersionShort = info.browserVersion.substring(1, 2);
            }

            if (info.userAgent.indexOf("Googlebot") >= 0) {
                if (info.userAgent.indexOf("Mobile") >= 0) {
                    info.browserName = "Googlebot";
                    info.device = "Mobile";
                    info.browserVersion = extractVersion(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 1);
                }
                else {
                    info.browserName = "Googlebot";
                    info.device = "Desktop";
                    info.browserVersion = extractVersion(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 1);
                }
            }

            if (info.userAgent.indexOf("AdsBot-Google-Mobile") >= 0) {
                info.browserName = "AdsBot-Google-Mobile";
                info.device = "Mobile";
                info.browserVersion = extractVersion(info.browserName);
                info.browserVersionShort = null;
            }

            if (info.userAgent.indexOf("bingbot") >= 0) {
                if(info.userAgent.indexOf("Mobile") >= 0){
                    info.browserName = "bingbot";
                    info.device = "Mobile";
                    info.browserVersion = extractVersion(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 1);
                }
                else{
                    info.browserName = "bingbot";
                    info.device = "Desktop";
                    info.browserVersion = extractVersion(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 1);
                }
            }

            if (info.userAgent.indexOf("BingPreview") >= 0 && info.userAgent.indexOf("Mobile") >= 0) {
                info.browserName = "BingPreview";
                info.device = "Mobile";
                info.browserVersion = extractVersion(info.browserName);
                info.browserVersionShort = info.browserVersion.substring(0, 1);
            }

            if (info.userAgent.indexOf("SimplePie") >= 0) {
                info.browserName = "SimplePie";
                info.device = "Desktop";
                info.browserVersion = extractVersion(info.browserName);
                info.browserVersionShort = info.browserVersion.substring(0, 1);
            }

            if (info.userAgent.indexOf("Yahoo! Slurp") >= 0) {
                info.browserName = "Yahoo! Slurp";
                info.device = "Desktop";
                info.browserVersion = extractVersion(info.browserName);
                info.browserVersionShort = null;
            }
            if (info.userAgent.indexOf("SiteLockSpider") >= 0) {
                info.browserName = "SiteLockSpider";
                info.device = "Desktop";
                info.browserVersion = extractVersion(info.browserName);
                info.browserVersionShort = null;
            }
            if (info.userAgent.indexOf("okhttp") >= 0) {
                info.browserName = "okhttp";
                info.device = "Desktop";
                info.browserVersion = extractVersion(info.browserName);
                info.browserVersionShort = null;
            }

            if (info.userAgent.indexOf("curl") >= 0) {
                info.browserName = "curl";
                info.device = "Desktop";
                info.browserVersion = extractVersion(info.browserName);
                info.browserVersionShort = info.browserVersion.substring(0, 1);
            }

            if (info.userAgent.indexOf("ips-agent") >= 0) {
                info.browserName = "ips-agent";
                info.device = "Mobile";
                info.browserVersion = extractVersion(info.browserName);
                info.browserVersionShort = null;
            }

            if (info.userAgent.indexOf("BLEXBot") >= 0) {
                info.browserName = "BLEXBot";
                info.device = "Desktop";
                info.browserVersion = extractVersion(info.browserName);
                info.browserVersionShort = info.browserVersion.substring(0, 1);
            }

            if (info.userAgent.indexOf("YandexBot") >= 0) {
                info.browserName = "YandexBot";
                info.device = "Desktop";
                info.browserVersion = extractVersion(info.browserName);
                info.browserVersionShort = info.browserVersion.substring(0, 1);
            }

            if (info.userAgent.indexOf("ScoutJet") >= 0) {
                info.browserName = "ScoutJet";
                info.device = "Desktop";
                info.browserVersion = extractVersion(info.browserName);
                info.browserVersionShort = null;
            }

            // OS Name Detection Area *************

            if (info.userAgent.indexOf("Windows") >= 0) {
                info.osName = "Windows";
            }
            if (info.userAgent.indexOf("Android") >= 0) {
                info.osName = "Android";
            }
            if (info.userAgent.indexOf("MJ12bot") >= 0) {
                info.osName = "Search Engine";
            }
            if (info.userAgent.indexOf("Googlebot") >= 0) {
                info.osName = "Search Engine";
            }
            if (info.userAgent.indexOf("AdsBot-Google-Mobile") >= 0) {
                info.osName = "Search Engine";
            }
            if (info.userAgent.indexOf("bingbot") >= 0) {
                info.osName = "Search Engine";
            }
            if (info.userAgent.indexOf("SimplePie") >= 0) {
                info.osName = "RSS bot";
            }
            if (info.userAgent.indexOf("BingPreview") >= 0) {
                info.osName = "Search Engine";
            }
            if (info.userAgent.indexOf("Yahoo! Slurp") >= 0) {
                info.osName = "Search Engine";
            }
            if (info.userAgent.indexOf("SiteLockSpider") >= 0) {
                info.osName = "Security";
            }
            if (info.userAgent.indexOf("okhttp") >= 0) {
                info.osName = "Bot Various Purposes";
            }
            if (info.userAgent.indexOf("curl") >= 0) {
                info.osName = "Bot Various Purposes";
            }
            if (info.userAgent.indexOf("ips-agent") >= 0) {
                info.osName = "Market Research";
            }
            if (info.userAgent.indexOf("BLEXBot") >= 0) {
                info.osName = "Market research";
            }
            if (info.userAgent.indexOf("YandexBot") >= 0) {
                info.osName = "Search Engine";
            }
            if (info.userAgent.indexOf("ScoutJet") >= 0) {
                info.osName = "Search Engine";
            }

            // OS Version Detect *************

            // Android
            if (info.userAgent.indexOf("Android") >= 0) {
                var extract = info.userAgent.match(/Android \d\.\d\.?\d?/i);
                var splited = extract[0].split("Android");
                info.osVersion = splited[1].trim();
            }

            //Bot
            if (info.userAgent.indexOf("MJ12bot") >= 0) {
                info.osVersion = info.browserVersion;
            }
            if (info.userAgent.indexOf("Googlebot") >= 0) {
                info.osVersion = info.browserVersion;
            }
            if (info.userAgent.indexOf("AdsBot-Google-Mobile") >= 0) {
                info.osVersion = null;
            }
            if (info.userAgent.indexOf("bingbot") >= 0) {
                info.osVersion = info.browserVersion;
            }
            if (info.userAgent.indexOf("SimplePie") >= 0) {
                info.osVersion = info.browserVersion;
            }
            if (info.userAgent.indexOf("BingPreview") >= 0) {
                info.osVersion = info.browserVersion;
            }
            if (info.userAgent.indexOf("Yahoo! Slurp") >= 0) {
                info.osVersion = null;
            }
            if (info.userAgent.indexOf("okhttp") >= 0) {
                info.osVersion = info.browserVersion;
            }
            if (info.userAgent.indexOf("curl") >= 0) {
                info.osVersion = info.browserVersion;
            }
            if (info.userAgent.indexOf("ips-agent") >= 0) {
                info.osVersion = info.browserVersion;
            }
            if (info.userAgent.indexOf("BLEXBot") >= 0) {
                info.osVersion = info.browserVersion;
            }
            if (info.userAgent.indexOf("YandexBot") >= 0) {
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