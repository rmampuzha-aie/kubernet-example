package com.aie.site;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.util.StringUtils;

import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection = "site")
@Data
@NoArgsConstructor
public class Site {

    @Id
    private String id;

    @Indexed(unique = true)
    private String siteName;

    private int rating;
    
    public String getId() {
    	if(StringUtils.isEmpty(id)) {
    		return null;
    	}
    	return id;
    }
    
    public void setId(String id) {
    	if(!StringUtils.isEmpty(id)) {
    		this.id = id;
    	}
    }
}