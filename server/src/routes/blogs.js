import { Router } from 'express';
import Table from '../table';


let router = Router();
let blogsTable = new Table('blogs');

router.get('/', async (req, res) => {
    let blogs = await blogsTable.getAll();
    res.json(blogs);
});

export default router;