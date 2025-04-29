import { createProxyMiddleware } from "http-proxy-middleware";
import express from "express";

const orderRoutes = express.Router();

orderRoutes.use(
  '/',
  createProxyMiddleware({
    target: process.env.ORDER_SERVICE_URL || 'http://localhost:3003',
    changeOrigin: true,
    pathRewrite: { '^/orders': '' }, // remove `/orders` prefix
  })
);

export default orderRoutes;