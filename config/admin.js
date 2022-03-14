module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3f24fa41b99b41fee14f150bc96e38e8'),
  },
});
