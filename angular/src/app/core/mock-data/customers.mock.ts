import {Customer, EventType} from '../models/customer.model';

export const CUSTOMERS: Customer[] = [
  {
    id: 'c1',
    name: 'Alice Johnson',
    email: 'alice.j@example.com',
    phone: '+1-202-555-0101',
    events: [
      { type: EventType.ProductViewed, timestamp: '2025-06-12T14:32:00Z', description: 'Viewed "Wireless Mouse"' },
      { type: EventType.EmailOpened, timestamp: '2025-06-12T13:22:00Z', description: 'Opened "June Deals" email' },
      { type: EventType.AddedToCart, timestamp: '2025-06-12T14:35:00Z', description: 'Added "Wireless Mouse" to cart' },
    ],
  },
  {
    id: 'c2',
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    phone: '+1-303-555-0187',
    events: [
      { type: EventType.AccountCreated, timestamp: '2025-06-10T08:00:00Z', description: 'Signed up for an account' },
      { type: EventType.ProductReviewed, timestamp: '2025-06-11T10:15:00Z', description: 'Reviewed "Noise Cancelling Headphones"' },
      { type: EventType.LoggedIn, timestamp: '2025-06-13T09:45:00Z', description: 'Logged into account' },
    ],
  },
  {
    id: 'c3',
    name: 'Carla Gomez',
    email: 'carla.g@example.com',
    phone: '+44-20-7946-0958',
    events: [
      { type: EventType.CheckoutCompleted, timestamp: '2025-06-11T17:00:00Z', description: 'Bought "Bluetooth Speaker"' },
      { type: EventType.EmailClicked, timestamp: '2025-06-11T16:45:00Z', description: 'Clicked "Summer Electronics Sale"' },
    ],
  },
  {
    id: 'c4',
    name: 'Dinesh Patel',
    email: 'dinesh.patel@example.com',
    phone: '+91-9876543210',
    events: [
      { type: EventType.SearchPerformed, timestamp: '2025-06-12T11:00:00Z', description: 'Searched for "smartphones under 500"' },
      { type: EventType.WishlistUpdated, timestamp: '2025-06-12T11:10:00Z', description: 'Added "Pixel 7a" to wishlist' },
      { type: EventType.EmailOpened, timestamp: '2025-06-13T08:20:00Z', description: 'Opened "New Smartphone Launches"' },
    ],
  },
  {
    id: 'c5',
    name: 'Emily Zhang',
    email: 'emily.z@example.com',
    phone: '+86-10-1234-5678',
    events: [
      { type: EventType.CartAbandoned, timestamp: '2025-06-11T13:15:00Z', description: 'Left items in cart without purchase' },
      { type: EventType.EmailReminderSent, timestamp: '2025-06-11T14:00:00Z', description: 'Sent abandoned cart reminder' },
      { type: EventType.ProductViewed, timestamp: '2025-06-12T09:30:00Z', description: 'Viewed "Wireless Charger"' },
    ],
  },
  {
    id: 'c6',
    name: 'Fatima Al-Mansour',
    email: 'fatima.m@example.com',
    phone: '+971-50-123-4567',
    events: [
      { type: EventType.LiveChatStarted, timestamp: '2025-06-13T12:45:00Z', description: 'Asked about return policy' },
      { type: EventType.SupportTicketCreated, timestamp: '2025-06-13T13:00:00Z', description: 'Ticket regarding damaged item' },
      { type: EventType.SupportTicketResolved, timestamp: '2025-06-13T15:30:00Z', description: 'Issue resolved with refund' },
    ],
  },
  {
    id: 'c7',
    name: 'George Lee',
    email: 'george.lee@example.com',
    phone: '+1-415-555-0199',
    events: [
      { type: EventType.LoggedIn, timestamp: '2025-06-10T08:00:00Z', description: 'Signed into account' },
      { type: EventType.SubscriptionUpdated, timestamp: '2025-06-10T08:05:00Z', description: 'Upgraded to Premium Membership' },
      { type: EventType.ProductReviewed, timestamp: '2025-06-11T10:00:00Z', description: 'Reviewed "Standing Desk"' },
    ],
  },
  {
    id: 'c8',
    name: 'Hana Kim',
    email: 'hana.kim@example.com',
    phone: '+82-2-1234-5678',
    events: [
      { type: EventType.SearchPerformed, timestamp: '2025-06-12T10:00:00Z', description: 'Searched for "ergonomic chairs"' },
      { type: EventType.ProductViewed, timestamp: '2025-06-12T10:10:00Z', description: 'Viewed "ErgoChair Pro"' },
      { type: EventType.AddedToCart, timestamp: '2025-06-12T10:12:00Z', description: 'Added "ErgoChair Pro" to cart' },
      { type: EventType.CheckoutCompleted, timestamp: '2025-06-12T10:20:00Z', description: 'Purchased "ErgoChair Pro"' },
    ],
  },
  {
    id: 'c9',
    name: 'Liam Chen',
    email: 'liam.chen@example.com',
    phone: '+1-415-555-0198',
    events: [
      { type: EventType.SearchPerformed, timestamp: '2025-06-13T09:30:00Z', description: 'Searched for "standing desk"' },
      { type: EventType.ProductViewed, timestamp: '2025-06-13T09:35:00Z', description: 'Viewed "SmartDesk 2"' },
      { type: EventType.ProductViewed, timestamp: '2025-06-13T09:38:00Z', description: 'Viewed "SmartDesk Core"' },
    ],
  },
  {
    id: 'c10',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    phone: '+44-20-7946-0958',
    events: [
      { type: EventType.ProductViewed, timestamp: '2025-06-10T14:00:00Z', description: 'Viewed "ErgoChair Plus"' },
      { type: EventType.AddedToCart, timestamp: '2025-06-10T14:05:00Z', description: 'Added "ErgoChair Plus" to cart' },
    ],
  },
  {
    id: 'c11',
    name: 'Carlos Martínez',
    email: 'carlos.martinez@example.com',
    phone: '+34-91-123-4567',
    events: [
      { type: EventType.SearchPerformed, timestamp: '2025-06-14T08:20:00Z', description: 'Searched for "gaming chairs"' },
    ],
  },
  {
    id: 'c12',
    name: 'Sophie Dubois',
    email: 'sophie.dubois@example.com',
    phone: '+33-1-2345-6789',
    events: [
      { type: EventType.ProductViewed, timestamp: '2025-06-11T16:45:00Z', description: 'Viewed "ErgoChair Core"' },
      { type: EventType.ProductViewed, timestamp: '2025-06-11T16:47:00Z', description: 'Viewed "Lumbar Support Pillow"' },
    ],
  },
  {
    id: 'c13',
    name: 'Aarav Patel',
    email: 'aarav.patel@example.com',
    phone: '+91-22-4000-1234',
    events: [
      { type: EventType.SearchPerformed, timestamp: '2025-06-13T12:00:00Z', description: 'Searched for "desk accessories"' },
      { type: EventType.AddedToCart, timestamp: '2025-06-13T12:10:00Z', description: 'Added "Cable Organizer" to cart' },
      { type: EventType.CheckoutCompleted, timestamp: '2025-06-13T12:20:00Z', description: 'Purchased "Cable Organizer"' },
    ],
  },
  {
    id: 'c14',
    name: 'Mia Nguyen',
    email: 'mia.nguyen@example.com',
    phone: '+84-28-3821-0000',
    events: [
      { type: EventType.SearchPerformed, timestamp: '2025-06-12T17:00:00Z', description: 'Searched for "office desk lamp"' },
      { type: EventType.ProductViewed, timestamp: '2025-06-12T17:05:00Z', description: 'Viewed "LED Desk Lamp Pro"' },
    ],
  },
  {
    id: 'c15',
    name: 'Noah Müller',
    email: 'noah.mueller@example.com',
    phone: '+49-30-1234567',
    events: [
      { type: EventType.ProductViewed, timestamp: '2025-06-14T13:00:00Z', description: 'Viewed "ErgoChair Junior"' },
      { type: EventType.AddedToCart, timestamp: '2025-06-14T13:02:00Z', description: 'Added "ErgoChair Junior" to cart' },
    ],
  },
  {
    id: 'c16',
    name: 'Isabella Rossi',
    email: 'isabella.rossi@example.com',
    phone: '+39-06-12345678',
    events: [
      { type: EventType.SearchPerformed, timestamp: '2025-06-11T11:30:00Z', description: 'Searched for "adjustable monitor stand"' },
    ],
  },
  {
    id: 'c17',
    name: 'Jack Thompson',
    email: 'jack.thompson@example.com',
    phone: '+61-2-9876-5432',
    events: [
      { type: EventType.ProductViewed, timestamp: '2025-06-13T15:45:00Z', description: 'Viewed "SmartDesk Corner"' },
      { type: EventType.AddedToCart, timestamp: '2025-06-13T15:50:00Z', description: 'Added "SmartDesk Corner" to cart' },
      { type: EventType.CheckoutCompleted, timestamp: '2025-06-13T16:10:00Z', description: 'Purchased "SmartDesk Corner"' },
    ],
  }
];
