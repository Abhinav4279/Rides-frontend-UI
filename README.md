# Rides-frontend-task

A react web-app to showcase rides based upon filters, user data and input. 

## Ride-Type/Ride-Category

### Nearest rides
Based upon user origin_station, distance from each ride is calculated by taking distance from each station in station_path and taking minimum of them. And then sorting based upon this distance.

Algorithm used: Current implementation uses bruteforce checking. Can be optimised using taking lower_bound of origin station or by precomputing for each ride.

### Upcoming rides
Rides whose date of start off is ahead of Date.now()

### Past rides

Rides whose date of start off is ahead of Date.now()

## Filters

### State
Filtering each of the given ride-type based upon state(pradesh).

### City
Filtering each of the given ride-type based upon city.
