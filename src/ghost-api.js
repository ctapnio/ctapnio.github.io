// ghost-api.js
import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.REACT_APP_GHOST_API_URL,
  key: process.env.REACT_APP_GHOST_API_KEY,
  version: process.env.REACT_APP_GHOST_API_VERSION,
});

export default api;
