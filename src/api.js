/**
 * This function 
 *  takes an events array, then uses map to create a new array with only the locations
 *  then removes all duplicates by creating another new array using the spread operator and spreading a Set
 * The Set will remove all duplicates
 */
import { mockData } from "./mockData";

export const extractLocations = (events) => {
    var extractLocations = events.map((event) => event.location);
    var locations = [...new Set(extractLocations)];
    return locations;
};

export const getEvents = async () => {
    return mockData;
};