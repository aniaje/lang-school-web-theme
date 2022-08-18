<?php
// Define our WP Query Parameters
$the_query = new WP_Query('posts_per_page=3'); ?>

<?php
// Start our WP Query
while ($the_query->have_posts()) : $the_query->the_post();
    // Display the Post Title with Hyperlink
?>

    <div class="col-md-4 col-xs-12  p-1">
        <div class="card post-entry">
            <a href="<?php the_permalink(); ?>"><img src="<?php the_post_thumbnail_url('small'); ?>" class="card-img-top" alt="Image"></a>
            <div class="card-body">
                <div><span class="text-uppercase font-weight-bold date"><?php $post_date = get_the_date('F j, Y');
                                                                        echo $post_date; ?></span></div>
                <h5 class="card-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h5>
            </div>
        </div>
    </div>


<?php
// Repeat the process and reset once it hits the limit
endwhile;
wp_reset_postdata();
?>