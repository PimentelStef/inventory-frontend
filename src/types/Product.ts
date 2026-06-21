export interface Product {
  productId: number;
  sku: string;
  name: string;
  description?: string;
  categoryId: number;
  categoryName: string;
  unitPrice: number;
  costPrice: number;
  stockQuantity: number;
  lowStockThreshold: number;
  isLowStock: boolean;
  isActive: boolean;
}