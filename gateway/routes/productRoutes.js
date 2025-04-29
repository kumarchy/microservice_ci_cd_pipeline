import { createProxyMiddleware } from "http-proxy-middleware";
import express from "express";
const productRoutes = express.Router();

productRoutes.use(
  '/',
  createProxyMiddleware({
    target: process.env.PRODUCT_SERVICE_URL || 'http://localhost:3002',
    changeOrigin: true,
    pathRewrite: { '^/products': '' }, // remove `/products` prefix
  })
);

export default productRoutes;
