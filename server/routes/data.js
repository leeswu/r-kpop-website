import express from 'express';
import {getData, getGroup, getComments, getScores} from '../controllers/data.js';

const router = express.Router();

router.get('/', getData);
router.get('/:group/comments', getComments);
router.get('/:group/scores', getScores);
router.get('/:group', getGroup);

export default router;