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
            language: null,
        }

        function extractVersion(browser) {
            if(info.userAgent.indexOf(browser)){
                var browserVersion = info.userAgent.match(/Chrome\/((\d+\.)+\d+)/);
                browserVersion = browserVersion[0].split("/");
                return browserVersion[1];
            }
        };

        _infuzzy.sayHi = function () {
            console.log("Hi stranger, infuzzy is ready to action!");
        };

        _infuzzy.getInfo = function () {

            // Chrome for Android
            if (info.userAgent.search(/Chrome\/[.0 - 9] * Mobile/i) >= 0) {
                info.browserName = "Chrome for Android";
                info.device = "Phone";
                info.browserVersion = extractVersion(info.browserName);
                info.browserVersionShort = info.browserVersion.substring(0, 2);
            }
            else {  //Chrome for Tablet
                if (info.userAgent.search(/Chrome\/[.0-9]* (?!Mobile)/i) >= 0 &&
                info.userAgent.indexOf("Linux") >= 0 && info.userAgent.indexOf("Android") >= 0) {

                    info.browserName = "Chrome for Android";
                    info.device = "Tablet";
                    info.browserVersion = extractVersion(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 2);
                }
                else { //Chrome Computer
                    info.browserName = "Chrome";
                    info.device = "Computer";
                    info.browserVersion = extractVersion(info.browserName);
                    info.browserVersionShort = info.browserVersion.substring(0, 2);
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