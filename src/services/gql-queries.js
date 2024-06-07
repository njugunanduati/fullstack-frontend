// GQL Queries

export const GET_BOOKS = `
    query Books {
        books {
          author
          coverPhotoURL
          readingLevel
          title
        }
    }
`;