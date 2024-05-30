export default () => ({
    PORT: parseInt(process.env.PORT, 3000) || 3000,
    SALT_ROUND: parseInt(process.env.SALT, 10) || 10,
    JWT_SECRET: process.env.JWT_SECRET,
});