package com.planner.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class DirectionsService {

    private final RestTemplate restTemplate;
    private final String apiKey = "API_KEY"; // actual API key
    private final String baseUrl = "https://maps.googleapis.com/maps/api/directions/json"; // Google Maps Directions API URL

     @Autowired
    public DirectionsService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    } // DirectionsService

    public String getDirections(String start, String end) {

        // Build the request URL with query parameters
        String requestUrl = UriComponentsBuilder.fromHttpUrl(baseUrl)
                .queryParam("origin", start)
                .queryParam("destination", end)
                .queryParam("key", apiKey)
                .toUriString();

        // Call the routing API and return the response
        return restTemplate.getForObject(requestUrl, String.class);
    } // getDirections
    
} // class