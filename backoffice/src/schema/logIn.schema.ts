import { Auth } from "firebase/auth";

export interface LogInDto {
  auth: Auth;
  id: string;
  pw: string;
}
