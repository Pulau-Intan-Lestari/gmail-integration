import hashid from "hashids";
export const hashids = new hashid(
  process.env.APP_SECRET,
  8,
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
);