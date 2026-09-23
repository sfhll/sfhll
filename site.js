  (function(){
    var menu = document.getElementById('m');
    var btn  = document.querySelector('.menu-btn');
    function close(){
      menu.classList.remove('open');
      if(btn) btn.setAttribute('aria-expanded', 'false');
    }
    document.querySelectorAll('nav a').forEach(function(a){ a.addEventListener('click', close); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });
    document.addEventListener('click', function(e){
      if(!menu.classList.contains('open')) return;
      if(menu.contains(e.target) || (btn && btn.contains(e.target))) return;
      close();
    });
  })();

  (function(){
    function flip(s){ return s.split('').reverse().join(''); }
    document.querySelectorAll('.mail').forEach(function(a){
      var m = flip(a.getAttribute('data-u')) + '@' + flip(a.getAttribute('data-d'));
      a.href = 'mailto:' + m;
      a.textContent = m;
    });
  })();
