/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      description
      profile_picture
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      description
      profile_picture
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      description
      profile_picture
      createdAt
      updatedAt
    }
  }
`;
export const createRelation = /* GraphQL */ `
  mutation CreateRelation(
    $input: CreateRelationInput!
    $condition: ModelRelationConditionInput
  ) {
    createRelation(input: $input, condition: $condition) {
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
export const updateRelation = /* GraphQL */ `
  mutation UpdateRelation(
    $input: UpdateRelationInput!
    $condition: ModelRelationConditionInput
  ) {
    updateRelation(input: $input, condition: $condition) {
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
export const deleteRelation = /* GraphQL */ `
  mutation DeleteRelation(
    $input: DeleteRelationInput!
    $condition: ModelRelationConditionInput
  ) {
    deleteRelation(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
