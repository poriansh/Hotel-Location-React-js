import http from "./httpservic";


export function getHotels(query) {
  return http.get(`/hotels?${query}`);
}