/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      description
      profile_picture
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        profile_picture
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRelation = /* GraphQL */ `
  query GetRelation($id: ID!) {
    getRelation(id: $id) {
      id
      requester {
        id
        name
        description
        profile_picture
        createdAt
        updatedAt
      }
      receiver {
        id
        name
        description
        profile_picture
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      relationRequesterId
      relationReceiverId
    }
  }
`;
export const listRelations = /* GraphQL */ `
  query ListRelations(
    $filter: ModelRelationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRelations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        requester {
          id
          name
          description
          profile_picture
          createdAt
          updatedAt
        }
        receiver {
          id
          name
          description
          profile_picture
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        relationRequesterId
        relationReceiverId
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      image
      grade
      location
      user {
        id
        name
        description
        profile_picture
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          content
          createdAt
          updatedAt
          postCommentsId
          commentUserId
        }
        nextToken
      }
      createdAt
      updatedAt
      postUserId
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        image
        grade
        location
        user {
          id
          name
          description
          profile_picture
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        postUserId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      user {
        id
        name
        description
        profile_picture
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      postCommentsId
      commentUserId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        user {
          id
          name
          description
          profile_picture
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        postCommentsId
        commentUserId
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      user {
        id
        name
        description
        profile_picture
        createdAt
        updatedAt
      }
      post {
        id
        title
        image
        grade
        location
        user {
          id
          name
          description
          profile_picture
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        postUserId
      }
      createdAt
      updatedAt
      likeUserId
      likePostId
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          name
          description
          profile_picture
          createdAt
          updatedAt
        }
        post {
          id
          title
          image
          grade
          location
          createdAt
          updatedAt
          postUserId
        }
        createdAt
        updatedAt
        likeUserId
        likePostId
      }
      nextToken
    }
  }
`;
