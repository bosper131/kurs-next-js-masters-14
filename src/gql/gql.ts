/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment Cart on Cart {\n  id\n  items {\n    ...CartItem\n  }\n}": types.CartFragmentDoc,
    "mutation CartAddItem($id: ID!, $productId: String!, $quantity: Int = 1) {\n  cartAddItem(\n    id: $id\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n  }\n}": types.CartAddItemDocument,
    "mutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n  }\n}": types.CartChangeItemQuantityDocument,
    "mutation CartFindOrCreate($id: ID) {\n  cartFindOrCreate(id: $id, input: {}) {\n    ...Cart\n  }\n}": types.CartFindOrCreateDocument,
    "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "fragment CartItem on CartItem {\n  quantity\n  product {\n    id\n    name\n    price\n    images {\n      url\n      alt\n    }\n  }\n}": types.CartItemFragmentDoc,
    "mutation CartRemoveItem($id: ID!, $productId: ID!) {\n  cartRemoveItem(id: $id, productId: $productId) {\n    ...Cart\n  }\n}": types.CartRemoveItemDocument,
    "query CategoriesByName {\n  categories {\n    data {\n      name\n      products {\n        id\n        name\n        description\n        categories {\n          name\n        }\n        images {\n          url\n        }\n        price\n      }\n    }\n  }\n}": types.CategoriesByNameDocument,
    "query CollectionsByName {\n  collections {\n    data {\n      name\n      products {\n        id\n        name\n        description\n        categories {\n          name\n        }\n        images {\n          url\n        }\n        price\n      }\n    }\n  }\n}": types.CollectionsByNameDocument,
    "query ProductGetById($slug: ID!) {\n  product(id: $slug) {\n    id\n    name\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n    price\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetList($skip: Int, $take: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n      rating\n    }\n  }\n}": types.ProductsGetListDocument,
    "fragment Review on Review {\n  author\n  description\n  email\n  id\n  rating\n  title\n  createdAt\n  updatedAt\n}": types.ReviewFragmentDoc,
    "mutation ReviewCreate($productId: ID!, $rating: Int!, $title: String!, $description: String!, $author: String!, $email: String!) {\n  reviewCreate(\n    productId: $productId\n    rating: $rating\n    title: $title\n    description: $description\n    author: $author\n    email: $email\n  ) {\n    id\n  }\n}": types.ReviewCreateDocument,
    "query ReviewsGetByProductId($productId: ID!) {\n  product(id: $productId) {\n    reviews {\n      ...Review\n    }\n  }\n}": types.ReviewsGetByProductIdDocument,
    "query SearchProductsByName($name: String!) {\n  products(search: $name) {\n    data {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}": types.SearchProductsByNameDocument,
    "query SuggestedProductsByPrice($take: Int!) {\n  products(take: $take) {\n    data {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}": types.SuggestedProductsByPriceDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Cart on Cart {\n  id\n  items {\n    ...CartItem\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddItem($id: ID!, $productId: String!, $quantity: Int = 1) {\n  cartAddItem(\n    id: $id\n    input: {item: {productId: $productId, quantity: $quantity}}\n  ) {\n    id\n  }\n}"): typeof import('./graphql').CartAddItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartChangeItemQuantity($id: ID!, $productId: ID!, $quantity: Int!) {\n  cartChangeItemQuantity(id: $id, productId: $productId, quantity: $quantity) {\n    id\n  }\n}"): typeof import('./graphql').CartChangeItemQuantityDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartFindOrCreate($id: ID) {\n  cartFindOrCreate(id: $id, input: {}) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartFindOrCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  cart(id: $id) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartItem on CartItem {\n  quantity\n  product {\n    id\n    name\n    price\n    images {\n      url\n      alt\n    }\n  }\n}"): typeof import('./graphql').CartItemFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveItem($id: ID!, $productId: ID!) {\n  cartRemoveItem(id: $id, productId: $productId) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartRemoveItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesByName {\n  categories {\n    data {\n      name\n      products {\n        id\n        name\n        description\n        categories {\n          name\n        }\n        images {\n          url\n        }\n        price\n      }\n    }\n  }\n}"): typeof import('./graphql').CategoriesByNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsByName {\n  collections {\n    data {\n      name\n      products {\n        id\n        name\n        description\n        categories {\n          name\n        }\n        images {\n          url\n        }\n        price\n      }\n    }\n  }\n}"): typeof import('./graphql').CollectionsByNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetById($slug: ID!) {\n  product(id: $slug) {\n    id\n    name\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n    price\n  }\n}"): typeof import('./graphql').ProductGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($skip: Int, $take: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n      rating\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment Review on Review {\n  author\n  description\n  email\n  id\n  rating\n  title\n  createdAt\n  updatedAt\n}"): typeof import('./graphql').ReviewFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($productId: ID!, $rating: Int!, $title: String!, $description: String!, $author: String!, $email: String!) {\n  reviewCreate(\n    productId: $productId\n    rating: $rating\n    title: $title\n    description: $description\n    author: $author\n    email: $email\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ReviewsGetByProductId($productId: ID!) {\n  product(id: $productId) {\n    reviews {\n      ...Review\n    }\n  }\n}"): typeof import('./graphql').ReviewsGetByProductIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SearchProductsByName($name: String!) {\n  products(search: $name) {\n    data {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').SearchProductsByNameDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SuggestedProductsByPrice($take: Int!) {\n  products(take: $take) {\n    data {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').SuggestedProductsByPriceDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
