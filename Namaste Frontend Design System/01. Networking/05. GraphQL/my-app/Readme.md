# Setup

1. cd my-app
2. npm init --yes && npm pkg set type="module"
3. npm install @apollo/server graphql

# Requirements

<!-- Structure -->

books{
id,
title,
publishedYear,
author,
}

author{
id,
name,
books
}

<!-- Data -->

list of books
list of author
list of author with author details
list of author with book details

<!-- Inside graphql localhost apollo clinet -->

```
query ExampleQuery {
    authors{
        id
        name
    books {
        id
        title
    }
    }
    books {
        id
        title
            author {
                id
                name
        }
    }
}

```
