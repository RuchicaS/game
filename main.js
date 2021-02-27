function hitUrl(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("result").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "http://game-jesu.us-e2.cloudhub.io/" + url, true);
    xhttp.send();
}