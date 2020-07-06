si.view.updateSite = {
  setupUserInterface: function () {
    
    // load all site objects
    Site.loadAll(si.view.updateSite.populateDropDown);
    var formEl = document.forms['Site'],
      saveButton = formEl.commit,
      selectSiteEl = formEl.selectSite;
    // when a site is selected, populate the form with the site data
    selectSiteEl.addEventListener("change", function () {
        var site=null, key = selectSiteEl.value;
        if (key) {
          site = Site.instances[key];
          formEl.id.value = site.id;
          formEl.siteName.value = site.siteName;
          formEl.rating.value = site.rating;
        } else {
          formEl.id.value = "";
          formEl.siteName.value = "";
          formEl.rating.value = "";
        }
    });
    saveButton.addEventListener("click", 
        si.view.updateSite.handleUpdateButtonClickEvent);
    window.addEventListener("beforeunload", function () {
      var formEl = document.forms['Site'];
      var slots = {
        id: formEl.id.value,
        siteName: formEl.siteName.value,
        rating: formEl.rating.value
      };
      Site.update(slots); 
    });
  },
  populateDropDown:function(instances) {
    var formEl = document.forms['Site'],
      saveButton = formEl.commit,
      selectSiteEl = formEl.selectSite;
    var i = 0, key = "", keys = [], site = null, optionEl = null;
    // populate the selection list with sites
    keys = Object.keys(instances);
    for (i = 0; i < keys.length; i++) {
      key = keys[i];
      site = instances[key];
      optionEl = document.createElement("option");
      optionEl.text = site.siteName;
      optionEl.value = site.id;
      selectSiteEl.add(optionEl, null);
    }
  },
  // save updated data
  handleUpdateButtonClickEvent: function () {
    var formEl = document.forms['Site'];
    var slots = { id: formEl.id.value, 
        siteName: formEl.siteName.value, 
        rating: formEl.rating.value
    };
    Site.update( slots);
    formEl.reset();
  }
};