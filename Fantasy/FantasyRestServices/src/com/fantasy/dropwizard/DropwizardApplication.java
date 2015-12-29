package com.fantasy.dropwizard;

import com.fantasy.dropwizard.configuration.DropwizardConfig;
import com.fantasy.dropwizard.healthcheck.DropwizardHealthCheck;
import com.fantasy.dropwizard.healthcheck.HealthResource;
import com.fantasy.dropwizard.resources.LeagueInfo;
import io.dropwizard.Application;
import io.dropwizard.setup.Environment;
import io.dropwizard.setup.Bootstrap;
import org.eclipse.jetty.servlets.CrossOriginFilter;
import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import java.util.EnumSet;

/**
 * Created by Dan on 12/13/15.
 */
public class DropwizardApplication extends Application<DropwizardConfig>{

    private static final String GOOD_ORIGIN = "allowed_host";
    private static final String BAD_ORIGIN = "denied_host";
    private static final String ROOT_MAPPING = "/";
    private static final String RESOURCES_MAPPING = "/api/*";

    public static void main(String[] args) throws Exception{
        new DropwizardApplication().run(args);
    }

    @Override
    public void run(final DropwizardConfig dropwizardConfig, Environment environment) {
        addCORSFilter(environment);
        registerJerseyServices(environment);
    }

    public void registerJerseyServices(Environment environment) {
        final LeagueInfo leagueInfo = new LeagueInfo();
        final HealthResource healthResource = new HealthResource();
        final DropwizardHealthCheck dropwizardHealthCheck = new DropwizardHealthCheck();

        environment.jersey().register(leagueInfo);
        environment.jersey().register(healthResource);
        environment.healthChecks().register("dropwizard health check", dropwizardHealthCheck);
    }

    public void addCORSFilter(Environment environment) {
        FilterRegistration.Dynamic filter = environment.servlets().addFilter("CORSFilter", CrossOriginFilter.class);
        filter.addMappingForUrlPatterns(EnumSet.of(DispatcherType.REQUEST), true, environment.getApplicationContext().getContextPath() + "*");
        filter.setInitParameter(CrossOriginFilter.ALLOWED_METHODS_PARAM, "GET,PUT,POST,DELETE,OPTIONS");
        filter.setInitParameter(CrossOriginFilter.ALLOWED_ORIGINS_PARAM, "*");
        filter.setInitParameter(CrossOriginFilter.ALLOWED_HEADERS_PARAM, "Origin, Content-Type, Accept, Authorization");
        filter.setInitParameter(CrossOriginFilter.ALLOW_CREDENTIALS_PARAM, "true");
    }

    @Override
    public String getName() {
        return "fantasy app";
    }

    @Override
    public void initialize(Bootstrap<DropwizardConfig> bootstrap) {
        // nothing to do yet
    }
}
