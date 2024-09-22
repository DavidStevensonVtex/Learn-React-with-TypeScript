// Listing 10.24 Use Apollo Client in the getRepo.ts file to the src/api folder.
// Remove the getRepo and assertIsGetResponse functions

import { gql } from "@apollo/client";
import { RepoData, SearchCriteria } from "./types";

export const GET_REPO = gql`
    query GetRepo($org: String!, $repo: String!) {
        repository(owner: $org, name: $repo) {
            id
            name
            description
            viewerHasStarred
            stargazers {
                totalCount
            }
        }
    }
`;

type GetRepoResponse = {
    data: RepoData
};