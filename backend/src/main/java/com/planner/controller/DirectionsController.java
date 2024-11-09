package com.planner.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.planner.service.DirectionsService;

/**
 * Use the DirectionsService in a controller to expose an endpoint for getting directions.
 */

@RestController
public class DirectionsController {

    private final DirectionsService directionsService;

    @Autowired
    public DirectionsController(DirectionsService directionsService) {
        this.directionsService = directionsService;
    } // DerectionsController

    @GetMapping("/directions")
    public String getDirections(
            @RequestParam String start,
            @RequestParam String end) {
        return directionsService.getDirections(start, end);
    } // getDirections
} // class
