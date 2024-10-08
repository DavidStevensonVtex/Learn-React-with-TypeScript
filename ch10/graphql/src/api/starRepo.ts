// Listing 10.25 Using the Apollo Client in the starRepo.ts file in the src/api folder.

import { gql } from "@apollo/client";

export const STAR_REPO = gql`
    mutation ( $repoId: ID! ) {
        addStar(input: { starrableId: $repoId }) {
            starrable {
                stargazers {
                    totalCount
                }
            }
        }
    }
`;