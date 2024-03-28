function createCookie(name, value, days) {
    //This function creates a cookie given name, value and expiry in days

    var expiryTime = days * 24 * 60 * 60 * 1000;
    var expiryDate = new Date(Date.now() + expiryTime);
    var expiryStr = expiryDate.toUTCString();
    var cookieStr = name + '=' + value + '; expires=' + expiryStr + '; path=/';
    document.cookie = cookieStr;
}


function getCookie(cname) {
    //This function returns the cookie content

    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function createExpiry(days) {
    //This function returns the current time + the expiry (given in days as a parameter) in milliseconds

    var expiryTime = days * 24 * 60 * 60 * 1000;
    var expiryDate = (Date.now() + expiryTime);

    return expiryDate;
}

function getExpiry(expiry) {
    //This function returns the days left until a given expiry is reached

    expiry -= Date.now();

    expiry /= 24;
    expiry /= 60;
    expiry /= 60;
    expiry /= 1000;

    if(expiry <= 0) {
        return "Expired";
    }

    return expiry.toFixed(0) + " Days";
}

function refreshApp(number) {
    //This function refreshes the selected app cookie

    const parts = getCookie(number).split('~');
    createCookie(number, parts[0] + '~' + parts[1] + '~' + createExpiry(7), 365);
}

function deleteApp(number) {
    //This function deletes the selected app cookie

    document.cookie =  number + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

export { createCookie, getCookie, createExpiry, getExpiry, refreshApp, deleteApp };