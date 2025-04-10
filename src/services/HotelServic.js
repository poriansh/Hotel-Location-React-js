
import http from "./httpservic";
export function getHotels(query) {
  return http.get(`/hotels?${query}`).then((res) => ({
    data: res.data,
    totalCount: Number(res.headers["x-total-count"]),
  }));
}

export function getHotelsId(id) {
  return http.get(`/hotels/${id}`).then(({data}) => data);
}