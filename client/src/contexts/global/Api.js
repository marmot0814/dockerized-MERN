import axios from "axios"
import { useSnackbar } from "notistack";
import { createContext, useContext } from "react";

const ApiContext = createContext();

export const useApi = () => useContext(ApiContext);

export default function ApiProvider({ children }) {

  const api = axios.create({
    headers: { 'Content-Type': 'application/json' },
    timeout: 20000,
  })

  const { enqueueSnackbar } = useSnackbar();

  api.interceptors.response.use(
    response => response,
    error => {
      enqueueSnackbar(error.message, { variant: 'error' });
      return Promise.reject(error)
    }
  )

  const req = (method, url, data = null) => {
    switch (method.toLowerCase()) {
      case "post":
        return api.post(url, data)
      case "get":
        return api.get(url, { params: data })
      case "delete":
        return api.delete(url, { params: data })
      case "put":
        return api.put(url, data);
      case "patch":
        return api.patch(url, data);
      default:
        console.log(`未知的 method: ${method}`);
        return false;
    }
  }

  return (
    <ApiContext.Provider value={{req}}>
      {children}
    </ApiContext.Provider>
  )
}