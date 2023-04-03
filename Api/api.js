import Routes from "./routes";

export default class Api {
  static async request(method, route, body = {}, params = null) {

    const requestInit = {
      method: method,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    };

    console.log('Routes.getHost():',Routes.getHost() + '/' + route)
    const url = new URL(Routes.getHost() + '/' + route);

    method != "GET" ? (requestInit.body = JSON.stringify(body)) : null;

    if (params && Array.isArray(params)) {
      for (let i = 0; i < params.length; i++) {
        const param = params[i];
        if (typeof param === "object") {
          url.searchParams.append(param.name, param.value);
        }
      }
    }

    console.log("[DEBUG] URL:", url.href);
    const res = await fetch(url, requestInit)
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch(function (error) {
        return error;
      });
    return res;
  }

}
