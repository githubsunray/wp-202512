document.addEventListener('DOMContentLoaded', function () {



    document.addEventListener('DOMContentLoaded', function () {

  document.querySelectorAll('.menu-item-has-children > a').forEach(link => {

    // 捕获阶段，先于 Elementor 执行
    link.addEventListener('click', function (e) {

      // 阻止 Elementor 的展开逻辑
      e.stopImmediatePropagation();

      // 强制跳转（保证跳转生效）
      window.location.href = this.href;

    }, true); // 👈 捕获阶段，关键
  });

});


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
