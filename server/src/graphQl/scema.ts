export const scema = ` 
type User {
    name: String
    mobile: String
    email: String
    isEmailVerified: Boolean
    otp: String
    role: String
    userCount: Int
    enable: Boolean
    createdAt: String
    updatedAt: String
}

type Product {
    _id: ID!
    name: String!
    description: String
    mrp: Float!
    price: Float!
    images: [String!]!
    category: String!
    subcategory: String!
    brand: String
    material: String
    size: String
    weight: String
    purity: String
    color: String
    reviews: [String!]
    gemstones: [String!]
    mcharges: Float
  }

  type Cart {
    id: ID!
    user: User!
    items: [String]
    total: Int!
  }

type Query {
    users:[User]
    getProduct(id: ID!): Product
    getProducts: [Product]
    getCart(id:ID!):Cart
}

`;
