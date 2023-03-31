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
    // Convert the number of days to milliseconds
    var expiryTime = days * 24 * 60 * 60 * 1000;
  
    // Create a Date object with the current time plus the expiry time
    var expiryDate = (Date.now() + expiryTime);
  
    return expiryDate;
}

function getExpiry(date) {
    date -= Date.now();

    date /= 24;
    date /= 60;
    date /= 60;
    date /= 1000;

    return date.toFixed(0);
}

function addedTime() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    return today;
}

function refresh_apps() {
    var cookie;
    var time;

    cookie = getCookie("app_one");
    createCookie("app_one", cookie, 7);
    createCookie("exp_one", createExpiry(7), 7);
    time = getCookie("add_one");
    createCookie("add_one", time, 7);  

    cookie = getCookie("app_two");
    createCookie("app_two", cookie, 7);
    createCookie("exp_two", createExpiry(7), 7);
    time = getCookie("add_two");
    createCookie("add_two", time, 7);
        
    cookie = getCookie("app_three");
    createCookie("app_three", cookie, 7);
    createCookie("exp_three", createExpiry(7), 7);
    time = getCookie("add_three");
    createCookie("add_three", time, 7);

    createCookie("flag", 0, 365);
    
}

function refresh(num) {
    var cookie;
    var time;

    switch(num) {
        case 1: 
            cookie = getCookie("app_one");
            createCookie("app_one", cookie, 7);
            createCookie("exp_one", createExpiry(7), 7);
            time = getCookie("add_one");
            createCookie("add_one", time, 7); 
        break;
        case 2:
            cookie = getCookie("app_two");
            createCookie("app_two", cookie, 7);
            createCookie("exp_two", createExpiry(7), 7);
            time = getCookie("add_two");
            createCookie("add_two", time, 7);
        break;
        case 3: 
            cookie = getCookie("app_three");
            createCookie("app_three", cookie, 7);
            createCookie("exp_three", createExpiry(7), 7);
            time = getCookie("add_three");
            createCookie("add_three", time, 7);
        break;
    }

    createCookie("flag", 0, 365);

}

function deleteCookies() {
    document.cookie = "app_one" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "exp_one" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "add_one" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    document.cookie = "app_two" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "exp_two" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "add_two" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    
    document.cookie = "app_three" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "exp_three" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "add_three" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
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
          }
        })
      
        })()

    createCookie("flag", 0, 365);
}

function notifications() {
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

    //SPERIMENTALE

    var flag = getCookie("flag");

    // 1 giorno = 518400000 minuti
    // 1 minuto = 60000 millisecondi

    if(getExpiry(getCookie("exp_one")) <= 2 && getCookie("app_one") != "" && flag == 0) {
        const notification = new Notification("Less than 2 days remaining! Refresh your apps!");
        createCookie("flag", 1, 365);
        sleep(518400000*60000);
    } else if(getExpiry(getCookie("exp_one")) <= 1 && getCookie("app_one") != "" && flag == 1) {
        const notification = new Notification("Less than 1 day remaining! Refresh your apps!");
        createCookie("flag", 2, 365);
    }

    if(getExpiry(getCookie("exp_two")) <= 2 && getCookie("app_two") != "" && flag == 0) {
        const notification = new Notification("Less than 2 days remaining! Refresh your apps!");
        createCookie("flag", 1, 365);
        sleep(518400000*60000);
    } else if(getExpiry(getCookie("exp_two")) <= 1 && getCookie("app_two") != "" && flag == 1) {
        const notification = new Notification("Less than 1 day remaining! Refresh your apps!");
        createCookie("flag", 2, 365);
    }

    if(getExpiry(getCookie("exp_three")) <= 2 && getCookie("app_three") != "" && flag == 0) {
        const notification = new Notification("Less than 2 days remaining! Refresh your apps!");
        createCookie("flag", 1, 365);
        sleep(518400000*60000);
    } else if(getExpiry(getCookie("exp_three")) <= 1 && getCookie("app_three") != "" && flag == 1) {
        const notification = new Notification("Less than 1 day remaining! Refresh your apps!");
        createCookie("flag", 2, 365);
    }
    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
}