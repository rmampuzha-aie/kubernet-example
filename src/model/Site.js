function Site(record) {
	this.id = record.id;
	this.siteName = record.siteName;
	this.rating = record.rating;
};

Site.instances = {};

Site.convertRow2Obj = function(siteRow) {
	var site = new Site(siteRow);
	return site;
};

Site.loadAll = function(paintFn) {
	var i = 0, key = "", keys = [], siteTableString = "", siteTable = {};
	try {
		var request = new XMLHttpRequest()
		request.open('GET', '/api/v1/sites', true)

		request.onload = function () {
			var data = JSON.parse(this.response)
			console.log("Data DB " + data);
			if (request.status >= 200 && request.status < 400) {
			    data.forEach((site) => {
			      console.log(site.siteName)
			      Site.instances[site.id] = Site.convertRow2Obj(site);
			    })
			    paintFn(Site.instances);
			  } else {
			    console.log('error')
			  }
		}
		request.send()
		
		
		
	} catch (e) {
		alert("Error when reading from Local Storage\n" + e);
	}
};

Site.add = function(slots) {
	var site = new Site(slots);
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/api/v1/site", true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(site));
	xhr.onload = function () {
		if (xhr.status != 200) { // HTTP error?
			// handle error
			alert('Error: ' + xhr.status);
			return;
		}
		console.log("Site " + xhr.response + " created!");
	};

};

Site.update = function(slots) {
	var site = new Site(slots);
	var xhr = new XMLHttpRequest();
	xhr.open("PUT", "/api/v1/site/rating/" + slots.id, true);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(JSON.stringify(site));
	xhr.onload = function () {
		if (xhr.status != 200) { // HTTP error?
			// handle error
			alert('Error: ' + xhr.status);
			return;
		}
		console.log("Site " + xhr.response + " created!");
	};
	window.location = "/listSites.html"
};

Site.saveAll = function (sites) {
	sites.forEach(function (site, index) {
		console.log(site);
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "/api/v1/site", true);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send(JSON.stringify(site));
		xhr.onload = function () {
			if (xhr.status != 200) { // HTTP error?
				// handle error
				alert('Error: ' + xhr.status);
				return;
			}
			console.log("Site " + xhr.response + " created!");
		};
	});
	window.location = "/listSites.html"
};

Site.destroy = function(id) {
	var xhr = new XMLHttpRequest();
	xhr.open("DELETE", "/api/v1/site/" + id, true);
	xhr.send();
	xhr.onload = function () {
		console.log("Site " + id + " Deleted!");
	};
	window.location = "/listSites.html"
	
};

Site.createTestData = function () {
	var sites = [new Site({
		id: "006251587X",
		siteName: "www.aienterpsie.com",
		rating: 3
	}),
	new Site({
		id: "0465026567",
		siteName: "www.google.com",
		rating: 5
	}),
	new Site({
		id: "0465030793",
		siteName: "www.microsoft.com",
		rating: 5
	})];
	Site.saveAll(sites);
};

Site.clearData = function() {
	if (confirm("Do you really want to delete all site data?")) {
		var xhr = new XMLHttpRequest();
		xhr.open("DELETE", "/api/v1/sites", true);
		xhr.send();
		xhr.onload = function () {
			console.log("All data Deleted!");
		};
		window.location = "/listSites.html"
	}
};