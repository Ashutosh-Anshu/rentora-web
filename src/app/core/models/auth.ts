export interface RegisterReq {
  roleId: string;
  fullName: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
}

export interface AuthUser {
  userId: string;
  fullName: string;
  email: string;
  roleId: string;
  isSystem: boolean;
}

export interface LoginReq {
  roleId: string;
  email: string;
  password: string;
  isRememberMe: boolean;
}

export interface LoginRes {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresAt: string;
  refreshTokenExpiresAt: string;
  user: AuthUser;
}
