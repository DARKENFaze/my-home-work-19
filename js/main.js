document.addEventListener('DOMContentLoaded', (event) => {
    var sidebar = document.querySelector('chatgpt-sidebar');
    if (sidebar) {
      sidebar.remove();
    }
  });