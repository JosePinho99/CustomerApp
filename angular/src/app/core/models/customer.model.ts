export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  events: CustomerEvent[];
  isSkeleton?: boolean
}

export interface CustomerEvent {
  type: string;
  timestamp: string;
  description: string;
}

export interface CustomerResponse {
  items: Customer[],
  count: number
}
