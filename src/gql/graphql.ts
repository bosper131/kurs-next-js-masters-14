/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: unknown; output: unknown; }
};

export type Cart = {
  id: Scalars['ID']['output'];
  items: Array<CartItem>;
};

export type CartItem = {
  product: Product;
  quantity: Scalars['Int']['output'];
};

export type CartItemInput = {
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
};

export type Category = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CategoryList = {
  data: Array<Category>;
  meta: ListMeta;
};

export type Collection = {
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type CollectionList = {
  data: Array<Collection>;
  meta: ListMeta;
};

export type ListMeta = {
  /** The total number of items matching the query */
  count: Scalars['Int']['output'];
  /** The total number of items in the database */
  total: Scalars['Int']['output'];
};

export type Mutation = {
  cartAddItem: Cart;
  cartChangeItemQuantity: Cart;
  cartComplete: Order;
  cartFindOrCreate: Cart;
  cartRemoveItem: Cart;
  reviewCreate: Cart;
};


export type MutationCartAddItemArgs = {
  id: Scalars['ID']['input'];
  input: MutationCartAddItemInput;
};


export type MutationCartChangeItemQuantityArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
};


export type MutationCartCompleteArgs = {
  cartId: Scalars['ID']['input'];
  userEmail: Scalars['String']['input'];
};


export type MutationCartFindOrCreateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input: MutationCartFindOrCreateInput;
};


export type MutationCartRemoveItemArgs = {
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
};


export type MutationReviewCreateArgs = {
  author: Scalars['String']['input'];
  description: Scalars['String']['input'];
  email: Scalars['String']['input'];
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
};

export type MutationCartAddItemInput = {
  item: CartItemInput;
};

export type MutationCartFindOrCreateInput = {
  items?: InputMaybe<Array<CartItemInput>>;
};

export type Order = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  lines: Scalars['JSON']['output'];
  status: OrderStatus;
  totalAmount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderList = {
  data: Array<Order>;
  meta: ListMeta;
};

export type OrderSortBy =
  | 'DEFAULT'
  | 'STATUS'
  | 'TOTAL';

export type OrderStatus =
  | 'CANCELLED'
  | 'CREATED'
  | 'FULFILLED'
  | 'PAID';

export type Product = {
  categories: Array<Category>;
  collections: Array<Collection>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<ProductImage>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  reviews: Array<Review>;
  slug: Scalars['String']['output'];
};

export type ProductImage = {
  alt: Scalars['String']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  width: Scalars['Int']['output'];
};

export type ProductList = {
  data: Array<Product>;
  meta: ListMeta;
};

export type ProductSortBy =
  | 'DEFAULT'
  | 'NAME'
  | 'PRICE'
  | 'RATING';

export type Query = {
  cart?: Maybe<Cart>;
  categories: CategoryList;
  category?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collections: CollectionList;
  order?: Maybe<Order>;
  orders: OrderList;
  product?: Maybe<Product>;
  products: ProductList;
};


export type QueryCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoriesArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCollectionsArgs = {
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOrdersArgs = {
  email: Scalars['String']['input'];
  order?: SortDirection;
  orderBy?: OrderSortBy;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductsArgs = {
  order?: SortDirection;
  orderBy?: ProductSortBy;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: Scalars['Int']['input'];
  take?: Scalars['Int']['input'];
};

export type Review = {
  author: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  product: Product;
  rating: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewList = {
  data: Array<Review>;
  meta: ListMeta;
};

export type SortDirection =
  | 'ASC'
  | 'DESC';

export type CartFragment = { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, images: Array<{ url: string, alt: string }> } }> };

export type CartAddItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['String']['input'];
  quantity?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CartAddItemMutation = { cartAddItem: { id: string } };

export type CartChangeItemQuantityMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  quantity: Scalars['Int']['input'];
}>;


export type CartChangeItemQuantityMutation = { cartChangeItemQuantity: { id: string } };

export type CartFindOrCreateMutationVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CartFindOrCreateMutation = { cartFindOrCreate: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, images: Array<{ url: string, alt: string }> } }> } };

