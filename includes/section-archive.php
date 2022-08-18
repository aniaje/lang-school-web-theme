<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

        <div class="col-md-4 col-sm-6 mt-4">
            <div class="blog-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0.1s">
                <div class="blog-image">
                    <img src="<?php the_post_thumbnail_url('small'); ?>" alt="blog-image" class="img-responsive">
                </div>
                <!-- end blog image -->
                <div class="blog-meta">
                    <span><?php $post_date = get_the_date('F j, Y');
                            echo $post_date; ?></span>
                    <?php $fname = get_the_author_meta('first_name'); ?>
                    <span>by : <a href="#" title=""><?php echo $fname; ?></a></span><br>
                    <span>
                        <ul class="list-inline">
                            <?php

                            $categories = get_the_category($args);
                            foreach ($categories as $cat) : ?>

                                <li> <a href="<?php echo get_category_link($cat->term_id); ?>">
                                        <?php echo $cat->name; ?></a></li>

                            <?php endforeach; ?>
                        </ul>
                    </span>
                </div>
                <!-- end blog-meta -->
                <div class="blog-title">
                    <h4>
                        <a href="<?php the_permalink(); ?>" title=""><?php the_title(); ?></a>
                    </h4>
                </div>
                <!-- end blog-title -->
                <div class="blog-desc">
                    <p>
                        <?php the_excerpt(); ?>
                    </p>
                    <a href="<?php the_permalink(); ?>" class="btn btn-normal">więcej ></a>
                </div>
                <!-- end blog-desc -->
            </div>
            <!-- end blog -->
        </div>


<?php endwhile;
else : endif; ?>