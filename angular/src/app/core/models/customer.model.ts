export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  events: CustomerEvent[];
  isSkeleton?: boolean
}

export interface CustomerEvent {
  type: EventType;
  timestamp: string;
  description: string;
}

export enum EventType {
  ProductViewed = 'Product Viewed',
  EmailOpened = 'Email Opened',
  AddedToCart = 'Added to Cart',
  AccountCreated = 'Account Created',
  ProductReviewed = 'Product Reviewed',
  LoggedIn = 'Logged In',
  CheckoutCompleted = 'Checkout Completed',
  EmailClicked = 'Email Clicked',
  SearchPerformed = 'Search Performed',
  WishlistUpdated = 'Wishlist Updated',
  CartAbandoned = 'Cart Abandoned',
  EmailReminderSent = 'Email Reminder Sent',
  LiveChatStarted = 'Live Chat Started',
  SupportTicketCreated = 'Support Ticket Created',
  SupportTicketResolved = 'Support Ticket Resolved',
  SubscriptionUpdated = 'Subscription Updated'
}

export interface CustomerResponse {
  items: Customer[],
  count: number
}
