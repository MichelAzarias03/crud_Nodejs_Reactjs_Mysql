import http from "../http-common";

class DossierDataService {
  getAll() {
    return http.get("/dossiers");
  }

  get(id) {
    return http.get(`/dossiers/${id}`);
  }

  create(data) {
    return http.post("/dossiers", data);
  }

  update(id, data) {
    return http.put(`/dossiers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/dossiers/${id}`);
  }

  deleteAll() {
    return http.delete(`/dossiers`);
  }

  findByTitle(title) {
    return http.get(`/dossiers?title=${title}`);
  }
}

export default new DossierDataService();