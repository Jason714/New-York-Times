$("search").on("click", function() {
var keyword = $(this).attr("search-term");
var queryURL = "https://api.nytimes.com/svc/archive/v1/2019/1.json?api-key=trYrAJiBj7kjYiME3HtjG2BbwZLFbDVu";
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(res) {
    console.log(res);
    console.log(res);
  });
});
