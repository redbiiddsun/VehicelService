export interface JWTPayload {
    sub: string;
    email: string;
    iat: number;
    exp: number;
}

export interface JWTParsePayload {
    id: string;
    email: string;
}
declare global {
    namespace Express {
      interface User {
        email: string;
        id: string;
      }
    }
  }