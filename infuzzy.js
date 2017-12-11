/* Infuzzy.js
/ Created By @marcoshmendes
/ MIT License 
*/

(function (window) {

    'use strict';

    function infuzzy() {

        //Encapsulated object
        var _infuzzy = {};

        var info = {
            browserName: null,
            browserVersion: null,
            browserVersionShort: null,
            osName: null,
            osVersion: null,
            userAgent: null,
            device: null,
            language: navigator.language,
            isBot: false,
            url: window.location.href,
            ip: null, // Always null, intend to be use with third IP lib
            result: {
                status: '',
                info: ''
            }
        };

        /**
         * Test infuzzy
         * @return {String} Welcome Message
         */
        _infuzzy.test = function () {
            return "Hello, stranger";
        }

        var getBrowserShortVersion = function(version) {
            var shortVersion;

            if (!version) {
                return null;
            }

            shortVersion = version.split('.');
            return shortVersion[0];
        }

        var setSuccessResult = function() {
            return {
                status: 'success',
                info: 'info detected'
            }
        }

        /**
         * Extract browser version
         * @param {String} browser
         * @return {String} Browser Version
         */
        var detectBrowserVersion = function(browserName, agent) {
            var version;

            if (agent.indexOf(browserName) !== -1) {
                switch(browserName){
                    case "Chrome":
                        version = agent.match(/Chrome\/((\d+\.)+\d+)/);
                        return version[1];
                    case "Firefox":
                        version = agent.match(/Firefox\/((\d+\.)+\d+)/);
                        return version[1];
                    case "MJ12bot":
                        version = agent.match(/MJ12bot\/v?((\d+\.)+\d+)/);
                        return version[1];
                    case "Googlebot":
                        version = agent.match(/Googlebot.*\/\d\.\d/);
                        return version[1];
                    case "AdsBot-Google-Mobile":
                        version = agent.match(/Googlebot.*\/\d\.\d/);
                        return version;
                    case "bingbot":
                        version = agent.match(/bingbot\/\d\.\d/);
                        return version[1];
                    case "BingPreview":
                        version = agent.match(/BingPreview\/\d\.\d.?/);
                        return version[1];
                    case "SimplePie":
                        version = agent.match(/SimplePie\/\d\.\d\.\d?/);
                        return version[1];
                    case "Yahoo! Slurp":
                        return null;
                    case "SiteLockSpider":
                        return null;
                    case "okhttp":
                        version = agent.match(/okhttp\/\d\.\d\.\d?/);
                        return version[1];
                    case "curl":
                        version = agent.match(/curl\/\d\.\d\d?\.\d?/);
                        return version[1];
                    case "ips-agent":
                        return null;
                    case "BLEXBot":
                        version = agent.match(/BLEXBot\/\d\.\d/);
                        return version[1];
                    case "YandexBot":
                        version = agent.match(/YandexBot\/\d\.\d/);
                        return version[1];
                    case "ScoutJet":
                        return null;
                }
            }
        }

        /**
         * Extract browser informations
         * @param {agent} user agent
         * @return {browser} Object
         */
        var browserDetect = function (agent) {
            var browser = {
                name: '',
                device: '',
                version: 0,
                shortVersion: 0,
                isBot: false,
                result: {
                    status: '',
                    info: ''
                }
            };

            if (!agent) {
                browser.result.status = 'error';
                browser.result.info = 'Missing agent parameter';
                return browser;
            }

            //Chrome
            if (agent.indexOf("Chrome") !== -1) {
                browser.name = "Chrome";
                if (agent.search(/Mobile/i) !== -1) {
                    browser.device = "Mobile";
                    browser.version = detectBrowserVersion(browser.name, agent);
                    browser.shortVersion = getBrowserShortVersion(browser.version);
                    browser.result = setSuccessResult();
                    return browser;
                }
                else {
                    browser.device = "Desktop";
                    browser.version = detectBrowserVersion(browser.name, agent);
                    browser.shortVersion = getBrowserShortVersion(browser.version);
                    browser.result = setSuccessResult();
                    return browser;
                }
            }

            // Internet Explorer
            if (agent.indexOf("Trident") !== -1 || agent.indexOf("MSIE") !== -1) {
                browser.name = "Internet Explorer";
                if (agent.indexOf("Mobile") !== -1) {
                    browser.device = "Mobile";
                    browser.result = setSuccessResult();
                    return browser;
                } 
                else {
                    browser.device = "Desktop";
                    browser.result = setSuccessResult();
                    return browser;
                }
            }

            // //Edge wrong, identify as Chrome
            // if (info.userAgent.indexOf("Edge") !== -1) {
            //     if(info.userAgent.indexOf("Mobile") !== -1){
            //         info.browserName = "Edge";
            //         info.device = "Mobile";
            //     }
            //     else{
            //         info.browserName = "Edge";
            //         info.device = "Desktop";
            //     }
            // }

            // FireFox
            if (agent.indexOf("Firefox") !== -1) {
                browser.name = "Firefox";
                if (agent.search(/Mobile/i) !== -1) {
                    browser.device = "Mobile";
                    browser.version = detectBrowserVersion(browser.name, agent);
                    browser.shortVersion = getBrowserShortVersion(browser.version);
                    browser.result = setSuccessResult();
                    return browser;
                }
                else {
                    browser.device = "Desktop";
                    browser.version = detectBrowserVersion(browser.name, agent);
                    browser.shortVersion = getBrowserShortVersion(browser.version);
                    browser.result = setSuccessResult();
                    return browser;
                }
            }

            // {{ Bots }}

            // MJ12bot
            if (agent.indexOf("MJ12bot") !== -1) {
                browser.isBot = true;
                browser.name = "MJ12bot";
                browser.device = "Desktop";
                browser.version = detectBrowserVersion(name, agent);
                browser.shortVersion = getBrowserShortVersion(browser.version);
                browser.result = setSuccessResult();
                return browser;
            }

            // Googlebot
            if (agent.indexOf("Googlebot") !== -1) {
                browser.isBot = true;
                browser.name = "Googlebot";
                if (agent.indexOf("Mobile") !== -1) {
                    browser.device = "Mobile";
                    browser.version = detectBrowserVersion(name, agent);
                    browser.shortVersion = getBrowserShortVersion(browser.version);
                    browser.result = setSuccessResult();
                    return browser;
                }
                else {
                    browser.device = "Desktop";
                    browser.version = detectBrowserVersion(name, agent);
                    browser.shortVersion = getBrowserShortVersion(browser.version);
                    browser.result = setSuccessResult();
                    return browser;
                }
            }

            // AdsBot-Google-Mobile
            if (agent.indexOf("AdsBot-Google-Mobile") !== -1) {
                browser.isBot = true;
                browser.name = "AdsBot-Google-Mobile";
                browser.device = "Mobile";
                browser.version = detectBrowserVersion(name, agent);
                browser.shortVersion = null;
                return browser;
            }

            // bingbot
            if (agent.indexOf("bingbot") !== -1) {
                browser.isBot = true;
                browser.name = "bingbot";
                if (agent.indexOf("Mobile") !== -1) {
                    browser.device = "Mobile";
                    browser.version = detectBrowserVersion(name, agent);
                    browser.shortVersion = getBrowserShortVersion(browser.version);
                    browser.result = setSuccessResult();
                    return browser;
                }
                else {
                    browser.device = "Desktop";
                    browser.version = detectBrowserVersion(name, agent);
                    browser.shortVersion = getBrowserShortVersion(browser.version);
                    browser.result = setSuccessResult();
                    return browser;
                }
            }

            // BingPreview
            if (agent.indexOf("BingPreview") !== -1 && agent.indexOf("Mobile") !== -1) {
                browser.isBot = true;
                browser.name = "BingPreview";
                browser.device = "Mobile";
                browser.version = detectBrowserVersion(name, agent);
                browser.shortVersion = getBrowserShortVersion(browser.version);
                browser.result = setSuccessResult();
                return browser;
            }

            // SimplePie
            if (agent.indexOf("SimplePie") !== -1) {
                browser.isBot = true;
                browser.name = "SimplePie";
                browser.device = "Desktop";
                browser.version = detectBrowserVersion(name, agent);
                browser.shortVersion = getBrowserShortVersion(browser.version);
                browser.result = setSuccessResult();
                return browser;
            }

            // SiteLockSpider
            if (agent.indexOf("Yahoo! Slurp") !== -1) {
                browser.isBot = true;
                browser.name = "Yahoo! Slurp";
                browser.device = "Desktop";
                browser.version = detectBrowserVersion(name, agent);
                browser.shortVersion = null;
                browser.result = setSuccessResult();
                return browser;
            }

            // SiteLockSpider
            if (agent.indexOf("SiteLockSpider") !== -1) {
                browser.isBot = true;
                browser.name = "SiteLockSpider";
                browser.device = "Desktop";
                browser.version = detectBrowserVersion(name, agent);
                browser.shortVersion = null;
                browser.result = setSuccessResult();
                return browser;
            }

            // okhttp
            if (agent.indexOf("okhttp") !== -1) {
                browser.isBot = true;
                browser.name = "okhttp";
                browser.device = "Desktop";
                browser.version = detectBrowserVersion(name, agent);
                browser.shortVersion = null;
                browser.result = setSuccessResult();
                return browser;
            }

            // curl
            if (agent.indexOf("curl") !== -1) {
                browser.isBot = true;
                browser.name = "curl";
                browser.device = "Desktop";
                browser.version = detectBrowserVersion(name, agent);
                browser.shortVersion = getBrowserShortVersion(browser.version);
                browser.result = setSuccessResult();
                return browser;
            }

            // ips-agent
            if (agent.indexOf("ips-agent") !== -1) {
                browser.isBot = true;
                browser.name = "ips-agent";
                browser.device = "Mobile";
                browser.version = detectBrowserVersion(name, agent);
                browser.shortVersion = null;
                browser.result = setSuccessResult();
                return browser;
            }

            // BLEXBot
            if (agent.indexOf("BLEXBot") !== -1) {
                browser.isBot = true;
                browser.name = "BLEXBot";
                browser.device = "Desktop";
                browser.version = detectBrowserVersion(name, agent);
                browser.shortVersion = getBrowserShortVersion(browser.version);
                browser.result = setSuccessResult();
                return browser;
            }

            // YandexBot
            if (agent.indexOf("YandexBot") !== -1) {
                browser.isBot = true;
                browser.name = "YandexBot";
                browser.device = "Desktop";
                browser.version = detectBrowserVersion(name, agent);
                browser.shortVersion = getBrowserShortVersion(browser.version);
                browser.result = setSuccessResult();
                return browser;
            }

            // ScoutJet
            if (agent.indexOf("ScoutJet") !== -1) {
                browser.isBot = true;
                browser.name = "ScoutJet";
                browser.device = "Desktop";
                browser.version = detectBrowserVersion(name, agent);
                info.browserVersionShort = null;
                browser.result = setSuccessResult();
                return browser;
            }


        }

        /**
         * Extract OS informations
         * @param {agent} user agent
         * @return {os} Object
         */
        var osDetect = function (agent) {
            var os = {
                name: '',
                version: '',
                result: {
                    status: '',
                    info: ''
                }
            };

            // user agent validation
            if (!agent) {
                os.result.status = 'error';
                os.result.info = 'Missing agent parameter';
                return os;
            }

            // Linux
            if (agent.indexOf("Linux") !== -1 && agent.indexOf("Android") === -1) {
                os.name = "Linux";
                os.version = osVersionDetect(agent);
                os.result = setSuccessResult();
                console.log("OS: ", os);
                return os;
            }

            // Windows
            if (agent.indexOf("Windows") !== -1) {
                os.name = "Windows";
                os.version = osVersionDetect(agent);
                os.result = setSuccessResult();
                return os;
            }
            if (agent.indexOf("Win") !== -1) {
                info.osName = "Windows";
                info.osVersion = osVersionDetect();
                return true;
            }

            // Xbox
            if (agent.indexOf("Xbox") !== -1) {
                info.osName = "Windows";
                info.osVersion = osVersionDetect();
                return true;
            }

            // Xbox One
            if (agent.indexOf("Xbox One") !== -1) {
                info.osName = "Windows";
                info.osVersion = osVersionDetect();
                return true;
            }

            // Windows Phone
            if (agent.indexOf("Windows Phone") !== -1 && info.userAgent.indexOf("Xbox") == -1) {
                info.osName = "Windows Phone";
                info.osVersion = osVersionDetect();
                return true;
            }

            // Android
            if (agent.indexOf("Android") !== -1) {
                info.osName = "Android";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (agent.indexOf("MJ12bot") !== -1) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (agent.indexOf("Googlebot") !== -1) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (agent.indexOf("AdsBot-Google-Mobile") !== -1) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (agent.indexOf("bingbot") !== -1) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (agent.indexOf("SimplePie") !== -1) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (agent.indexOf("BingPreview") !== -1) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (agent.indexOf("Yahoo! Slurp") !== -1) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (agent.indexOf("SiteLockSpider") !== -1) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (agent.indexOf("okhttp") !== -1) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (agent.indexOf("curl") !== -1) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (agent.indexOf("ips-agent") !== -1) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (agent.indexOf("BLEXBot") !== -1) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (agent.indexOf("YandexBot") !== -1) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }
            if (agent.indexOf("ScoutJet") !== -1) {
                info.osName = "Search Engine";
                info.osVersion = osVersionDetect();
                return true;
            }

            // Game Consoles
            if (agent.indexOf("Xbox") !== -1) {
                if (info.userAgent.search(/NT \d\.\d/i) !== -1) {
                    info.osName = "Windows";
                    info.osVersion = osVersionDetect();
                    info.device = "Xbox 360 Desktop Mode";
                    return true;
                }
                if (agent.indexOf("Windows Phone") !== -1) {
                    info.osName = "Windows";
                    info.osVersion = osVersionDetect();
                    info.device = "Xbox 360 Mobile Mode";
                    return true;
                }
                if (agent.indexOf("Xbox One") !== -1) {
                    info.osName = "Windows";
                    info.osVersion = osVersionDetect();
                    info.device = "Xbox One";
                    return true;
                }
            }
        }     


        /**
         * Extract OS version informations
         * @param {agent} user agent
         * @return array with match version
         */
        var osVersionDetect = function (agent) {
            // Android
            if (agent.indexOf("Android") !== -1 && agent.indexOf("Windows Phone") == -1) {
                var extract = info.userAgent.match(/Android \d\.\d\.?\d?/i);
                var splited = extract[0].split("Android");
                return splited[1].trim();
            }

            // Windows

            if (agent.indexOf("Windows") !== -1 || agent.indexOf("Win95") !== -1) {
                var osVersion = agent.match(/(NT) \d\d?\.\d\d?|Windows 98; Win 9x 4.90|Windows ME|Windows 98|Win98|Windows 95|Win95|Windows CE|Windows XP|WinNT4.0|Windows Phone OS \d\.\d|Windows Phone \d\d?\.\d/i);
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
            if (agent.indexOf("Xbox") !== -1) {
                return null;
            }
        }

        
        _infuzzy.getInfo = function (agentString) {
            var browser;
            var os;
            var agent = agentString ? agentString : navigator.userAgent;

            browser = browserDetect(agent);
            if (!browser || browser.result.status == 'error') {
                return browser.result;
            } else {
                info.browserName = browser.name;
                info.browserVersion = browser.version;
                info.browserVersionShort = browser.shortVersion;
                info.result = browser.result;
                info.isBot = browser.isBot;
            }

            os = osDetect(agent);
            if (!os || os.result.status == 'error') {
                return os.result;
            } else {

                info.osName = os.name;
                info.osVersion = os.version;
            }
            info.userAgent = agent;
            return info;
        };

        return _infuzzy;
    }

    if (typeof(window.infuzzy) === 'undefined') {
        window.infuzzy = infuzzy();
    }

})(window);