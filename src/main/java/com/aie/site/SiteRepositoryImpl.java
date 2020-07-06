package com.aie.site;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;

import com.mongodb.client.result.UpdateResult;

//http://stackoverflow.com/questions/11880924/how-to-add-custom-method-to-spring-data-jpa
//http://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repositories.single-repository-behaviour
//Impl postfix of the name on it compared to the core repository interface

public class SiteRepositoryImpl implements SiteRepositoryCustom {

    @Autowired
    MongoTemplate mongoTemplate;

    @Override
    public long updateRatingForSite(String siteId, int rating) {

        Query query = new Query(Criteria.where("id").is(siteId));
        Update update = new Update();
        update.set("rating", rating);

        UpdateResult result = mongoTemplate.updateFirst(query, update, Site.class);

        if(result!=null)
            return result.getModifiedCount();
        else
            return 0L;

    }
}
