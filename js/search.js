var data = [
  `Gucci Narxi:210 000 so'm. Matosi "Havei"`,
  `Tigr Narxi:230 000 so'm. Matosi "Havei"`,
  `Atirgul Narxi:180 000 so'm. Matosi "Havei"`,
  `Yurak Narxi:210 000 so'm. Matosi "Havei"`,
  `Romashka Narxi:200 000 so'm. Matosi "Havei"`,
  `Kapalak Narxi:210 000 so'm. Matosi "Havei"`,
  `Louis Vuitton Narxi:230 000 so'm. Matosi "Havei"`,
  `Ko'k Choyshab Narxi:210 000 so'm. Matosi "Havei"`,
  `Choyshab Narxi:210 000 so'm. Matosi "Havei"`
];

function search() {
  var searchTerm = document.getElementById("searchInput").value;
  var resultsList = document.getElementById("resultsList");
  resultsList.innerHTML = "";
  
  data.forEach(function(item) {
    if (item.toLowerCase().includes(searchTerm.toLowerCase())) {
      var li = document.createElement("li");
      li.textContent = item;
      resultsList.appendChild(li);
    }
  });
  
  // Hide results after 2.5 seconds
  setTimeout(function() {
    resultsList.innerHTML = "";
  }, 2500);
}


