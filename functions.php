
<?php


function load_stylesheets()
{
    wp_register_style('et-line', get_template_directory_uri() . '/css/et-line.css', array(), 1, 'all');
    wp_enqueue_style('et-line');

    wp_register_style('animate', get_template_directory_uri() . '/css/animate.css', array(), 1, 'all');
    wp_enqueue_style('animate');

    wp_register_style('bootstrap', get_template_directory_uri() . '/css/bootstrap.css', array(), 1, 'all');
    wp_enqueue_style('bootstrap');

    wp_register_style('bootstrapmin', get_template_directory_uri() . '/css/bootstrap.min.css', array(), 1, 'all');
    wp_enqueue_style('bootstrapmin');

    wp_register_style('styles', get_template_directory_uri() . '/style.css', array(), 1, 'all');
    wp_enqueue_style('styles');

    wp_register_style('bootstrapTheme', get_template_directory_uri() . '/css/bootstrap-theme.css', array(), 1, 'all');
    wp_enqueue_style('bootstrapTheme');

    wp_register_style('stoke', get_template_directory_uri() . '/css/stroke.css', array(), 1, 'all');
    wp_enqueue_style('stroke');

    wp_register_style('carousel', get_template_directory_uri() . '/css/carousel.css', array(), 1, 'all');
    wp_enqueue_style('carousel');
}

add_action('wp_enqueue_scripts', 'load_stylesheets');






