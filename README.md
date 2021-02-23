# GitHub API

A ReactJS project to search users and repositories by using GitHub API.

### Stack

-   Next.js
-   styled-components

### Development tools

-   Babel
-   ESLint
-   Prettier
-   PropTypes

### Setup

#### 1. Clone

```
git clone https://github.com/ericksarabia/github-api-search.git
```

#### 2. Install dependencies

```
npm run install
```

or

```
yarn install
```

#### 3. ENV

Create a Personal Access Token with [GitHub](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) then generate a `.env.local` file at the project root with the next content:

```
NEXT_PUBLIC_GITHUB_ACCESS_TOKEN=my_personal_access_token

```

### 4. Execution

```
npm run dev
```

or

```
yarn dev
```

Open http://localhost:3000 with your browser to see the result.
