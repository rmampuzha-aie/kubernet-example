si.view.createSite = {
	setupUserInterface : function() {
		var saveButton = document.forms['Site'].commit;
		// Set an event handler for the save/submit button
		saveButton.addEventListener("click",
				si.view.createSite.handleSaveButtonClickEvent);
		window.addEventListener("beforeunload", function() {
			Site.saveAll();
		});
	},
	handleSaveButtonClickEvent : function() {
		var formEl = document.forms['Site'];
		var slots = {
			id : formEl.id.value,
			siteName : formEl.siteName.value,
			rating : formEl.rating.value
		};
		Site.add(slots);
		formEl.reset();
	}
};