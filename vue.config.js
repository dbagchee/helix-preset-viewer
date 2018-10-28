module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/helix-preset-viewer/dist/'
    : '/'
}