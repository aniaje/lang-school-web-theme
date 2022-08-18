<?php if (have_posts()) : while (have_posts()) : the_post(); ?>



        <div class="blog-wrapper wow fadeIn">
            <div class="blog-image">
                <a href="blog-single.html" title=""><img src="upload/blog_single.png" alt="" class="img-responsive" /></a>
            </div>
            <!-- end blog-image -->
            <div class="blog-meta">
                <span><?php echo get_the_date('l jS F, Y'); ?></span>
                <?php $fname = get_the_author_meta('first_name'); ?>
                <span>By : <a href="#" title=""><?php echo $fname; ?></a></span>
            </div>
            <!-- end blog-meta -->
            <div class="blog-title">
                <h4>
                    <a href="blog-single.html" title=""><?php the_title(); ?></a>
                </h4>
            </div>
            <!-- end blog-title -->
            <div class="blog-desc">
                <div class="drop-caps full clearfix">
                    <p>
                        <?php the_content(); ?>
                    </p>
                </div>
                <!-- end blog-desc -->
            </div>
            <!-- end blog-wrapper -->
        </div>

        <?php
        $categories = get_the_category();
        foreach ($categories as $cat) : ?>

            <a href="<?php echo get_category_link($cat->term_id); ?>">
                <?php echo $cat->name; ?>

            <?php endforeach; ?>



    <?php endwhile;
else : endif; ?>