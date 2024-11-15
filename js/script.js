<script>
  // Get the hamburger menu and navbar links
  const hamburger = document.querySelector('.hamburger');
  const navbarLinks = document.querySelector('.navbar-links');

  // Add a click event listener to the hamburger menu
  hamburger.addEventListener('click', () => {
    navbarLinks.classList.toggle('active'); // Toggle the 'active' class
  });
</script>
