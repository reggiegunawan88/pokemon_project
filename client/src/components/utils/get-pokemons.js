import gql from "graphql-tag";

/**
 * GraphQL Apollo request - GET
 */
export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      types
      image
      height {
        minimum
        maximum
      }
      weight {
        minimum
        maximum
      }
      classification
      maxHP
      maxCP
      attacks {
        special {
          name
          damage
        }
      }
    }
  }
`;
