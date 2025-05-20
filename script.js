let currentPage = 1;

function nextPage() {
  document.getElementById(`page${currentPage}`).classList.remove('active');
  currentPage++;
  const next = document.getElementById(`page${currentPage}`);
  if (next) {
    next.classList.add('active');
  }
}
