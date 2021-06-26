import md5 from "md5";

export function generateApiConfig() {
  const ts = Number(new Date());
  const md5Hash = md5(ts + process.env.PRIVATE_API_KEY + process.env.NEXT_PUBLIC_API_KEY);

  return {
    params: {
      ts,
      hash: md5Hash,
      offset: 0,
    },
  }
}