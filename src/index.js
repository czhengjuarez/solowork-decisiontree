export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Try to get the asset from the ASSETS binding
    try {
      // For root path, serve index.html
      if (url.pathname === '/') {
        return env.ASSETS.fetch(new URL('/index.html', request.url));
      }
      
      // For other paths, try to serve the asset
      return env.ASSETS.fetch(request);
    } catch (e) {
      // If asset not found, return 404
      return new Response('Not Found - Asset could not be loaded', { 
        status: 404,
        headers: { 'Content-Type': 'text/plain' }
      });
    }
  },
};
