<?php

/**
 * @file
 * Theme functions for userpoints.module
 */

/**
 * Theme implementation to display a userpoints category.
 */
function theme_userpoints_view_category($variables) {
  $element = $variables['element'];
  $element += array(
    '#attributes' => array(),
  );

  $output = '';
  if (!empty($element['#title'])) {
    $output .= '<h3 ' . backdrop_attributes(($element['#attributes'])) . '>' . $element['#title'] . '</h3>';
  }

  $output .= '<dl ' . backdrop_attributes(($element['#attributes'])) . '>';
  $output .= backdrop_render_children($element);
  $output .= '</dl>';

  return $output;
}

/**
 * Theme implementation to display a userpoints item.
 */
function theme_userpoints_view_item($variables) {
  $element = $variables['element'];
  $element += array(
    '#attributes' => array(),
  );

  $output = '<dt ' . backdrop_attributes(($element['#attributes'])) . '>' . $element['#title'] . '</dt>';
  $output .= '<dd ' . backdrop_attributes(($element['#attributes'])) . '>' . $element['#value'] . '</dd>';

  return $output;
}

/**
 * Theme implementation to display userpoints points.
 */
function theme_userpoints_points($variables) {
  return $variables['points'];
}
