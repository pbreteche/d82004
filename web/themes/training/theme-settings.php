<?php

/**
 * @file
 * Theme settings form for Training theme theme.
 */

/**
 * Implements hook_form_system_theme_settings_alter().
 */
function training_form_system_theme_settings_alter(&$form, &$form_state) {

  $form['training'] = [
    '#type' => 'details',
    '#title' => t('Training theme'),
    '#open' => TRUE,
  ];

  $form['training']['font_size'] = [
    '#type' => 'number',
    '#title' => t('Font size'),
    '#min' => 12,
    '#max' => 18,
    '#default_value' => theme_get_setting('font_size'),
  ];

}
