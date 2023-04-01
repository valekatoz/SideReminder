/* Functions */

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
    for(let i = 0; i <ca.length; i++) {
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

function addedTime() {
    //This function returns the current date in the format dd/mm/yyyy

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    return today;
}

function add_apps() {
    (async () => {

        const { value: formValues } = await Swal.fire({
          title: 'Add multiple applications',
          html:
            '<p>(1) Application Name (Leave blank to keep it as it is):</p><input id="name_one">' +
            '<p>(2) Application Name (Leave blank to keep it as it is):</p><input id="name_two">' +
            '<p>(3) Application Name (Leave blank to keep it as it is):</p><input id="name_three">',
          focusConfirm: false,
          preConfirm: () => {
            if (document.getElementById('name_one').value != "") {
                createCookie("app_one", document.getElementById('name_one').value, 7);
                createCookie("exp_one", createExpiry(7), 7);
                createCookie("add_one", addedTime(), 7);
            }
            if (document.getElementById('name_two').value != "") {
                createCookie("app_two", document.getElementById('name_two').value, 7);
                createCookie("exp_two", createExpiry(7), 7);
                createCookie("add_two", addedTime(), 7);
            }
            if (document.getElementById('name_three').value != "") {
                createCookie("app_three", document.getElementById('name_three').value, 7);
                createCookie("exp_three", createExpiry(7), 7);
                createCookie("add_three", addedTime(), 7);
            }

            //refresh page
            location.reload()

          }
        })
      
        })()

    //notifications flag
    createCookie("flag", 0, 365);
}

function refresh_app(num) {
    //refreshes a single app

    switch(num) {
        case 1: 
            var name = "one";
        break;

        case 2: 
            var name = "two";
        break;

        case 3:
            var name = "three";
        break;
    }

    var cookie = getCookie("app_" + name);
    var expiry = createExpiry(7);
    var added_time = getCookie("add_" + name);

    createCookie("app_" + name, cookie, 7);
    createCookie("exp_" + name, expiry, 7);
    createCookie("add_" + name, added_time, 7);
        
    //notifications flag
    createCookie("flag", 0, 365);
        
    //refresh page
    location.reload()
}

function refresh_all_apps() {
    //refreshes all the apps

    refresh_app(1);
    refresh_app(2);
    refresh_app(3);
}

function delete_app(num) {
    //deletes a specific app

    switch(num) {
        case 1: 
            var name = "one";
        break;

        case 2: 
            var name = "two";
        break;

        case 3:
            var name = "three";
        break;
    }

    document.cookie = "app_" + name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "exp_" + name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "add_" + name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    //notifications flag
    createCookie("flag", 0, 365);

    //refresh page
    location.reload()
}

function delete_all_apps() {
    //deletes all the apps

    delete_app(1);
    delete_app(2);
    delete_app(3);
}

function notifications() {
    // Could be done 100 times better, just like the other functions but this one is ass

    if (!("Notification" in window)) {
        // Check if the browser supports notifications
        alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
        // Check whether notification permissions have already been granted;
    } else if (Notification.permission !== "denied") {
        // We need to ask the user for permission
        Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
            //const notification = new Notification("Hi there!");
        }
        });
    }

    var flag = getCookie("flag");
    const giorno = 1440*60000;

    // 1 giorno = 1440 minuti
    // 1 minuto = 60000 millisecondi

    if(getExpiry(getCookie("exp_one")) <= 2 && getCookie("app_one") != "" && flag == 0) {
        const notification = new Notification("Less than 2 days remaining! Refresh your apps!");
        createCookie("flag", 1, 365);
        sleep(giorno);
    } else if(getExpiry(getCookie("exp_one")) <= 1 && getCookie("app_one") != "" && flag == 1) {
        const notification = new Notification("Less than 1 day remaining! Refresh your apps!");
        createCookie("flag", 2, 365);
    }

    if(getExpiry(getCookie("exp_two")) <= 2 && getCookie("app_two") != "" && flag == 0) {
        const notification = new Notification("Less than 2 days remaining! Refresh your apps!");
        createCookie("flag", 1, 365);
        sleep(giorno);
    } else if(getExpiry(getCookie("exp_two")) <= 1 && getCookie("app_two") != "" && flag == 1) {
        const notification = new Notification("Less than 1 day remaining! Refresh your apps!");
        createCookie("flag", 2, 365);
    }

    if(getExpiry(getCookie("exp_three")) <= 2 && getCookie("app_three") != "" && flag == 0) {
        const notification = new Notification("Less than 2 days remaining! Refresh your apps!");
        createCookie("flag", 1, 365);
        sleep(giorno);
    } else if(getExpiry(getCookie("exp_three")) <= 1 && getCookie("app_three") != "" && flag == 1) {
        const notification = new Notification("Less than 1 day remaining! Refresh your apps!");
        createCookie("flag", 2, 365);
    }
}

/* Main (ig)*/

notifications();
