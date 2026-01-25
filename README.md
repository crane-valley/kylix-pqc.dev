# kylix-pqc.dev

Website for [kylix-pqc](https://github.com/crane-valley/kylix), a pure Rust post-quantum cryptography library.

**Live site:** https://kylix-pqc.dev

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Generate OG image and build for production |
| `npm run preview` | Preview production build locally |
| `npm run generate:og` | Regenerate OG image only |

## Project Structure

```
kylix-pqc.dev/
├── public/
│   └── og-image.png      # Open Graph image (auto-generated)
├── scripts/
│   └── generate-og-image.mjs  # OG image generator
├── src/
│   ├── layouts/
│   │   └── Layout.astro  # Base layout with head/meta
│   └── pages/
│       └── index.astro   # Homepage
├── astro.config.mjs
└── package.json
```

## Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Sharp](https://sharp.pixelplumbing.com/) - OG image generation

## License

MIT
