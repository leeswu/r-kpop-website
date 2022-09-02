import express from 'express';
import {getData, getGroup} from '../controllers/data.js';

const router = express.Router();

router.get('/', getData);
router.get('/:group', getGroup);

export default router;