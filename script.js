// Function to copy the chosen emoji to the clipboard.
function copyImg(folder, file){
	var path = require('path');
	const {clipboard} = require('electron');
	clipboard.writeImage(path.join(__dirname, ('assets/emoji/' + folder + '/png_24/' + file)));
}

// Function to open the chosen tab.
function openCategory(evt, categoryName) {
    var tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them.
    tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active".
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";
}
