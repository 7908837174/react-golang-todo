# Contributing to This Project

Thank you for considering contributing to this project! Your contributions are highly appreciated. To ensure a smooth and efficient collaboration, please follow the guidelines below.

## Table of Contents

- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Code of Conduct](#code-of-conduct)
- [Reporting Issues](#reporting-issues)
- [Submitting Pull Requests](#submitting-pull-requests)
- [Style Guides](#style-guides)
- License

## Getting Started

1. **Fork the repository:**

   Click the "Fork" button at the top right corner of the repository page to create a copy of the repository under your GitHub account.

2. **Clone your fork:**

   ```sh
   git clone https://github.com/your-username/golang-react-1.git
   cd golang-react-1
   ```

3. **Set up the upstream remote:**

   ```sh
   git remote add upstream https://github.com/rishyym0927/golang-react-1.git
   ```

4. **Install dependencies:**

   - Backend:

     ```sh
     go mod tidy
     ```

   - Frontend:

     ```sh
     cd client
     npm install
     ```

## How to Contribute

### Reporting Issues

If you find any bugs or have feature requests, please open an issue on the GitHub repository. Provide as much detail as possible to help us understand and address the issue.

### Submitting Pull Requests

1. **Create a new branch:**

   ```sh
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes:**

   Ensure your code follows the project's coding standards and includes appropriate tests.

3. **Commit your changes:**

   ```sh
   git commit -m "Add feature: your feature description"
   ```

4. **Push to your fork:**

   ```sh
   git push origin feature/your-feature-name
   ```

5. **Open a pull request:**

   Go to the original repository and click the "New Pull Request" button. Provide a clear and descriptive title and description for your pull request.

## Code of Conduct

Please adhere to the [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming and inclusive environment for everyone.

## Style Guides

### Backend (Go)

- Follow the standard Go formatting and linting rules.
- Use meaningful variable and function names.
- Write unit tests for new features and bug fixes.

### Frontend (React)

- Follow the standard JavaScript/React formatting and linting rules.
- Use functional components and hooks where appropriate.
- Write unit tests for new components and features.

## License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.

Thank you for your contributions! We look forward to collaborating with you.
