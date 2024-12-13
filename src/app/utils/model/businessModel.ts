export interface ADD_SERVICE_MODEL {
    businessId: Number | null;
    name: string;
    discountRate: Number | null;
    description: string;
    conditions: string;
    serviceFrom: string;
    serviceTo: string;
    availability: any[] | null;
    packageList: PACKAGE_MODEL[] | null;
    imageUrl: string;
}

export interface PACKAGE_MODEL {
    packageId: Number | null;
    PackageName: string;
}

export interface ADD_PACKAGE_MODEL {
    name: string;
    duration: string;
    maximumCount: string;
    price: string;
    businessId: Number | null;
}