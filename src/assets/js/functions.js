function createCookie(name, value, days) {
    // Convert the number of days to milliseconds
    var expiryTime = days * 24 * 60 * 60 * 1000;
    // Create a Date object with the current time plus the expiry time
    var expiryDate = new Date(Date.now() + expiryTime);
    // Convert the expiry date to a string in the correct format
    var expiryStr = expiryDate.toUTCString();
    // Create the cookie string
    var cookieStr = name + '=' + value + '; expires=' + expiryStr + '; path=/';
    // Set the cookie
    document.cookie = cookieStr;
}


function getCookie(cname) {
    //This function returns the cookie content

    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
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

    return expiry.toFixed(0);
}



function deleteApp() {
    //This function opens the modal to confirm the delition
}