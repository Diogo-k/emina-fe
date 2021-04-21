import React from 'react';
import Anime from './anime';

import { useQuery, gql } from '@apollo/client';

const gql_query = gql`
    query ($id: Int, $page: Int, $perPage: Int, $search: String) {
        Page (page: $page, perPage: $perPage) {
            pageInfo {
                total
                currentPage
                lastPage
                hasNextPage
                perPage
            }
            media (id: $id, search: $search) {
                id
                title {
                    romaji
                }
                coverImage {
                    extraLarge
                    large
                    medium
                    color
                }
            }
        }
    }
`;

const AnimeList = () => {
    const { data } = useQuery(gql_query);

    console.log(data);

    return (
        <div>
            {data && data.Page.media.map((anime) => (
                <Anime key={anime.id} anime={anime} />
            ))}
        </div>
    );
};

export default AnimeList;