export type CartGetByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CartGetByIdQuery = { cart?: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, images: Array<{ url: string, alt: string }> } }> } | null };

export type CartItemFragment = { quantity: number, product: { id: string, name: string, price: number, images: Array<{ url: string, alt: string }> } };

export type CartRemoveItemMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
}>;


export type CartRemoveItemMutation = { cartRemoveItem: { id: string, items: Array<{ quantity: number, product: { id: string, name: string, price: number, images: Array<{ url: string, alt: string }> } }> } };

export type CategoriesByNameQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesByNameQuery = { categories: { data: Array<{ name: string, products: Array<{ id: string, name: string, description: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> }> } };

export type CollectionsByNameQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsByNameQuery = { collections: { data: Array<{ name: string, products: Array<{ id: string, name: string, description: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> }> } };

export type ProductGetByIdQueryVariables = Exact<{
  slug: Scalars['ID']['input'];
}>;


export type ProductGetByIdQuery = { product?: { id: string, name: string, description: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> } | null };

export type ProductsGetListQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetListQuery = { products: { data: Array<{ id: string, name: string, description: string, price: number, rating?: number | null, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } };

export type ReviewFragment = { author: string, description: string, email: string, id: string, rating: number, title: string, createdAt: unknown, updatedAt: unknown };

export type ReviewCreateMutationVariables = Exact<{
  productId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  description: Scalars['String']['input'];
  author: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type ReviewCreateMutation = { reviewCreate: { id: string } };

export type ReviewsGetByProductIdQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ReviewsGetByProductIdQuery = { product?: { reviews: Array<{ author: string, description: string, email: string, id: string, rating: number, title: string, createdAt: unknown, updatedAt: unknown }> } | null };

export type SearchProductsByNameQueryVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type SearchProductsByNameQuery = { products: { data: Array<{ id: string, name: string, description: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } };

export type SuggestedProductsByPriceQueryVariables = Exact<{
  take: Scalars['Int']['input'];
}>;


export type SuggestedProductsByPriceQuery = { products: { data: Array<{ id: string, name: string, description: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const CartItemFragmentDoc = new TypedDocumentString(`
    fragment CartItem on CartItem {
  quantity
  product {
    id
    name
    price
    images {
      url
      alt
    }
  }
}
    `, {"fragmentName":"CartItem"}) as unknown as TypedDocumentString<CartItemFragment, unknown>;
export const CartFragmentDoc = new TypedDocumentString(`
    fragment Cart on Cart {
  id
  items {
    ...CartItem
  }
}
    fragment CartItem on CartItem {
  quantity
  product {
    id
    name
    price
    images {
      url
      alt
    }
  }
}`, {"fragmentName":"Cart"}) as unknown as TypedDocumentString<CartFragment, unknown>;
export const ReviewFragmentDoc = new TypedDocumentString(`
    fragment Review on Review {
  author
  description
  email
  id
  rating
  title
  createdAt
  updatedAt
}
    `, {"fragmentName":"Review"}) as unknown as TypedDocumentString<ReviewFragment, unknown>;
export const CartAddItemDocument = new TypedDocumentString(`
    mutation CartAddItem($id: ID!, $productId: String!, $quantity: Int = 1) {
  cartAddItem(
    id: $id
    input: {item: {productId: $productId, quantity: $quantity}}
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartAddItemMutation, CartAddItemMutationVariables>;
export const CartChangeItemQuantityDocument = new TypedDocumentString(`
    mutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {
  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {
    id
  }
}
    `) as unknown as TypedDocumentString<CartChangeItemQuantityMutation, CartChangeItemQuantityMutationVariables>;
export const CartFindOrCreateDocument = new TypedDocumentString(`
    mutation CartFindOrCreate($id: ID) {
  cartFindOrCreate(id: $id, input: {}) {
    ...Cart
  }
}
    fragment Cart on Cart {
  id
  items {
    ...CartItem
  }
}
fragment CartItem on CartItem {
  quantity
  product {
    id
    name
    price
    images {
      url
      alt
    }
  }
}`) as unknown as TypedDocumentString<CartFindOrCreateMutation, CartFindOrCreateMutationVariables>;
export const CartGetByIdDocument = new TypedDocumentString(`
    query CartGetById($id: ID!) {
  cart(id: $id) {
    ...Cart
  }
}
    fragment Cart on Cart {
  id
  items {
    ...CartItem
  }
}
fragment CartItem on CartItem {
  quantity
  product {
    id
    name
    price
    images {
      url
      alt
    }
  }
}`) as unknown as TypedDocumentString<CartGetByIdQuery, CartGetByIdQueryVariables>;
export const CartRemoveItemDocument = new TypedDocumentString(`
    mutation CartRemoveItem($id: ID!, $productId: ID!) {
  cartRemoveItem(id: $id, productId: $productId) {
    ...Cart
  }
}
    fragment Cart on Cart {
  id
  items {
    ...CartItem
  }
}
fragment CartItem on CartItem {
  quantity
  product {
    id
    name
    price
    images {
      url
      alt
    }
  }
}`) as unknown as TypedDocumentString<CartRemoveItemMutation, CartRemoveItemMutationVariables>;
export const CategoriesByNameDocument = new TypedDocumentString(`
    query CategoriesByName {
  categories {
    data {
      name
      products {
        id
        name
        description
        categories {
          name
        }
        images {
          url
        }
        price
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CategoriesByNameQuery, CategoriesByNameQueryVariables>;
export const CollectionsByNameDocument = new TypedDocumentString(`
    query CollectionsByName {
  collections {
    data {
      name
      products {
        id
        name
        description
        categories {
          name
        }
        images {
          url
        }
        price
      }
    }
  }
}
    `) as unknown as TypedDocumentString<CollectionsByNameQuery, CollectionsByNameQueryVariables>;
export const ProductGetByIdDocument = new TypedDocumentString(`
    query ProductGetById($slug: ID!) {
  product(id: $slug) {
    id
    name
    description
    categories {
      name
    }
    images {
      url
    }
    price
  }
}
    `) as unknown as TypedDocumentString<ProductGetByIdQuery, ProductGetByIdQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($skip: Int, $take: Int) {
  products(take: $take, skip: $skip) {
    data {
      id
      name
      description
      categories {
        name
      }
      images {
        url
      }
      price
      rating
    }
  }
}
    `) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const ReviewCreateDocument = new TypedDocumentString(`
    mutation ReviewCreate($productId: ID!, $rating: Int!, $title: String!, $description: String!, $author: String!, $email: String!) {
  reviewCreate(
    productId: $productId
    rating: $rating
    title: $title
    description: $description
    author: $author
    email: $email
  ) {
    id
  }
}
    `) as unknown as TypedDocumentString<ReviewCreateMutation, ReviewCreateMutationVariables>;
export const ReviewsGetByProductIdDocument = new TypedDocumentString(`
    query ReviewsGetByProductId($productId: ID!) {
  product(id: $productId) {
    reviews {
      ...Review
    }
  }
}
    fragment Review on Review {
  author
  description
  email
  id
  rating
  title
  createdAt
  updatedAt
}`) as unknown as TypedDocumentString<ReviewsGetByProductIdQuery, ReviewsGetByProductIdQueryVariables>;
export const SearchProductsByNameDocument = new TypedDocumentString(`
    query SearchProductsByName($name: String!) {
  products(search: $name) {
    data {
      id
      name
      description
      categories {
        name
      }
      images {
        url
      }
      price
    }
  }
}
    `) as unknown as TypedDocumentString<SearchProductsByNameQuery, SearchProductsByNameQueryVariables>;
export const SuggestedProductsByPriceDocument = new TypedDocumentString(`
    query SuggestedProductsByPrice($take: Int!) {
  products(take: $take) {
    data {
      id
      name
      description
      categories {
        name
      }
      images {
        url
      }
      price
    }
  }
}
    `) as unknown as TypedDocumentString<SuggestedProductsByPriceQuery, SuggestedProductsByPriceQueryVariables>;