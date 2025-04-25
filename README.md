# react-redux-demo

Tiny starter that shows **pure Redux** working with **React 18** and **TypeScript**, wired manually with **Webpack 5 + Babel 7** (no CRA, no Vite, no Toolkit).

## Quick start

```bash
git clone https://github.com/<your-name>/react-redux-demo.git
cd react-redux-demo
npm install
npm start            # → http://localhost:3000
```

### Commands used in the tutorial
```powershell
npm init -y
npm install react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader

npm install redux react-redux

npm install --save-dev typescript @babel/preset-typescript
npm install --save-dev @types/react @types/react-dom
npm install --save-dev @types/react-redux

npx tsc --noEmit           # type check without emitting JS

npm run build              # production bundle → /dist

npm install -g serve
serve -s dist              # local static server to preview /dist
```