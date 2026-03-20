document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      var name = this.getAttribute('data-tab');
      document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
      document.querySelectorAll('.nav-tab').forEach(function(t) { t.classList.remove('active'); });
      document.getElementById('tab-' + name).classList.add('active');
      this.classList.add('active');
    });
  });
});
