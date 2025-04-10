# 🚀 My Portfolio: Full DevOps Pipeline & Deployment Guide

Welcome to my personal portfolio project! 🌟  
This repository demonstrates a **complete DevOps workflow** including:

- GitHub Actions CI/CD
- Automated Docker builds and push to DockerHub
- Deployment to GitHub Pages
- Professional badges, QR code, and more!

---

## 📂 Project Structure

- `src/` — React application source code
- `.github/workflows/` — CI/CD workflows
- `Dockerfile` — Docker image setup
- `public/` — Static files for the portfolio

---

## 🛠️ GitHub Actions: Workflow Explanation

### ✅ Main Workflow: `Full DevOps Pipeline 🚀`

Triggered on **push to main branch**.

### Steps Breakdown:

1. **Checkout repository**
   ```bash
   uses: actions/checkout@v4
   ```
2. **Setup Node.js environment**
   ```bash
   uses: actions/setup-node@v4
   with:
     node-version: '20'
   ```
3. **Cache dependencies** (to speed up builds)
   ```bash
   uses: actions/cache@v4
   path: ~/.npm
   ```
4. **Install project dependencies**
   ```bash
   npm install
   ```
5. **Build project**
   ```bash
   npm run build
   ```
6. **Verify build success**
   ```bash
   if [ ! -f "build/index.html" ]; then exit 1; fi
   ```
7. **Deploy to GitHub Pages**
   ```bash
   uses: peaceiris/actions-gh-pages@v4
   with:
     publish_dir: ./build
     github_token: ${{ secrets.GITHUB_TOKEN }}
   ```
8. **Build and push Docker image**
   ```bash
   uses: docker/build-push-action@v5
   with:
     push: true
     tags: costadevop/my-portfolio:latest
   ```

### ✅ Result
- 🔥 Automatic website deployment to GitHub Pages
- 🐳 Docker image pushed to DockerHub automatically


---

## 🐳 Docker Image Info

DockerHub repository: [costadevop/my-portfolio](https://hub.docker.com/r/costadevop/my-portfolio)

### Build Locally:
```bash
docker build -t costadevop/my-portfolio:latest .
```

### Run Locally:
```bash
docker run -p 3000:3000 costadevop/my-portfolio:latest
```

### Push to DockerHub:
```bash
docker push costadevop/my-portfolio:latest
```

---

## 🌐 GitHub Pages Setup Guide

1. Go to **Settings > Pages**
2. Set **Source** to: `Deploy from a GitHub Actions workflow`
3. After successful pipeline run, your site will be live at:

```
https://costaep.github.io/my-portfolio
```

---

## 📛 Badges

![GitHub repo size](https://img.shields.io/github/repo-size/CostaEp/my-portfolio)
![GitHub stars](https://img.shields.io/github/stars/CostaEp/my-portfolio?style=social)
![Docker Pulls](https://img.shields.io/docker/pulls/costadevop/my-portfolio)

---

## 📱 QR Code to Portfolio

> Scan to open live website:

![QR Code](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://costaep.github.io/my-portfolio)

---

## 🤝 Contributing

Pull requests are welcome!
If you want to suggest improvements or fixes, feel free to fork this project and submit a PR.

1. Fork the repo
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request 🎉

---

## 🚀 Future Improvements

- [ ] Add multiple Docker tags (`latest`, `stable`, etc.)
- [ ] Add Lighthouse performance testing step
- [ ] Add security audit CI step
- [ ] Add deploy preview (GitHub PR auto-preview)

---

## 📩 Contact

For any questions, feel free to contact me:

- GitHub: [CostaEp](https://github.com/CostaEp)
- DockerHub: [costadevop](https://hub.docker.com/u/costadevop)


---

✅ **Enjoy the project and feel free to fork, star ⭐, and contribute!**


---

## 🙏 Special Thanks
> 📌 **Original portfolio template credit:** Thanks to [saadpasta/developerFolio](https://github.com/saadpasta/developerFolio) for the excellent portfolio starter! 🙏

---

## 🤝 Contributing

Feel free to open a pull request, report bugs, or suggest improvements!

---

## 📄 License

This project is licensed under the MIT License.