// UI Variables 


// UI functions 

function openVerticalTab(button, tabName) {
  var i, maintabcontent, maintablinks;
  maintabcontent = document.getElementsByClassName("maintabcontent");
  for (i = 0; i < maintabcontent.length; i++) {
    maintabcontent[i].style.display = "none";
  }
  maintablinks = document.getElementsByClassName("maintablinks");
  for (i = 0; i < maintablinks.length; i++) {
    maintablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  button.classList.add("active");
}

function openTab(button, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  button.classList.add("active");
}

function updateCandies(rate) {
  $("#candiesQuantity").html(resources["Candies"]);
  $("#candiesRate").html(rate);
}

function updateSweetness(rate) {
  $("#sweetnessQuantity").html(resources["Sweetness"]);
  $("#sweetnessRate").html(rate);
}

$(document).ready(function() {
  // Attach click events 
  $("#CandiesTab").click(function() { openVerticalTab(this, "Candies") });
  $("#ProductionTab").click(function() { openTab(this, "Production") });
  $("#resourceCandies").hover(function() { document.getElementById("candiesRateContainer").style.display = "inline"; }, function() { document.getElementById("candiesRateContainer").style.display = "none"; });
  $("#resourceSweetness").hover(function() { document.getElementById("sweetnessRateContainer").style.display = "inline"; }, function() { document.getElementById("sweetnessRateContainer").style.display = "none"; });
})