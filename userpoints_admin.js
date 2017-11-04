(function ($) {
  Backdrop.behaviors.userpointsAdminFieldsetSummaries = {
    attach: function (context) {
      // Moderation status.
      $('fieldset#edit-status', context).backdropSetSummary(function (context) {
        if ($('#edit-userpoints-points-moderation-0').is(':checked')) {
          return Backdrop.t('Approved by default.');
        }
        else {
          return Backdrop.t('Moderated by default.');
        }
      });

      // Message.
      $('fieldset#edit-misc', context).backdropSetSummary(function (context) {
        if ($('#edit-userpoints-display-message-0').is(':checked')) {
          return Backdrop.t('No message is displayed by default.');
        }
        else {
          return Backdrop.t('Message is displayed by default.');
        }
      });

      // Listings.
      $('fieldset#edit-reports', context).backdropSetSummary(function (context) {
        var limit = $('select#edit-userpoints-report-limit :selected').val();
        var usercount = $('select#edit-userpoints-report-usercount :selected').val();

        return Backdrop.t('%limit transactions, %usercount users per page.', {'%limit' : limit, '%usercount' : usercount});
      });

      // Listings.
      $('fieldset#edit-renaming', context).backdropSetSummary(function (context) {
        var branding = {
        '@ucpoints' : $('#edit-userpoints-trans-ucpoints').val(),
        '@lcpoints' : $('#edit-userpoints-trans-lcpoints').val(),
        '@ucpoint' : $('#edit-userpoints-trans-ucpoint').val(),
        '@lcpoint' : $('#edit-userpoints-trans-lcpoint').val()
        }

        return Backdrop.t('@ucpoints, @lcpoints, @ucpoint, @lcpoint.', branding);
      });

      // Category.
      $('fieldset#edit-category', context).backdropSetSummary(function (context) {
        var category = $('select#edit-userpoints-category-default-tid :selected').text();
        var display_selection = $('div.form-item-userpoints-category-profile-display-tid input:checked').siblings('label');
        var display_categories;
        if (display_selection.length > 0) {
            display_categories = jQuery.trim(display_selection[0].firstChild.nodeValue);
            for (var i = 1; i < display_selection.length; i++) {
                if (i > 2) {
                    display_categories += ', ...';
                    break;
                }
                display_categories += ', ' + jQuery.trim(display_selection[i].firstChild.nodeValue);
            }
        }
        else {
            display_categories = Backdrop.t('none');
        }

        return Backdrop.t('Default: %category<br />Displayed: %display_categories', {'%category' : category, '%display_categories' : display_categories});
      });

      // Stamping.
      $('fieldset#edit-stamping', context).backdropSetSummary(function (context) {
        if ($('input#edit-userpoints-transaction-timestamp').is(':checked')) {
          return Backdrop.t('Always use system time for transactions.');
        }
        else {
          return Backdrop.t('Allow customization of transaction time.');
        }
      });

      // Expiration.
      $('fieldset#edit-points-expiration', context).backdropSetSummary(function (context) {

        var year = $('select#edit-userpoints-expireon-date-year :selected').val();
        var month = $('select#edit-userpoints-expireon-date-month :selected').val();
        var day = $('select#edit-userpoints-expireon-date-day :selected').val();
        var date = new Date(year, month, day);

        // If expiration time is in the future, use that.
        if (date.getTime() > new Date().getTime()) {
          return Backdrop.t('Expiration at %date.', {'%date' : date.toLocaleDateString()});
        }
        else if ($('select#edit-userpoints-expireafter-date :selected').val() > 0) {
          return Backdrop.t('Expiration in %date.', {'%date' : $('select#edit-userpoints-expireafter-date :selected').text()});
        }
        else {
          return Backdrop.t('No expiration.');
        }
      });
    }
  };

})(jQuery);