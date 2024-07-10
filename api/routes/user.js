import express from 'express';
const router = express.Router();
import { user } from '../controllers/user.js';
router.get('/', user);

export default router;
