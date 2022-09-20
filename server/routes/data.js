import express from 'express';
import {getComments, getData, getGroup} from '../controllers/data.js';

const router = express.Router();

router.get('/', getData);
router.get('/:group/comments', getComments);
router.get('/:group', getGroup);


export default router;