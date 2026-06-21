export interface Order {
  orderId: number;
  orderNumber: string;
  customerId: number;
  customerName: string;
  status: string;
  totalAmount: number;
  orderDate: string;
}