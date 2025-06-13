export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  events: CustomerEvent[];
}

export interface CustomerEvent {
  type: string;
  timestamp: string;
  description: string;
}
