# Raven Design System - Forms 

## Build Tools

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Storybook](https://storybook.js.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

1. In a terminal window open your install location and run the following:

   ```shell
   git clone https://github.com/cuweb/rds-forms.git
   ```

2. Once the clone is complete move into the `RDS` directory and run:

   ```shell
   npm install
   ```

3. Run Storybook

   ```shell
   npm run storybook
   ```

4. Other useful shell commands

- `npm run clean` - deletes node modules, package lock and run npm install
- `npm run cypress` - launch cypress app
- `npm run format` - format files with prettier
- `npm run lint` - check for errors with eslint
- `npm run size` - compare compiled size against pre-defined limit


## Comment Linting

When adding a commit with a commit you may be blocked if you do not prefix your comment with one of the following types. So a commit should look like: `git commit -m "change: updated spacing around button"`. The prefix requires a colon to separate it from the comment.

- `add` - used when adding something new such as a component, story or test file
- `change` - used when making a change to an existing file in the project
- `doc` - used when updating something related to documentation
- `fix` - used when fixing an error, warning or something else
- `perf` - used when making changes relating to performance
- `refactor` - used when refactoring something such as a component or build tool
- `release` - used when preparing a new release
- `revert` - used when revert to a past commit
- `test` - used when making changes relating to testing