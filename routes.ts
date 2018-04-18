import express from 'express';
import CustomerCtrl from './controllers/CustomerCtrl';

export default function setRoutes(app: any) {
    const router = express.Router();
    //const invoiceCtrl = new invoiceCtrl();

    const customerCtrl = new CustomerCtrl();

    router.route('/customers').get(customerCtrl.getAll);
    router.route('/customers/:id').get(customerCtrl.get);
    router.route('/customers/:id').put(customerCtrl.update);
    router.route('/customers/:id').delete(customerCtrl.delete);
    router.route('/customers/count').get(customerCtrl.count);

    app.use('/api', router);

}