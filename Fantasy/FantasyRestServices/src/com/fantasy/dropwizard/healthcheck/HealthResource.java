package com.fantasy.dropwizard.healthcheck;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Created by Dan on 12/24/15.
 */

@Path("/health")
public class HealthResource {

    public HealthResource() {}

    @GET
    @Path("/get")
    @Produces(MediaType.APPLICATION_JSON)
    public String healthGet() {
        return "healthy";
    }

}
