si.view.deleteSite = {
  setupUserInterface: function () {
    var deleteButton = document.forms['Site'].commit;
    var selectEl = document.forms['Site'].selectSite;
    var i=0, key="", keys=[], site=null, optionEl=null;
    // load all site objects
    Site.loadAll(si.view.deleteSite.populateDropDown);
    deleteButton.addEventListener("click", 
        si.view.deleteSite.handleDeleteButtonClickEvent);
    window.addEventListener("beforeunload", function () {
      var formEl = document.forms['Site'];

      Site.destroy(formEl.id.value); 
    });
  },
  populateDropDown: function (instances) {
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
  handleDeleteButtonClickEvent: function () {
    var selectEl = document.forms['Site'].selectSite;
    var id = selectEl.value;
    if (id) {
      Site.destroy(id);
    }
  }
};