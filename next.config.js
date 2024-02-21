/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/main.dklab.kr/:path',
        destination: 'https://dklab.kr/',
        permanent: true, // 브라우저나 검색엔진이 이 정보를 기억하는지 결정
      }
    ]
  }
};

module.exports = nextConfig;
