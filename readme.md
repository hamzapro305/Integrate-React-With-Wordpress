Here’s your README with the steps to integrate your React app into WordPress:

```markdown
# React App Integration with WordPress

## Step 1: Create an Element to Inject React Code

In your WordPress page, add a `div` element with a unique ID where you want to inject the React component:

```html
<div id="HS_REACT"></div>
```

In your React project, set up the code to render the app into the `div` with the corresponding ID:

```javascript
window.addEventListener("DOMContentLoaded", () => {
    // HS_REACT Section
    const root = createRoot(document.getElementById("HS_REACT"), {});
    root.render(<App />);
});
```

You can repeat this for multiple sections by creating different `div` elements and injecting React components.

## Step 2: Run Watcher

Run the following command to start the watcher, which will generate `bundle.js` in the `dist` folder:

```bash
npm run watch
```

## Step 3: Set Environment for Production

In your WordPress header, add this script to set the environment for production:

```html
<script>
    try { process.env.NODE_ENV } catch(e) { 
        var process = { env: { NODE_ENV: 'production' } }; 
    }
</script>
```

## Step 4: Include `bundle.js`

Finally, include the generated `bundle.js` in the WordPress page like this:

```php
<script src="<?php echo get_template_directory_uri() ?> <Path To Your Bundle JS>"></script>
```

Replace `<Path To Your Bundle JS>` with the actual path to your `bundle.js` file.
```

You can copy this directly and modify it as needed.