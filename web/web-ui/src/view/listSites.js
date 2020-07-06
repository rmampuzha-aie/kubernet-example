si.view.listSites = {
  setupUserInterface: function () {
    // load all site objects
    Site.loadAll(si.view.listSites.paint);
  },
  paint: function (instances) {
	  var tableBodyEl = document.querySelector("table#sites>tbody");
	  var i=0, keys=[], key="", row={};
	  keys = Object.keys(instances);
	    // for each site, create a table row with a cell for each attribute
	    for (i=0; i < keys.length; i++) {
	      key = keys[i];
	      row = tableBodyEl.insertRow();
	      row.insertCell(-1).textContent = Site.instances[key].id;      
	      row.insertCell(-1).textContent = Site.instances[key].siteName;  
	      row.insertCell(-1).textContent = Site.instances[key].rating;
	    }
  } 
};