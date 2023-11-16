import express from 'express';
import { StripeCustomerController } from './stripeCustomer.controller';

const router = express.Router();

router.get('/', StripeCustomerController.getAllStripeCustomer);
router.post(
  '/',

  StripeCustomerController.createStripeCustomer
);
router.get('/:id', StripeCustomerController.getStripeCustomerById);
router.patch('/:id', StripeCustomerController.updateStripeCustomer);
router.delete('/:id', StripeCustomerController.deleteStripeCustomer);

export const StripeCustomerRouter = router;
