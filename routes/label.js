import label from '../controllers/label';
import kRouter from 'koa-router';
const router = kRouter({
  prefix: '/label'
});

router.get('/get/:id',label.get);
router.get('/getAll', label.getAll);
router.post('/add',label.add);


export default router;
