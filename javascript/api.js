$("#wonder").on("click", function(event){
  var checkbox, checkboxes;
  checkboxes = (function() {
    var i, len, ref, results;
    ref = $("#types input");
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      checkbox = ref[i];
      if (checkbox.checked) {
        results.push(checkbox);
      }
    }
    return results;
  })();
  var lat = window.google_map.getCenter().k;
  var lon = window.google_map.getCenter().d;
})
