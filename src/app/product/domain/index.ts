import { Product } from 'src/app/shared/domain';
import { ImageSlider } from 'src/app/shared/components';

export interface ProductVariant {
    id: number;
    product: Product;
    name: string;
    price: number;
    listPrice: number;
    productVariantImages: ImageSlider[];
}

export interface GroupOrder {
    id: number;
    productId: number;
    startBy: string;
    avatar: string;
    startAt: Date;
    remainingNumber: number;
}