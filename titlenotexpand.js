document.addEventListener('DOMContentLoaded', function () {

  const items = document.querySelectorAll('.menu-item-has-children');

  items.forEach(item => {

    if (item.querySelector('.menu-toggle')) return;

    const link = item.querySelector(':scope > a');
    const toggle = document.createElement('span');

    toggle.className = 'menu-toggle';
    toggle.innerHTML = '<span class="icon"></span>';

    // 插入在文字后面
    link.after(toggle);

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = item.classList.contains('open');

      // 关闭其他菜单
      items.forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
        }
      });

      // 仅由 toggle 控制展开
      item.classList.toggle('open', !isOpen);
    });

  });

});
