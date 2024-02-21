module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://dklab.kr/',
        permanent: true, // 브라우저나 검색엔진이 이 정보를 기억하는지 결정
        statusCode: 301,
      }
    ]
  },
}

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   async redirects() {
// return [
//   {
//     source: '/',
//     destination: 'https://dklab.kr/',
//     permanent: true, // 브라우저나 검색엔진이 이 정보를 기억하는지 결정
//     statusCode: 301,
//   }
// ]
//   }
// };

// module.exports = nextConfig;
