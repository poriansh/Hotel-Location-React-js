import http from "./httpservic";


export function getHotels() {
  return http.get(`/hotels`)
}