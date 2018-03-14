$(function () {

  var colors = ['#fff', '#EFD2A0', '#91D0B1', '#EC845C', '#F0F0D8', '#F0D8A8', '#D8C078'];
  getQuote();
  getColor(colors);

  function getQuote() {
    $.getJSON("https://got-quotes.herokuapp.com/quotes", function (data) {
      $.each(data, function (key, val) {
        $('p').html(data.quote + "<br><cite>- " + data.character + "</cite>");
      });
    });
  }

  function getColor(colors) {
    var color = colors[Math.floor(Math.random() * colors.length)];
    $('p').css('color', color);
  }

  $('button').on('click', function () {
    getQuote();
    getColor(colors);
  })

});