package com.fantasy.dropwizard.resources;

import com.google.gson.Gson;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * Created by Dan on 12/13/15.
 */

@Path("/yahoo")
public class LeagueInfo {

    public LeagueInfo() {}

    @GET
    @Path("/leagueInfo")
    @Produces(MediaType.APPLICATION_JSON)
    public String leagueInfo() {

        return new Gson().toJson("test");
    }

}
