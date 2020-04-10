/**
 * @file
 * Training theme behaviors.
 */

(function ($, Drupal) {

  'use strict';

  /**
   * Behavior description.
   */
  Drupal.behaviors.training = {
    attach: function (context, settings) {
      const $subMenus = $('.menu .menu', context).once('hidingSubMenu');
      $subMenus.addClass('hidden');

      const $menuTriggers = $('.menu-item--expanded', context).once('triggerMenuEvent');
      $menuTriggers.on('click', function(e) {
        $(this).children('ul.menu').toggleClass('hidden')
      });
    }
  };

} (jQuery, Drupal));