function wpb_add_fonts()
{

    wp_enqueue_style('wpb-google-fonts', 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700&display=swap', false);
}

add_action('wp_enqueue_scripts', 'wpb_add_fonts');


function wpb_add_icon_font()
{
    wp_enqueue_style('bootstrap-font', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css', false);
}

add_action('wp_enqueue_scripts', 'wpb_add_icon_font');




function enqueue_load_fa()
{
    wp_enqueue_style('load-fa', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css');
}
add_action('wp_enqueue_scripts', 'enqueue_load_fa');

//load scripts


function addjs()

{
    wp_register_script('contact', get_template_directory_uri() . '/js/contact.js', array(), 1, 1, 1);
    wp_enqueue_script('contact');

    wp_register_script('bootstrap', get_template_directory_uri() . '/js/bootstrap.min.js', array(), 1, 1, 1);
    wp_enqueue_script('bootstrap');

    wp_register_script('imagesloaded', get_template_directory_uri() . '/js/imagesloaded.pkgd.js', array(), 1, 1, 1);
    wp_enqueue_script('imagesloaded');

    wp_register_script('jquery', get_template_directory_uri() . '/js/libs/jquery-1.6.2.min.js', array(), 1, 1, 1);
    wp_enqueue_script('jquery');


    wp_register_script('swfobject', get_template_directory_uri() . '/js/libs/swfobject.js', array(), 1, 1, 1);
    wp_enqueue_script('swfobject');

    wp_register_script('jquery-min', get_template_directory_uri() . '/js/jquery.min.js', array(), 1, 1, 1);
    wp_enqueue_script('jquery-min');

    wp_register_script('superslider', get_template_directory_uri() . '/js/jquery.superslider.min.js', array(), 1, 1, 1);
    wp_enqueue_script('superslider');

    wp_register_script('throttle', get_template_directory_uri() . '/js/jquery.throttle.js', array(), 1, 1, 1);
    wp_enqueue_script('throttle');

    wp_register_script('wow', get_template_directory_uri() . '/js/wow.js', array(), 1, 1, 1);
    wp_enqueue_script('wow');

    wp_register_script('custom', get_template_directory_uri() . '/js/custom.js', array(), 1, 1, 1);
    wp_enqueue_script('custom');

    wp_register_script('parallax', get_template_directory_uri() . '/js/parallax.min.js', array(), 1, 1, 1);
    wp_enqueue_script('parallax');

    wp_register_script('prettyPhoto', get_template_directory_uri() . '/js/jquery.prettyPhoto.js', array(), 1, 1, 1);
    wp_enqueue_script('prettyPhoto');

    wp_register_script('fitvids', get_template_directory_uri() . '/js/jquery.fitvids.js', array(), 1, 1, 1);
    wp_enqueue_script('fitvids');
}

add_action('wp_enqueue_scripts', 'addjs');


function addgallery()
{


    wp_enqueue_script('carousel', get_template_directory_uri() . '/js/carousel.js', array('jquery'));

    wp_enqueue_script('owl-scripts', get_template_directory_uri() . '/js/owl-scripts.js', array('carousel'));

    wp_register_script('isotope', get_template_directory_uri() . '/js/isotope.js');
    wp_enqueue_script('isotope');

    wp_enqueue_script('masonry-fullwidth', get_template_directory_uri() . '/js/masonry-fullwidth.js', array('isotope'));

    wp_enqueue_script('masonry-1col', get_template_directory_uri() . '/js/masonry-1col.js', array('isotope'));
    wp_enqueue_script('masonry-2col', get_template_directory_uri() . '/js/masonry-2col.js', array('isotope'));
    wp_enqueue_script('masonry-3col', get_template_directory_uri() . '/js/masonry-3col.js', array('isotope'));
}

add_action('wp_enqueue_scripts', 'addgallery');



function add_rs_styles()
{
    wp_register_style('rs-settings', get_template_directory_uri() . '/rs-plugin/css/settings.css', array(), 1, 'all');
    wp_enqueue_style('rs-settings');
}

add_action('wp_enqueue_scripts', 'add_rs_styles');

function add_rs_js()
{
    wp_register_style('jquery.themepunch', get_template_directory_uri() . '/rs-plugin/js/jquery.themepunch.plugins.min.js', array(), 1, 'all');
    wp_enqueue_style('jquery.themepunch');

    wp_register_style('jquery.themepunch', get_template_directory_uri() . '/rs-plugin/js/jquery.themepunch.plugins.min.js', array(), 1, 'all');
    wp_enqueue_style('jquery.themepunch');

    wp_register_style('jquery.themepunch-revolution', get_template_directory_uri() . '/rs-plugin/js/jquery.themepunch.revolution.min.js', array(), 1, 'all');
    wp_enqueue_style('jquery.themepunch-revolution');

    wp_register_style('jquery.themepunch-revolution-js', get_template_directory_uri() . '/rs-plugin/js/jquery.themepunch.revolution.js', array(), 1, 'all');
    wp_enqueue_style('jquery.themepunch-revolution-js');

    wp_register_style('jquery.themepunch-tool', get_template_directory_uri() . '/rs-plugin/js/jquery.themepunch.tools.min.js', array(), 1, 'all');
    wp_enqueue_style('jquery.themepunch-tool');
}

add_action('wp_enqueue_scripts', 'add_rs_js');






//custom image sizes (false - i dont want it cropped) - we need plugin Force Regenerate Thumbnails 

add_image_size('large', 700, 700, true);
add_image_size('small', 400, 400, true);


// //Theme support
add_theme_support('menus');
add_theme_support('widgets');
add_theme_support('post-thumbnails');




function mytheme_custom_excerpt_length($length)
{
    return 20;
}
add_filter('excerpt_length', 'mytheme_custom_excerpt_length', 999);



// function register_navwalker()
// {
//     require_once get_template_directory() . '/class-wp-bootstrap-navwalker.php';
// }
// add_action('after_setup_theme', 'register_navwalker');



// bootstrap 5 wp_nav_menu walker
class bootstrap_5_wp_nav_menu_walker extends Walker_Nav_menu
{
    private $current_item;
    private $dropdown_menu_alignment_values = [
        'dropdown-menu-start',
        'dropdown-menu-end',
        'dropdown-menu-sm-start',
        'dropdown-menu-sm-end',
        'dropdown-menu-md-start',
        'dropdown-menu-md-end',
        'dropdown-menu-lg-start',
        'dropdown-menu-lg-end',
        'dropdown-menu-xl-start',
        'dropdown-menu-xl-end',
        'dropdown-menu-xxl-start',
        'dropdown-menu-xxl-end'
    ];

    function start_lvl(&$output, $depth = 0, $args = null)
    {
        $dropdown_menu_class[] = '';
        foreach ($this->current_item->classes as $class) {
            if (in_array($class, $this->dropdown_menu_alignment_values)) {
                $dropdown_menu_class[] = $class;
            }
        }
        $indent = str_repeat("\t", $depth);
        $submenu = ($depth > 0) ? ' sub-menu' : '';
        $output .= "\n$indent<ul class=\"dropdown-menu$submenu " . esc_attr(implode(" ", $dropdown_menu_class)) . " depth_$depth\">\n";
    }

    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0)
    {
        $this->current_item = $item;

        $indent = ($depth) ? str_repeat("\t", $depth) : '';

        $li_attributes = '';
        $class_names = $value = '';

        $classes = empty($item->classes) ? array() : (array) $item->classes;

        $classes[] = ($args->walker->has_children) ? 'dropdown' : '';
        $classes[] = 'nav-item';
        $classes[] = 'nav-item-' . $item->ID;
        if ($depth && $args->walker->has_children) {
            $classes[] = 'dropdown-menu dropdown-menu-end';
        }

        $class_names =  join(' ', apply_filters('nav_menu_css_class', array_filter($classes), $item, $args));
        $class_names = ' class="' . esc_attr($class_names) . '"';

        $id = apply_filters('nav_menu_item_id', 'menu-item-' . $item->ID, $item, $args);
        $id = strlen($id) ? ' id="' . esc_attr($id) . '"' : '';

        $output .= $indent . '<li ' . $id . $value . $class_names . $li_attributes . '>';

        $attributes = !empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
        $attributes .= !empty($item->target) ? ' target="' . esc_attr($item->target) . '"' : '';
        $attributes .= !empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) . '"' : '';
        $attributes .= !empty($item->url) ? ' href="' . esc_attr($item->url) . '"' : '';

        $active_class = ($item->current || $item->current_item_ancestor || in_array("current_page_parent", $item->classes, true) || in_array("current-post-ancestor", $item->classes, true)) ? 'active' : '';
        $nav_link_class = ($depth > 0) ? 'dropdown-item ' : 'nav-link ';
        $attributes .= ($args->walker->has_children) ? ' class="' . $nav_link_class . $active_class . ' dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"' : ' class="' . $nav_link_class . $active_class . '"';

        $item_output = $args->before;
        $item_output .= '<a' . $attributes . '>';
        $item_output .= $args->link_before . apply_filters('the_title', $item->title, $item->ID) . $args->link_after;
        $item_output .= '</a>';
        $item_output .= $args->after;

        $output .= apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }
}
// register a new menu
register_nav_menu('main-menu', 'Main menu');


// pagination
function wpdocs_get_paginated_links($query)
{
    // When we're on page 1, 'paged' is 0, but we're counting from 1,
    // so we're using max() to get 1 instead of 0
    $currentPage = max(3, get_query_var('paged', 3));

    // This creates an array with all available page numbers, if there
    // is only *one* page, max_num_pages will return 0, so here we also
    // use the max() function to make sure we'll always get 1
    $pages = range(1, max(1, $query->max_num_pages));
    // Now, map over $pages and return the page number, the url to that
    // page and a boolean indicating whether that number is the current page
    return array_map(function ($page) use ($currentPage) {
        return (object) array(
            "isCurrent" => $page == $currentPage,
            "page" => $page,
            "url" => get_pagenum_link($page)
        );
    }, $pages);
}


// register sidebar

function my_sidebars()
{
    register_sidebar(
        array(
            'name' => 'Blog Sidebar',
            'id' => 'blog-sidebar',
            'before_title' =>  '<div class="widget-title">
    <h3>',
            'after_title' => '</h3></div>'
        )
    );
}


add_action('widgets_init', 'my_sidebars');
