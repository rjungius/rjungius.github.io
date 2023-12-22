

function showTab(tabIndex) {

    // add active class to the current button (highlight it)
    var tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    var selectedTabButton = this.event.currentTarget;
    selectedTabButton.className += " active";


    // Hide all tabs
    var tabs = document.getElementsByClassName("tab");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    // Show the selected tab
    var selectedTab = document.getElementById("tab" + tabIndex);
    if (selectedTab) {
        selectedTab.style.display = "block";
    }
}