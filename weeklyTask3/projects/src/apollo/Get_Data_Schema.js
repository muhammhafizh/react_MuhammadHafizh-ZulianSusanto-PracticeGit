import { gql } from '@apollo/client';

export const GET_USERS = gql`
    query MyQuery {
        Website_Portofolio {
            imageURL
            textAbout
        }
    }
`;