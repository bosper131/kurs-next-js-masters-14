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
    "query CategoriesByName {\n  categories {\n    data {\n      name\n      products {\n        id\n        name\n        description\n        categories {\n          name\n        }\n        images {\n          url\n        }\n        price\n      }\n    }\n  }\n}": types.CategoriesByNameDocument,
    "query CollectionsByName {\n  collections {\n    data {\n      name\n      products {\n        id\n        name\n        description\n        categories {\n          name\n        }\n        images {\n          url\n        }\n        price\n      }\n    }\n  }\n}": types.CollectionsByNameDocument,
    "query ProductGetById($slug: ID!) {\n  product(id: $slug) {\n    id\n    name\n    description\n    categories {\n      name\n    }\n    images {\n      url\n    }\n    price\n  }\n}": types.ProductGetByIdDocument,
    "query ProductsGetList($skip: Int, $take: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}": types.ProductsGetListDocument,
    "query SearchProductsByName($name: String!) {\n  products(search: $name) {\n    data {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}": types.SearchProductsByNameDocument,
    "query SuggestedProductsByPrice($take: Int!) {\n  products(take: $take) {\n    data {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}": types.SuggestedProductsByPriceDocument,
};

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
export function graphql(source: "query ProductsGetList($skip: Int, $take: Int) {\n  products(take: $take, skip: $skip) {\n    data {\n      id\n      name\n      description\n      categories {\n        name\n      }\n      images {\n        url\n      }\n      price\n    }\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
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
