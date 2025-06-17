import {EventType} from '../models/customer.model';

export const AVATAR_COLORS = [
    '#4285F4', '#DB4437', '#F4B400', '#0F9D58', '#AB47BC',
    '#00ACC1', '#FF7043', '#9E9D24', '#5C6BC0', '#26A69A'
];


export const EVENT_TYPE_ICON_MAP: Record<EventType, string> = {
  [EventType.ProductViewed]: 'fa-eye',
  [EventType.EmailOpened]: 'fa-envelope-open',
  [EventType.AddedToCart]: 'fa-cart-plus',
  [EventType.AccountCreated]: 'fa-user-plus',
  [EventType.ProductReviewed]: 'fa-star',
  [EventType.LoggedIn]: 'fa-sign-in-alt',
  [EventType.CheckoutCompleted]: 'fa-credit-card',
  [EventType.EmailClicked]: 'fa-mouse-pointer',
  [EventType.SearchPerformed]: 'fa-search',
  [EventType.WishlistUpdated]: 'fa-heart',
  [EventType.CartAbandoned]: 'fa-shopping-basket',
  [EventType.EmailReminderSent]: 'fa-bell',
  [EventType.LiveChatStarted]: 'fa-comments',
  [EventType.SupportTicketCreated]: 'fa-life-ring',
  [EventType.SupportTicketResolved]: 'fa-check-circle',
  [EventType.SubscriptionUpdated]: 'fa-sync-alt'
};
