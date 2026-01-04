add_action(
    'woocommerce_archive_description',
    'custom_product_category_description_after_title',
    20
);

function custom_product_category_description_after_title() {

    // 只在产品分类页
    if (!is_product_category()) {
        return;
    }

    $term = get_queried_object();

    if (!$term || empty($term->description)) {
        return;
    }

    echo '<div class="product-category-description">';
    echo wpautop(wp_kses_post($term->description));
    echo '</div>';
}
