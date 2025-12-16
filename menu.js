document.addEventListener('DOMContentLoaded', function () {

  const menuItems = document.querySelectorAll('.menu-item-has-children');

  menuItems.forEach(item => {

    // 防止重复插入 toggle
    if (item.querySelector('.menu-toggle')) return;

    const link = item.querySelector(':scope > a');
    const toggle = document.createElement('span');

    toggle.className = 'menu-toggle';
    toggle.innerHTML = '▸';

    link.after(toggle);

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      // 关闭其他已打开的菜单
      menuItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
        }
      });

      // 切换当前菜单
      item.classList.toggle('open');
    });

  });

});
