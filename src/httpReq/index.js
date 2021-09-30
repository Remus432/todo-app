export default class HttpReq {
  constructor(reqMethod, route = "/", data = {}) {
    this.route = route
    this.endpoint = "https://back-end-todo.herokuapp.com"
    this.settings = {
      method: reqMethod,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      ...(reqMethod !== "GET" && { body: JSON.stringify(data) })
    }
  }
  async fetchReq() {
    try {
      const response = await fetch(`${this.endpoint}${this.route}`, this.settings)
      const data = await response.json()
      return await data
    } catch(err) {
      return err
    }
  }
}