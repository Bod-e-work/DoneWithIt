import { create } from "apisauce";
import cache from "../utility/cache";
import storage from "../auth/storage";


const apiClient = create({
  baseURL: "http://10.0.2.2:9000/api/",
});

apiClient.addAsyncRequestTrandform(async (request) => {
  const authToken = await storage.getToken();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
