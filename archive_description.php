add_filter('term_description', 'wc_remove_first_letter_from_product_archive', 10, 1);

function wc_remove_first_letter_from_product_archive($description) {

    // 后台 / 空内容直接返回
    if (is_admin() || empty($description)) {
        return $description;
    }

    // 只作用于 WooCommerce 产品分类页
    if (!is_product_category()) {
        return $description;
    }

    // 去掉 HTML，只处理纯文本
    $text = trim(wp_strip_all_tags($description));

    // 删除第一个字母 + 后面的空格
    $text = preg_replace('/^[A-Za-z]\s*/', '', $text, 1);

    // 包回 <p>，保持原有结构
    return '<p>' . esc_html($text) . '</p>';
}
