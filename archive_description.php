function custom_archive_description_no_first_letter( $description ) {
    // Check if the description is not empty and is a string
    if ( ! empty( $description ) && is_string( $description ) ) {
        // Remove the first character using substr()
        $description = substr( $description, 1 );
    }
    return $description;
}
add_filter( 'get_the_archive_description', 'custom_archive_description_no_first_letter' );
