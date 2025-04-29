import { createProxyMiddleware } from "http-proxy-middleware";
import express from "express";

const authRoutes = express.Router();

authRoutes.use(
    '/',
    createProxyMiddleware({
        target:process.env.Auth_SERVICE_URL || 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite: { '^/auth': '' },
    })
)

export default authRoutes;