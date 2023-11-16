import express from 'express';
import { PurchaseController } from './purchase.controller';

const router = express.Router();

router.get('/', PurchaseController.getAllPurchase);
router.post('/', PurchaseController.createPurchase);
router.get('/:id', PurchaseController.getPurchaseById);
router.patch('/:id', PurchaseController.updatePurchase);
router.delete('/:id', PurchaseController.deletePurchase);

export const PurchaseRouter = router;
