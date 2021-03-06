// run init on window load
window.addEventListener("load", init);
DATA = "indeksas.json";

/**
 * Init - Bootstrap
 */
function init() {
    fetchLinks();
}

/**
 * Fetch and parse json
 */
function fetchLinks() {
    var request;
    var groupObj;
    if (XMLHttpRequest) {
        request = new XMLHttpRequest();
    } else {
        console.log("No  XMLHttpRequest/AJAX support");
    }
    request.open("GET", DATA);
    request.overrideMimeType("application/json");
    request.send(null);
    request.onreadystatechange = function() {
        if ((request.readyState == 4) && (request.status == 200)) {
            groupObj = JSON.parse(request.responseText);
            renderLinks(groupObj);
        }
    }
}

/**
 * Loop through object, render returned html
 * @param {*} obj 
 */
function renderLinks(obj) {
    var groupLength = obj.groups.length;
    var ul = document.getElementsByTagName("body")[0];
    var i;

    for(i = 0; i < groupLength; i++) {
        ul.innerHTML += renderGroup(obj.groups[i]);
    }
}

/**
 * Render each group separately, parse potential color codes
 * @param {*} obj 
 */
function renderGroup(obj) {
    var origGroupName = Object.keys(obj)[0];
    var groupName = "";
    var color = "#fff";
    var itemArrLength = obj[origGroupName].length;
    var html = "";
    var i;

    if (origGroupName.includes("#")) {
        color = origGroupName.substring(origGroupName.indexOf("#"));
        groupName = origGroupName.slice(0, origGroupName.indexOf("#"))
    } else {
        groupName = origGroupName;
    }

    html += '<div class="group">';
    html += `<h2 style="color:${color}">${groupName}</h2>`;
    html += '<ul>';
    for (i = 0; i < itemArrLength; i++) {
        html += renderItem(obj[origGroupName][i], color);
    }
    html += '</ul';
    html += '</div>';

    return html;
}

/**
 * Render each item separately
 * @param {*} obj 
 * @param {*} col 
 */
function renderItem(obj, col) {
    var html = "";
    html = `<li style="border-left: 2px solid ${col}"><a href="${obj.url}"><img src="https://www.google.com/s2/favicons?domain=${obj.url}">${obj.name}</a></li>`;

    return html;
}
