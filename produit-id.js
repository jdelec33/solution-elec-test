window.PRODUIT_ID = window.PRODUIT_ID || (function () { try { return new URLSearchParams(location.search).get("produit"); } catch (e) { return ""; } })() || "location";
