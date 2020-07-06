package com.aie.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aie.site.Site;
import com.aie.site.SiteRepository;

@RestController
@RequestMapping("/api/v1")
public class SiteControllerV1 {
	SiteRepository repository;

	public SiteControllerV1(SiteRepository repository) {
		this.repository = repository;
	}

	@PostMapping("/site")
	public Site createSite(@RequestBody Site Site) {
		return repository.save(Site);
	}

	@GetMapping(path = "/site/byname/{sitename}")
	public Site getBySite(@PathVariable("sitename") String siteName) {
		return repository.findCustomBySite(siteName);
	}

	@GetMapping(path = "/sites")
	public List<Site> getSites() {
		return repository.findAll();
	}
	
	@PutMapping("/site/rating/{siteid}")
	public void updateSite(@PathVariable("siteid") String siteId, @RequestBody Site site) {
		repository.updateRatingForSite(siteId, site.getRating());
	}

	@DeleteMapping("/site/{siteid}")
	public void deleteSite(@PathVariable("siteid") String siteId) {
		repository.deleteById(siteId);
	}
	@DeleteMapping("/sites")
	public void deleteAll() {
		repository.deleteAll();
	}
	
}
