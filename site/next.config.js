/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Revel Technologies',
    description: 'The official store for Revel supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://revel8804.github.io/kasm_test/',
    contactUrl: 'https://github.com/Revel8804/kasm_test/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
