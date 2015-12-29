package com.fantasy.dropwizard.healthcheck;

import com.codahale.metrics.health.HealthCheck;

/**
 * Created by Dan on 12/13/15.
 */
public class DropwizardHealthCheck extends HealthCheck {

    @Override
    protected Result check() throws Exception {
        return Result.healthy();
    }
}
