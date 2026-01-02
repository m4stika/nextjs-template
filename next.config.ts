import type { NextConfig } from "next";
import packageJson from "./package.json" with {type: "json"};
const { version, title, description, author, contact } = packageJson;

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  async redirects() {
    return [
      {
        source: "/",
        has: [
          {
            type: "cookie",
            key: "authorized",
            value: "true",
          },
        ],
        permanent: false,
        destination: "/dashboard",
      },
    ];
  },
  env: {
    NEXT_PUBLIC_HOST_FILES: process.env.HOST_FILES,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || process.env.API_URL,
    NEXT_PUBLIC_VERSION: version,
    NEXT_PUBLIC_TITLE: title,
    NEXT_PUBLIC_DESCRIPTION: description,
    NEXT_PUBLIC_AUTHOR: author,
    NEXT_PUBLIC_CONTACT: contact,
  },
  // publicRuntimeConfig: {
  //   version,
  //   title,
  //   description,
  //   author,
  //   contact,
  // },
};

export default nextConfig;
