/* Infuzzy.js
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
            isBot: false,
            ip: null
        }

        /**
         * Test library
         * @return {String} Welcome Message
         */
        _infuzzy.sayHi = function () {
            return "Hi stranger";
        };

        /**
         * Return info from a userAgent string
         * @param {String} userAgent
         * @return {Object} info
         */
        _infuzzy.getInfoFromValue = function(userAgent){
            info.userAgent = userAgent;
            browserDetect();
            osDetect();

            return info;
        }

        /**
         * Extract browser version
         * @param {String} browser
         * @return {String} Browser Version
         */
        var browserVersionDetect = function(browser) {
            if (info.userAgent.indexOf(browser) >= 0) {
                
                switch(browser){
                    case "Chrome":
                        var browserVersion = info.userAgent.match(/Chrome\/((\d+\.)+\d+)/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                    case "Firefox":
                        var browserVersion = info.userAgent.match(/Firefox\/((\d+\.)+\d+)/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                    case "MJ12bot":
                        var browserVersion = info.userAgent.match(/MJ12bot\/v?((\d+\.)+\d+)/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                    case "Googlebot":
                        var browserVersion = info.userAgent.match(/Googlebot.*\/\d\.\d/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                    case "AdsBot-Google-Mobile":
                        var browserVersion = info.userAgent.match(/AdsBot-Google-Mobile/);
                        return null;
                    case "bingbot":
                        var browserVersion = info.userAgent.match(/bingbot\/\d\.\d/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                    case "BingPreview":
                        var browserVersion = info.userAgent.match(/BingPreview\/\d\.\d.?/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                    case "SimplePie":
                        var browserVersion = info.userAgent.match(/SimplePie\/\d\.\d\.\d?/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                    case "Yahoo! Slurp":
                        return null;
                    case "SiteLockSpider":
                        return null;
                    case "okhttp":
                        var browserVersion = info.userAgent.match(/okhttp\/\d\.\d\.\d?/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                    case "curl":
                        var browserVersion = info.userAgent.match(/curl\/\d\.\d\d?\.\d?/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                    case "ips-agent":
                        return null;
                    case "BLEXBot":
                        var browserVersion = info.userAgent.match(/BLEXBot\/\d\.\d/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                    case "YandexBot":
                        var browserVersion = info.userAgent.match(/YandexBot\/\d\.\d/);
                        browserVersion = browserVersion[0].split("/");
                        return browserVersion[1];
                    case "ScoutJet":
                        return null;
                }// switch
            } //if
        }; //function

        // Browser and Device
        var browserDetect = function () {

            //Chrome
            if (info.userAgent.indexOf("Chrome") >= 0) {

                if (info.userAgent.search(/Mobile/i) >= 0) {
                    info.browserName = "Chrome";
                    info.device = "Mobile";
                    info.browserVersion = browserVersionDetect(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 2);
                    return true;
                }
                else {
                    info.browserName = "Chrome";
                    info.device = "Desktop";
                    info.browserVersion = browserVersionDetect(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 2);
                    return true;
                }
            }

            // FireFox
            if (info.userAgent.indexOf("Firefox") >= 0) {
                if (info.userAgent.search(/Mobile/i) >= 0) {
                    info.browserName = "Firefox";
                    info.device = "Mobile";
                    info.browserVersion = browserVersionDetect(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 2);
                    return true;
                }
                else {
                    info.browserName = "Firefox";
                    info.device = "Desktop";
                    info.browserVersion = browserVersionDetect(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 2);
                    return true;
                }
            }

            // Bots
            if (info.userAgent.indexOf("MJ12bot") >= 0) {
                info.isBot = true;
                info.browserName = "MJ12bot";
                info.device = "Desktop";
                info.browserVersion = browserVersionDetect(info.browserName);
                info.browserVersionShort = info.browserVersion.substring(1, 2);
                return true;
            }

            if (info.userAgent.indexOf("Googlebot") >= 0) {
                
                info.isBot = true;
                if (info.userAgent.indexOf("Mobile") >= 0) {
                    info.browserName = "Googlebot";
                    info.device = "Mobile";
                    info.browserVersion = browserVersionDetect(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 1);
                    return true;
                }
                else {
                    info.browserName = "Googlebot";
                    info.device = "Desktop";
                    info.browserVersion = browserVersionDetect(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 1);
                    return true;
                }
            }

            if (info.userAgent.indexOf("AdsBot-Google-Mobile") >= 0) {
                info.isBot = true;
                info.browserName = "AdsBot-Google-Mobile";
                info.device = "Mobile";
                info.browserVersion = browserVersionDetect(info.browserName);
                info.browserVersionShort = null;
                return true;
            }

            if (info.userAgent.indexOf("bingbot") >= 0) {

                info.isBot = true;
                if (info.userAgent.indexOf("Mobile") >= 0) {
                    info.browserName = "bingbot";
                    info.device = "Mobile";
                    info.browserVersion = browserVersionDetect(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 1);
                    return true;
                }
                else {
                    info.browserName = "bingbot";
                    info.device = "Desktop";
                    info.browserVersion = browserVersionDetect(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 1);
                    return true;
                }
            }

            if (info.userAgent.indexOf("BingPreview") >= 0 && info.userAgent.indexOf("Mobile") >= 0) {
                info.isBot = true;
                info.browserName = "BingPreview";
                info.device = "Mobile";
                info.browserVersion = browserVersionDetect(info.browserName);
                info.browserVersionShort = info.browserVersion.substring(0, 1);
                return true;
            }

            if (info.userAgent.indexOf("SimplePie") >= 0) {
                info.isBot = true;
                info.browserName = "SimplePie";
                info.device = "Desktop";
                info.browserVersion = browserVersionDetect(info.browserName);
                info.browserVersionShort = info.browserVersion.substring(0, 1);
                return true;
            }

            if (info.userAgent.indexOf("Yahoo! Slurp") >= 0) {
                info.isBot = true;
                info.browserName = "Yahoo! Slurp";
                info.device = "Desktop";
                info.browserVersion = browserVersionDetect(info.browserName);
                info.browserVersionShort = null;
                return true;
            }
            if (info.userAgent.indexOf("SiteLockSpider") >= 0) {
                info.isBot = true;
                info.browserName = "SiteLockSpider";
                info.device = "Desktop";
                info.browserVersion = browserVersionDetect(info.browserName);
                info.browserVersionShort = null;
                return true;
            }
            if (info.userAgent.indexOf("okhttp") >= 0) {
                info.isBot = true;
                info.browserName = "okhttp";
                info.device = "Desktop";
                info.browserVersion = browserVersionDetect(info.browserName);
                info.browserVersionShort = null;
                return true;
            }

            if (info.userAgent.indexOf("curl") >= 0) {
                info.isBot = true;
                info.browserName = "curl";
                info.device = "Desktop";
                info.browserVersion = browserVersionDetect(info.browserName);
                info.browserVersionShort = info.browserVersion.substring(0, 1);
                return true;
            }

            if (info.userAgent.indexOf("ips-agent") >= 0) {
                info.isBot = true;
                info.browserName = "ips-agent";
                info.device = "Mobile";
                info.browserVersion = browserVersionDetect(info.browserName);
                info.browserVersionShort = null;
                return true;
            }

            if (info.userAgent.indexOf("BLEXBot") >= 0) {
                info.isBot = true;
                info.browserName = "BLEXBot";
                info.device = "Desktop";
                info.browserVersion = browserVersionDetect(info.browserName);
                info.browserVersionShort = info.browserVersion.substring(0, 1);
                return true;
            }

            if (info.userAgent.indexOf("YandexBot") >= 0) {
                info.isBot = true;
                info.browserName = "YandexBot";
                info.device = "Desktop";
                info.browserVersion = browserVersionDetect(info.browserName);
                info.browserVersionShort = info.browserVersion.substring(0, 1);
                return true;
            }

            if (info.userAgent.indexOf("ScoutJet") >= 0) {
                info.isBot = true;
                info.browserName = "ScoutJet";
                info.device = "Desktop";
                info.browserVersion = browserVersionDetect(info.browserName);
                info.browserVersionShort = null;
                return true;
            }


        }

        var osDetect = function () {

            // OS Name Detection Area *************

            if (info.userAgent.indexOf("Windows") >= 0) {
                info.osName = "Windows";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("Win") >= 0) {
                info.osName = "Windows";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("Xbox") >= 0) {
                info.osName = "Windows";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("Xbox One") >= 0) {
                info.osName = "Windows";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("Windows Phone") >= 0 && info.userAgent.indexOf("Xbox") == -1) {
                info.osName = "Windows Phone";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("Android") >= 0) {
                info.osName = "Android";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("MJ12bot") >= 0) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("Googlebot") >= 0) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("AdsBot-Google-Mobile") >= 0) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("bingbot") >= 0) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("SimplePie") >= 0) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("BingPreview") >= 0) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("Yahoo! Slurp") >= 0) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("SiteLockSpider") >= 0) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("okhttp") >= 0) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("curl") >= 0) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("ips-agent") >= 0) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("BLEXBot") >= 0) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("YandexBot") >= 0) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (info.userAgent.indexOf("ScoutJet") >= 0) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }

            // Game Consoles
            if (info.userAgent.indexOf("Xbox") >= 0) {
                if (info.userAgent.search(/NT \d\.\d/i) >= 0) {
                    info.osName = "Windows";
                    info.osVersion = osVersionDetect();
                    info.device = "Xbox 360 Desktop Mode";
                    return true;
                }
                if (info.userAgent.indexOf("Windows Phone") >= 0) {
                    info.osName = "Windows";
                    info.osVersion = osVersionDetect();
                    info.device = "Xbox 360 Mobile Mode";
                    return true;
                }
                if (info.userAgent.indexOf("Xbox One") >= 0) {
                    info.osName = "Windows";
                    info.osVersion = osVersionDetect();
                    info.device = "Xbox One";
                    return true;
                }
            }
        }     


        // To Do remove osName from parameter
        // Wont work on bot osNames
        var osVersionDetect = function () {

            // OS Version Detect *************

            // Android
            if (info.userAgent.indexOf("Android") >= 0 && info.userAgent.indexOf("Windows Phone") == -1) {
                var extract = info.userAgent.match(/Android \d\.\d\.?\d?/i);
                var splited = extract[0].split("Android");
                return splited[1].trim();
            }

            // Windows

            if (info.userAgent.indexOf("Windows") >= 0 || info.userAgent.indexOf("Win95") >= 0) {
                var osVersion = info.userAgent.match(/(NT) \d\d?\.\d\d?|Windows 98; Win 9x 4.90|Windows ME|Windows 98|Win98|Windows 95|Win95|Windows CE|Windows XP|WinNT4.0|Windows Phone OS \d\.\d|Windows Phone \d\d?\.\d/i);
                switch (osVersion[0]) {
                    case "NT 10.0":
                        info.device = "Desktop";
                        return "10.0";
                    case "NT 6.4":
                        info.device = "Desktop";
                        return "10.0";
                    case "NT 6.3":
                        info.device = "Desktop";
                        return "8.1";
                    case "NT 6.2":
                        info.device = "Desktop";
                        return "8";
                    case "NT 6.1":
                        info.device = "Desktop";
                        return "7";
                    case "NT 6.0":
                        info.device = "Desktop";
                        return "Vista";
                    case "NT 5.2":
                        info.device = "Desktop";
                        return "Server 2003";    
                    case "NT 5.1":
                        info.device = "Desktop";
                        return "XP";
                    case "NT 5.01":
                        info.device = "Desktop";
                        return "2000, Service Pack 1 (SP1)";
                    case "NT 5.0":
                        info.device = "Desktop";
                        return "2000";
                    case "NT 4.0":
                        info.device = "Desktop";
                        return "NT 4.0";
                    case "Windows 98":
                        info.device = "Desktop";
                        return "98";
                    case "Win98":
                        info.device = "Desktop";
                        return "98";
                    case "Windows 95":
                        info.device = "Desktop";
                        return "95";
                    case "Win95":
                        info.device = "Desktop";
                        return "95";
                    case "Windows 98; Win 9x 4.90":
                        info.device = "Desktop";
                        return "ME";
                    case "Windows ME":
                        info.device = "Desktop";
                        return "ME";
                    case "WinNT4.0":
                        info.device = "Desktop";
                        return "NT 4.0";
                    case "Windows CE":
                        info.device = "Desktop";
                        return "CE";
                    case "Windows Phone OS 7.0":
                        info.device = "Mobile";
                        return "Windows Phone 7.0";
                    case "Windows Phone OS 7.5":
                        info.device = "Mobile";
                        return "Windows Phone 7.5";
                    case "Windows Phone 8.0":
                        info.device = "Mobile";
                        return "Windows Phone 8.0";
                    case "Windows Phone 8.1":
                        info.device = "Mobile";
                        return "Windows Phone 8.1";
                    case "Windows Phone 10.0":
                        info.device = "Mobile";
                        return "Windows Phone 10.0";
                } // Switch
            } // If Windows

            //Bots
            if (info.osName == "Search Engine") {
                return null;
            }

            // Game Consoles
            if (info.userAgent.indexOf("Xbox") >= 0) {
                return null;
            }
        }

        
        _infuzzy.getInfo = function () {

            browserDetect();
            osDetect();

            return info;
        };

        return _infuzzy;
    }

    if (typeof(window.infuzzy) === 'undefined') {
        window.infuzzy = infuzzy();
    }

})(window);