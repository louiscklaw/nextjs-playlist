```json
{
  id: 'WH-48F3912065949351U-22A332385C531271J',
  event_version: '1.0',
  create_time: '2024-04-08T01:25:12.355Z',
  resource_type: 'checkout-order',
  resource_version: '2.0',
  event_type: 'CHECKOUT.ORDER.APPROVED',
  summary: 'An order has been approved by buyer',
  resource: {
    update_time: '2024-04-08T01:25:09Z',
    create_time: '2024-04-08T01:23:50Z',
    purchase_units: [ [Object] ],
    links: [ [Object] ],
    id: '0A330433TW499403T',
    payment_source: { paypal: [Object] },
    intent: 'CAPTURE',
    payer: {
      name: [Object],
      email_address: 'sb-b00gb30304504@personal.example.com',
      payer_id: 'FDZXKKBYKPCAG',
      address: [Object]
    },
    status: 'COMPLETED'
  },
  links: [
    {
      href: 'https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-48F3912065949351U-22A332385C531271J',
      rel: 'self',
      method: 'GET'
    },
    {
      href: 'https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-48F3912065949351U-22A332385C531271J/resend',
      rel: 'resend',
      method: 'POST'
    }
  ]
}
{
  id: 'WH-0TE781105C952104E-1Y5840205S326350B',
  event_version: '1.0',
  create_time: '2024-04-08T01:25:13.254Z',
  resource_type: 'capture',
  resource_version: '2.0',
  event_type: 'PAYMENT.CAPTURE.COMPLETED',
  summary: 'Payment completed for $ 8.99 USD',
  resource: {
    payee: {
      email_address: 'sb-j4nbw29912003@business.example.com',
      merchant_id: 'HW485DG3K5D7E'
    },
    amount: { value: '8.99', currency_code: 'USD' },
    seller_protection: { dispute_categories: [Array], status: 'ELIGIBLE' },
    supplementary_data: { related_ids: [Object] },
    update_time: '2024-04-08T01:25:09Z',
    create_time: '2024-04-08T01:25:09Z',
    final_capture: true,
    seller_receivable_breakdown: {
      exchange_rate: [Object],
      paypal_fee: [Object],
      gross_amount: [Object],
      net_amount: [Object],
      receivable_amount: [Object]
    },
    links: [ [Object], [Object], [Object] ],
    id: '1CF243490D472802G',
    status: 'COMPLETED'
  },
  links: [
    {
      href: 'https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-0TE781105C952104E-1Y5840205S326350B',
      rel: 'self',
      method: 'GET'
    },
    {
      href: 'https://api.sandbox.paypal.com/v1/notifications/webhooks-events/WH-0TE781105C952104E-1Y5840205S326350B/resend',
      rel: 'resend',
      method: 'POST'
    }
  ]
}
```

