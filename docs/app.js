var info = infuzzy.getInfo();
document.getElementById("version").innerHTML = info.browserVersion;
document.getElementById("agent").innerHTML = info.userAgent;
document.getElementById("shortVersion").innerHTML = info.browserVersionShort;
document.getElementById("name").innerHTML = info.browserName;