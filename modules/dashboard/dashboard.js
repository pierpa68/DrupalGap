/**
 * Implements hook_menu().
 */
function dashboard_menu() {
  try {
    if (drupalgap.settings.debug) {
      console.log('dashboard_menu()');
      console.log(JSON.stringify(arguments));
    }
    /*var items = {
      'dashboard':{
        'page_callback':'dashboard_page',
      },
    };*/
    var items = [{
      'dashboard':{
        'page_callback':'dashboard_page',
      },
    }];
    return items;
  }
  catch (error) {
    alert('dashboard_menu - ' + error);
  }
}

/**
 * Page callback for the dashboard page.
 */
function dashboard_page() {
  return {
    'drupalgap':{
      'theme':'button_link',
      'path':'http://www.drupalgap.org',
      'text':'www.drupalgap.org',
    },
    'login':{
      'theme':'button_link',
      'path':'user/login',
      'text':'Login',
    },
    'users':{
      'theme':'button_link',
      'path':'users',
      'text':'Users',
    },
  };
}
