<?php

  function my_theme_enqueue_styles() {
      $parent_style = 'parent-style';

      wp_enqueue_style( 'child-style-ext',
          '//fegemo.github.io/pinboard-child/external/style.css',
          array(),
          wp_get_theme()->get('Version')
      );
      wp_enqueue_style( 'child-style',
          get_stylesheet_directory_uri() . '/style.css',
          array( $parent_style ),
          wp_get_theme()->get('Version')
      );
      wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
  }
  add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );


  function my_custom_javascript() {
      wp_enqueue_script( 'child-script',
          get_stylesheet_directory_uri().'/script.js',
          array(),
          wp_get_theme()->get('Version')
      );
      wp_enqueue_script( 'child-script-ext',
          '//fegemo.github.io/pinboard-child/external/script.js',
          array(),
          null,
          true
      );
  }
  add_action('wp_enqueue_scripts','my_custom_javascript');
?>
