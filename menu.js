document.addEventListener('DOMContentLoaded', function () {

  const menuItems = document.querySelectorAll('.menu-item-has-children');

  menuItems.forEach(item => {

    if (item.querySelector('.menu-toggle')) return;

    const link = item.querySelector(':scope > a');
    const toggle = document.createElement('span');

    toggle.className = 'menu-toggle';
    toggle.textContent = '+';

    link.after(toggle);

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = item.classList.contains('open');

      // 关闭其他菜单，并重置 icon
      menuItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          const otherToggle = other.querySelector('.menu-toggle');
          if (otherToggle) {
            otherToggle.textContent = '+';
          }
        }
      });

      // 切换当前菜单
      if (isOpen) {
        item.classList.remove('open');
        toggle.textContent = '+';
      } else {
        item.classList.add('open');
        toggle.textContent = '-';
      }

    });

  });

});
