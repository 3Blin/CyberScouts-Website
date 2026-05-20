document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('close-btn');
  const overlay = document.getElementById('overlay');
  const sidebarLinks = document.querySelectorAll('.sidebar-link');

  const openSidebar = () => {
    sidebar?.classList.add('active');
    overlay?.classList.add('active');
    document.body.classList.add('sidebar-open');
  };

  const closeSidebar = () => {
    sidebar?.classList.remove('active');
    overlay?.classList.remove('active');
    document.body.classList.remove('sidebar-open');
  };

  menuToggle?.addEventListener('click', openSidebar);
  closeBtn?.addEventListener('click', closeSidebar);
  overlay?.addEventListener('click', closeSidebar);
  sidebarLinks.forEach((link) => link.addEventListener('click', closeSidebar));
});
