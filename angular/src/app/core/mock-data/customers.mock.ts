import { Customer } from '../models/customer.model';

export const CUSTOMERS: Customer[] = [
  {
    id: 'c1',
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    phone: '+1-202-555-0101',
    events: [
      { type: 'Product Viewed', timestamp: '2025-06-12T14:32:00Z', description: 'Viewed "Wireless Mouse"' },
      { type: 'Email Opened', timestamp: '2025-06-12T13:22:00Z', description: 'Opened "June Deals" email' },
      { type: 'Added to Cart', timestamp: '2025-06-12T14:35:00Z', description: 'Added "Wireless Mouse" to cart' },
    ],
  },
  {
    id: 'c2',
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    phone: '+1-303-555-0187',
    events: [
      { type: 'Account Created', timestamp: '2025-06-10T08:00:00Z', description: 'Signed up for an account' },
      { type: 'Product Reviewed', timestamp: '2025-06-11T10:15:00Z', description: 'Reviewed "Noise Cancelling Headphones"' },
      { type: 'Logged In', timestamp: '2025-06-13T09:45:00Z', description: 'Logged into account' },
    ],
  },
  {
    id: 'c3',
    name: 'Carla Gomez',
    email: 'carla.g@example.com',
    phone: '+44-20-7946-0958',
    events: [
      { type: 'Checkout Completed', timestamp: '2025-06-11T17:00:00Z', description: 'Bought "Bluetooth Speaker"' },
      { type: 'Email Clicked', timestamp: '2025-06-11T16:45:00Z', description: 'Clicked "Summer Electronics Sale"' },
    ],
  },
  {
    id: 'c4',
    name: 'Dinesh Patel',
    email: 'dinesh.patel@example.com',
    phone: '+91-9876543210',
    events: [
      { type: 'Search Performed', timestamp: '2025-06-12T11:00:00Z', description: 'Searched for "smartphones under 500"' },
      { type: 'Wishlist Updated', timestamp: '2025-06-12T11:10:00Z', description: 'Added "Pixel 7a" to wishlist' },
      { type: 'Email Opened', timestamp: '2025-06-13T08:20:00Z', description: 'Opened "New Smartphone Launches"' },
    ],
  },
  {
    id: 'c5',
    name: 'Emily Zhang',
    email: 'emily.z@example.com',
    phone: '+86-10-1234-5678',
    events: [
      { type: 'Cart Abandoned', timestamp: '2025-06-11T13:15:00Z', description: 'Left items in cart without purchase' },
      { type: 'Email Reminder Sent', timestamp: '2025-06-11T14:00:00Z', description: 'Sent abandoned cart reminder' },
      { type: 'Product Viewed', timestamp: '2025-06-12T09:30:00Z', description: 'Viewed "Wireless Charger"' },
    ],
  },
  {
    id: 'c6',
    name: 'Fatima Al-Mansour',
    email: 'fatima.m@example.com',
    phone: '+971-50-123-4567',
    events: [
      { type: 'Live Chat Started', timestamp: '2025-06-13T12:45:00Z', description: 'Asked about return policy' },
      { type: 'Support Ticket Created', timestamp: '2025-06-13T13:00:00Z', description: 'Ticket regarding damaged item' },
      { type: 'Support Ticket Resolved', timestamp: '2025-06-13T15:30:00Z', description: 'Issue resolved with refund' },
    ],
  },
  {
    id: 'c7',
    name: 'George Lee',
    email: 'george.lee@example.com',
    phone: '+1-415-555-0199',
    events: [
      { type: 'Logged In', timestamp: '2025-06-10T08:00:00Z', description: 'Signed into account' },
      { type: 'Subscription Updated', timestamp: '2025-06-10T08:05:00Z', description: 'Upgraded to Premium Membership' },
      { type: 'Product Reviewed', timestamp: '2025-06-11T10:00:00Z', description: 'Reviewed "Standing Desk"' },
    ],
  },
  {
    id: 'c8',
    name: 'Hana Kim',
    email: 'hana.kim@example.com',
    phone: '+82-2-1234-5678',
    events: [
      { type: 'Search Performed', timestamp: '2025-06-12T10:00:00Z', description: 'Searched for "ergonomic chairs"' },
      { type: 'Product Viewed', timestamp: '2025-06-12T10:10:00Z', description: 'Viewed "ErgoChair Pro"' },
      { type: 'Added to Cart', timestamp: '2025-06-12T10:12:00Z', description: 'Added "ErgoChair Pro" to cart' },
      { type: 'Checkout Completed', timestamp: '2025-06-12T10:20:00Z', description: 'Purchased "ErgoChair Pro"' },
    ],
  },
];
