/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      name
      description
      profile_picture
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      name
      description
      profile_picture
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      name
      description
      profile_picture
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRelation = /* GraphQL */ `
  subscription OnCreateRelation($filter: ModelSubscriptionRelationFilterInput) {
    onCreateRelation(filter: $filter) {
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
export const onUpdateRelation = /* GraphQL */ `
  subscription OnUpdateRelation($filter: ModelSubscriptionRelationFilterInput) {
    onUpdateRelation(filter: $filter) {
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
export const onDeleteRelation = /* GraphQL */ `
  subscription OnDeleteRelation($filter: ModelSubscriptionRelationFilterInput) {
    onDeleteRelation(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
    onCreateLike(filter: $filter) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
    onUpdateLike(filter: $filter) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
    onDeleteLike(filter: $filter) {
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
