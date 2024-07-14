export interface Category {
    organization_id: string;
    name: string;
    position: number;
    category_type: string;
    description: string;
    last_updated: string;
    id: string;
    parent_id: string;
    url_slug: string;
    is_deleted: boolean;
    date_created: string;
}

export interface Price {
    USD: [number, number];
}

export interface Photo {
    model_name: string;
    model_id: string;
    organization_id: string;
    filename: string;
    url: string;
    is_featured: boolean;
    save_as_jpg: boolean;
    is_public: boolean;
    file_rename: boolean;
    position: number;
}

export interface Product {
    name: string;
    description: string;
    unique_id: string;
    url_slug: string;
    is_available: boolean;
    is_service: boolean;
    unavailable: boolean;
    id: string;
    organization_id: string;
    categories: Category[];
    date_created: string;
    last_updated: string;
    user_id: string;
    photos: Photo[];
    current_price: Price[];
    is_deleted: boolean;
    available_quantity: number;
}

export interface ProductCardProps {
    discountPercentage: string;
    title: string;
    productImage: string;
    numberOfRatings: number;
    oldPrice: number;
    newPrice: number;
    id: string;
}

export interface CardProps {
    title: string;
    productImage: string;
    numberOfRatings: number;
    oldPrice: number;
    newPrice: number;
    id: string;
}