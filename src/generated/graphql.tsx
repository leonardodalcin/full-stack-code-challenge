import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type - Unix Timestamp */
  Date: any;
};

export type Query = {
  __typename?: 'Query';
  getBoats: Array<Boat>;
};


export type QueryGetBoatsArgs = {
  input?: Maybe<GetBoatInput>;
};

export type GetBoatInput = {
  active?: Maybe<Scalars['Boolean']>;
};

export type Boat = {
  __typename?: 'Boat';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<BoatTypeEnum>;
  year?: Maybe<Scalars['Int']>;
  reviews?: Maybe<BoatReview>;
  marina?: Maybe<Scalars['String']>;
  locality?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  skipper?: Maybe<SkipperTypeEnum>;
  active?: Maybe<Scalars['Boolean']>;
  cabins?: Maybe<Scalars['Int']>;
  guests?: Maybe<Scalars['Int']>;
  length?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
  imageUrl?: Maybe<Scalars['String']>;
};

export enum BoatTypeEnum {
  Catamaran = 'CATAMARAN',
  Gulet = 'GULET',
  MotorBoat = 'MOTOR_BOAT',
  MotorCatamaran = 'MOTOR_CATAMARAN',
  Rib = 'RIB',
  Sailboat = 'SAILBOAT',
  Speedboat = 'SPEEDBOAT'
}

export type BoatReview = {
  __typename?: 'BoatReview';
  total?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Float']>;
};

export enum SkipperTypeEnum {
  Optional = 'OPTIONAL',
  Mandatory = 'MANDATORY',
  Bareboat = 'BAREBOAT'
}


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type GetBoatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBoatsQuery = (
  { __typename?: 'Query' }
  & { getBoats: Array<(
    { __typename?: 'Boat' }
    & Pick<Boat, 'id' | 'imageUrl'>
  )> }
);


export const GetBoatsDocument = gql`
    query getBoats {
  getBoats {
    id
    imageUrl
  }
}
    `;

/**
 * __useGetBoatsQuery__
 *
 * To run a query within a React component, call `useGetBoatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBoatsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBoatsQuery, GetBoatsQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBoatsQuery, GetBoatsQueryVariables>(GetBoatsDocument, baseOptions);
      }
export function useGetBoatsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBoatsQuery, GetBoatsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBoatsQuery, GetBoatsQueryVariables>(GetBoatsDocument, baseOptions);
        }
export type GetBoatsQueryHookResult = ReturnType<typeof useGetBoatsQuery>;
export type GetBoatsLazyQueryHookResult = ReturnType<typeof useGetBoatsLazyQuery>;
export type GetBoatsQueryResult = ApolloReactCommon.QueryResult<GetBoatsQuery, GetBoatsQueryVariables>;