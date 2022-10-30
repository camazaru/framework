import jwt from "jsonwebtoken";

const privateKey = "coderhouse";

const authMiddleware = (ctx, next) => {
  const authHeader = ctx.headers.authorization;

  if (!authHeader) {
    ctx.response.status = 401;
    ctx.body = {
      status: "Denegado!",
      data: {
        error: true,
        message: "You dont hace permission to visit this page1",},
    };
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, privateKey, (err, decodedPayload) => {
    if (err) {
      ctx.response.status = 401;
      ctx.body = {
        status: "Denegado",
        data: {
          error: true,
          message: "You dont hace permission to visit this page2",},
      };
    }

    ctx.user = decodedPayload.data;
    ctx.token = token;

    next();
  });
};

const generateToken = (user) => {
  const payload = {
    data: {
      username: user.username,
    },
  };
  
  return jwt.sign(payload, privateKey, { expiresIn: "30m" });
};

export default { generateToken, authMiddleware };
