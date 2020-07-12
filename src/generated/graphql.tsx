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
  getBoats: Array<Boat>;
};


export type QueryGetBoatsArgs = {
  input?: Maybe<GetBoatInput>;
};

export type GetBoatInput = {
  active?: Maybe<Scalars['Boolean']>;
};

export type Boat = {
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

export type GetBoatCardQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBoatCardQuery = { getBoats: Array<{ id: string, name?: Maybe<string>, type?: Maybe<BoatTypeEnum>, year?: Maybe<number>, marina?: Maybe<string>, locality?: Maybe<string>, country?: Maybe<string>, skipper?: Maybe<SkipperTypeEnum>, active?: Maybe<boolean>, cabins?: Maybe<number>, guests?: Maybe<number>, length?: Maybe<number>, price?: Maybe<number>, imageUrl?: Maybe<string>, reviews?: Maybe<{ score?: Maybe<number>, total?: Maybe<number> }> }> };


export const GetBoatCardDocument = gql`
    query getBoatCard {
  getBoats {
    id
    name
    type
    year
    reviews {
      score
      total
    }
    marina
    locality
    country
    skipper
    active
    cabins
    guests
    length
    price
    imageUrl
  }
}
    `;

/**
 * __useGetBoatCardQuery__
 *
 * To run a query within a React component, call `useGetBoatCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoatCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoatCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBoatCardQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetBoatCardQuery, GetBoatCardQueryVariables>) {
        return ApolloReactHooks.useQuery<GetBoatCardQuery, GetBoatCardQueryVariables>(GetBoatCardDocument, baseOptions);
      }
export function useGetBoatCardLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetBoatCardQuery, GetBoatCardQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetBoatCardQuery, GetBoatCardQueryVariables>(GetBoatCardDocument, baseOptions);
        }
export type GetBoatCardQueryHookResult = ReturnType<typeof useGetBoatCardQuery>;
export type GetBoatCardLazyQueryHookResult = ReturnType<typeof useGetBoatCardLazyQuery>;
export type GetBoatCardQueryResult = ApolloReactCommon.QueryResult<GetBoatCardQuery, GetBoatCardQueryVariables>;