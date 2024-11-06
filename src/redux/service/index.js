import { phoneApi } from "./phone";
import { compApi } from "./computer";
import { registerApi } from "./user-register";
import { LoginApi } from "./user-login";
import { phoneDetailApi } from "./phoneDetail";
import { compDetailApi } from "./compDetail";

export default [
  phoneApi,
  compApi,
  registerApi,
  LoginApi,
  phoneDetailApi,
  compDetailApi,
];

export const serviceReducer = {
  [compDetailApi.reducerPath]: compDetailApi.reducer,
  [phoneDetailApi.reducerPath]: phoneDetailApi.reducer,
  [LoginApi.reducerPath]: LoginApi.reducer,
  [registerApi.reducerPath]: registerApi.reducer,
  [compApi.reducerPath]: compApi.reducer,
  [phoneApi.reducerPath]: phoneApi.reducer,
};
