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
export function AddHotel(newHotel) {
  return http.post(`/hotels/`, newHotel).then(({data}) => data);
}
export function DeleteHotel(id) {
  return http.delete(`/hotels/${id}`).then(({data}) => data);
}
