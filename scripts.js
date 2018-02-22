//scripts.js

var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');
var capitalsList = $('#capitals');
var populationList = $('#population');

$('#search').click(searchCountries);

function searchCountries() {
  var countryName = $('#country-name').val();

  if (!countryName.length)  {
    countryName = 'Poland';
  };

$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

$('#country-name').click.empty();

function showCountriesList(resp) {
  countriesList.empty();
  capitalsList.empty();
  populationList.empty();

  resp.forEach(function(item) {
    $('<li>').text(item.name).appendTo(countriesList);
    $('<li>').text(item.capital).appendTo(capitalsList);
    $('<li>').text(item.population).appendTo(populationList);
  });}
