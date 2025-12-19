<script>
document.addEventListener('DOMContentLoaded', function () {

  const gallery = document.querySelector('.el-product-gallery');
  if (!gallery) return;

  const images = gallery.querySelectorAll(
    '.woocommerce-product-gallery__image'
  );

  if (images.length <= 1) return;

  let index = 0;

  // 初始化
  images.forEach((img, i) => {
    img.style.display = i === 0 ? 'block' : 'none';
  });

  // 创建按钮
  const prev = document.createElement('button');
  const next = document.createElement('button');

  prev.innerHTML = '‹';
  next.innerHTML = '›';

  prev.className = 'el-gallery-prev';
  next.className = 'el-gallery-next';

  gallery.appendChild(prev);
  gallery.appendChild(next);

  function show(i) {
    images.forEach((img, idx) => {
      img.style.display = idx === i ? 'block' : 'none';
    });
  }

  prev.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    show(index);
  });

  next.addEventListener('click', () => {
    index = (index + 1) % images.length;
    show(index);
  });

});
</script>
