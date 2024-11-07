export interface IProducts {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
	sku: string;
	weight: number;
	dimensions: IProductsDimensions;
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviews: IProductsReviews[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: IProductsMeta;
	images: string[];
	thumbnail: string;
}
export interface IProductsDimensions {
	width: number;
	height: number;
	depth: number;
}
export interface IProductsReviews {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
	reviewerEmail: string;
}
export interface IProductsMeta {
	createdAt: string;
	updatedAt: string;
	barcode: string;
	qrCode: string;
}