const searchInput = document.querySelector('#search');
const searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  
  // Perform search operation using the searchTerm
  // You can customize this part based on your search implementation
  
  console.log(`Performing search for: ${searchTerm}`);
});