# 🚀 Full Automation for Your Project with GitHub Actions, GitHub Pages, and Docker Hub

This guide will walk you step by step through setting up a complete CI/CD pipeline:
From pushing your code to GitHub, building a Docker image, deploying to GitHub Pages, and pushing your image to Docker Hub.

Perfect for open-source projects or personal portfolios!

---

## 📦 Prerequisites

- GitHub account: [Sign up](https://github.com)
- Docker Hub account: [Sign up](https://hub.docker.com)
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

2. Add your project files, including your `Dockerfile` and any website content (if using GitHub Pages).

3. Create a new file at `.github/workflows/ci.yml` — this will be your GitHub Actions pipeline.

---

## ⚙️ Step 3: Configure GitHub Actions

1. Create the `.github/workflows/` folder if it doesn't exist.
2. Inside this folder, create a YAML file with the following content:

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

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./public
```

---

## 🔑 Step 4: Add Secrets to GitHub

1. Go to your repository **Settings**.
2. Select **Secrets and variables > Actions**.
3. Add the following secrets:
   - `DOCKER_USERNAME` — your Docker Hub username
   - `DOCKER_PASSWORD` — your Docker Hub password or access token

---

## 🐳 Step 5: Set Up Docker Hub

1. Log in to Docker Hub.
2. Create a new repository:
   - Use the same name as in your workflow YAML.
   - Set visibility to public or private according to your needs.

---

## 🌐 Step 6: Set Up GitHub Pages (Optional)

If you want to deploy a website:

1. Make sure you have a `public/` directory with your site content (HTML, CSS, JS).
2. In your repository **Settings**:
   - Go to **Pages**.
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
3. You can monitor the process under the **Actions** tab in your GitHub repository.

---

## 🎉 Done!

- ✅ Your code is automatically built and tested.
- ✅ Your Docker image is pushed to Docker Hub.
- ✅ Your website is deployed to GitHub Pages (if applicable).
- ✅ You have a fully automated CI/CD pipeline!

---

## 🧭 Next Steps

- Add automated tests.
- Set up multiple deployment environments (staging/production).
- Connect a CDN or custom domain for GitHub Pages.

---

## 🤝 Contributing

Feel free to open a pull request, report bugs, or suggest improvements!

---

## 🙏 Special Thanks

Big thanks to the **DeveloperFolio Team** for their amazing portfolio project template!
You can check it out here: [DeveloperFolio GitHub](https://github.com/saadpasta/developerFolio)

---

## 📄 License

This project is licensed under the MIT License.