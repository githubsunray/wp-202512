jQuery(function ($) {
  const interval = setInterval(() => {
    const $gallery = $('.woocommerce-product-gallery');

    if (!$gallery.length) return;

    $gallery.flexslider({
      animation: 'slide',
      slideshow: true,          // 自动播放
      slideshowSpeed: 3000,     // 切换间隔（毫秒）
      animationSpeed: 600,
      pauseOnHover: true,
      controlNav: 'thumbnails',
      directionNav: true,
    });

    clearInterval(interval);
  }, 300);
});
