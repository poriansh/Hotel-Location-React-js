import http from "./httpservic";


export function getHotels(query) {
  return http.get(`/hotels?${query}`);
}
export function getHotelsId(id) {
  return http.get(`/hotels/${id}`);
}