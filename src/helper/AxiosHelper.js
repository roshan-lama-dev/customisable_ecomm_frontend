import axios from "axios";

const BASE_URL = import.meta.env.VITE_REACT_APP_URL_DEV;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MDNiMWRlMDNkZmZmMGYzYTY5NmEyOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDc3NDY0MywiZXhwIjoxNjk1MDMzODQzfQ.6qZC99iWOkdPpYWKS09gNIbeKodDTobuiUplZRXuQCM";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
