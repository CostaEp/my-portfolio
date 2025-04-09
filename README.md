# 🚀 Full Automation for Your Project with GitHub Actions, GitHub Pages, and Docker Hub

This guide will walk you step by step through setting up a complete CI/CD pipeline:
From pushing your code to GitHub, building a Docker image, deploying to GitHub Pages, and pushing your image to Docker Hub.

Perfect for open-source projects or personal portfolios!

---

## 📦 Prerequisites

- GitHub account: [Sign up](https://github.com)
- Docker Hub account: [Sign up](https://hub.docker.com) (if you use Docker)
- Docker installed locally
- Git installed locally
- Code editor (Recommended: VSCode)

---

## 🧩 Step 1: Create a GitHub Repository

1. Log in to GitHub and create a new repository.
2. Give your project a name (e.g., `my-awesome-project`).
3. Select:
   - ✔️ Initialize this repository with a README
4. Create the repository.

---

## 🏗️ Step 2: Add Project Files

1. Clone your repository to your local machine:

```bash
git clone https://github.com/your-username/my-awesome-project.git
cd my-awesome-project
```

2. Add your project files, like:
   - Node.js project files (`package.json`, `src/`, etc.)
   - Or Docker project files (`Dockerfile`, etc.)

3. Create a GitHub Actions workflow:
   - Path: `.github/workflows/ci.yml` (or multiple workflows, see below)

---

## ⚙️ Step 3: Configure GitHub Actions (CI/CD Pipeline)

### What is GitHub Actions?

GitHub Actions is a powerful automation tool that will help you build, test, and deploy your code automatically every time you push changes.

---

## 🚀 Option 1: Pipeline for Node.js Projects (DeveloperFolio etc.)

This is perfect for projects like **DeveloperFolio** or any React/Node.js application.

Create a file at `.github/workflows/nodejs-deploy.yml` with the following:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Verify build output exists
        run: |
          if [ ! -f "build/index.html" ]; then
            echo "❌ Build failed: index.html not found!"
            exit 1
          fi

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

### Explanation:

| Step | Description |
|------|-------------|
| Checkout repository | Pulls your code from GitHub |
| Set up Node.js | Installs Node.js 20 environment |
| Install dependencies | Runs `npm install` |
| Build project | Compiles your project |
| Verify build | Makes sure `build/index.html` exists |
| Deploy to GitHub Pages | Publishes your site to GitHub Pages! |

---

## 🐳 Option 2: Pipeline for Docker Projects

For backend or full-stack apps using Docker, use this pipeline.

Create `.github/workflows/docker-deploy.yml`:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Login to DockerHub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Build and push Docker image
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: your-dockerhub-username/your-image-name:latest
```

### Explanation:

| Step | Description |
|------|-------------|
| Checkout code | Pulls your code from GitHub |
| Set up Docker Buildx | Sets up advanced Docker builds |
| Login to DockerHub | Logs in using your secrets |
| Build and push image | Builds Docker image and pushes it to Docker Hub |

---

## 🔑 Step 4: Add Secrets to GitHub

1. Go to your repository **Settings**.
2. Navigate to **Secrets and variables > Actions**.
3. Add the following secrets:
   - `DOCKER_USERNAME` — your Docker Hub username (if using Docker pipeline)
   - `DOCKER_PASSWORD` — your Docker Hub password or access token
   - `GITHUB_TOKEN` — this is auto-generated, you don't need to add it manually.

---

## 🐳 Step 5: Set Up Docker Hub (For Docker pipeline)

1. Log in to Docker Hub.
2. Create a new repository.
3. Use the same name as in your Docker pipeline tags.

---

## 🌐 Step 6: Set Up GitHub Pages

1. Make sure your site builds to `build/` or `public/` directory.
2. In GitHub:
   - Go to **Settings > Pages**
   - Under **Source**, select **GitHub Actions**.

---

## 🚀 Step 7: Push Code and Run Pipeline

1. Push your changes:

```bash
git add .
git commit -m "Set up CI/CD pipeline"
git push origin main
```

2. Your pipeline will run automatically!
3. Monitor progress under the **Actions** tab in GitHub.

### How to Check Logs

- Go to your GitHub repository.
- Click on **Actions**.
- Select your latest workflow run.
- Expand each step to see detailed logs.

---

## 🎉 Done!

- ✅ Node.js / React projects deploy automatically to GitHub Pages!
- ✅ Docker projects build and push to Docker Hub!
- ✅ CI/CD pipeline working like a pro!

---

## 🧭 Next Steps

- Add tests to the pipeline.
- Set up staging and production environments.
- Enable notifications (Slack, Telegram, etc.).
- Optimize build speed with caching.

---

## 🙏 Special Thanks

Big thanks to the **DeveloperFolio Team** for their amazing portfolio project template!
You can check it out here: [DeveloperFolio GitHub](https://github.com/saadpasta/developerFolio)

---

## 🤝 Contributing

Feel free to open a pull request, report bugs, or suggest improvements!

---

## 📄 License

This project is licensed under the MIT License.