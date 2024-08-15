# BCN - Transversal Consulting First Collaboration

This is a project created purely with **React**, the interactive JavaScript library (also the best!). It gets the data from a backend server that serves **MVT (Mapbox Vector Tiles)**.

## Project Structure

Navigate to `src/components/` to find two folders:

```bash
src
  └── components
      ├── main     # the application
      └── context  # the data
```

In `main`, you have the modules of the application. Use simple names to name these folders; the shorter, the better.

```bash
main
  ├── left
  └── maps
```

### Note:
- This is not a fixed rule. We can be creative with this structure as there are many options. This is the one I'll be practicing for so long, and it's the one that works for me. Use it for your own benefit and break the rules!

## Environment Variables

You need to add the `.env.local` file, which contains the secret keys for the Mapbox token and the URL to the styles server.

```env
REACT_APP_MAPBOX_TOKEN={your mapbox token}
REACT_APP_API_URL=https://portfolio-api.urbangeometries.com
```