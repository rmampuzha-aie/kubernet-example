package com.aie.site;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface SiteRepository extends MongoRepository<Site, String>, SiteRepositoryCustom {

    Site findFirstBySiteName(String siteName);

    Site findBySiteNameAndRating(String siteName, int rating);

    //Mongo JSON query string
    @Query("{siteName:'?0'}")
    Site findCustomBySite(String site);

    @Query("{siteName: { $regex: ?0 } })")
    List<Site> findCustomByRegExSite(String site);

}
