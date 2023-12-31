const cors = require("cors");

const origin = [
  "https://week15-defficharlina-fe.vercel.app",
  "https://week15-defficharlina.cyclic.app",
];
const partnerOrigin = [
  "https://week15.avicena.dev",
  "https://week-15-mnajmytsss.vercel.app",
];

const corsOptionDelegate = (req, callback) => {
  const clientOrigin = origin.includes(req.header("Origin"));
  const clientPartnerOrigin = partnerOrigin.includes(req.header("Origin"));

  if (clientOrigin) {
    callback(null, {
      origin: true,
      methods: "GET, POST, DELETE, PUT, OPTIONS, HEAD",
    });
  } else if (clientPartnerOrigin) {
    callback(null, {
      origin: true,
      methods: "GET, POST",
    });
  } else {
    callback(new Error("Blocked by CORS"));
  }
};

const corsMiddleware = (app) => {
  app.use(cors(corsOptionDelegate));
};

module.exports = corsMiddleware;
