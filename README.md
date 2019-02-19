# Mapbox + Leaflet JS Workout Data Visualization SPA

A single page application to visualize the workout data provided in `workout-data.json`, including a map, a graph, and an algorithm to analyze average power output.

## Algorithm
- "Best" is defined as highest continuous average for the given time period.

## User Interface
- Displays the GPS path on a Map with Mapbox API
- Displays the power output over time on a graph, using time as the X axis with Leaflet JS
- When user selects a range of time on the graph, the corresponding range on the map is highlighted
- Displays the 1, 5, 10, 15, and 20 minute "best" power efforts