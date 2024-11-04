# Building site

As this is a static site that is connected to Sanity CMS, there need to be a rebuilding mechanism to keep the site up to date with the latest content. This is done by using Webhooks in Netlify and Sanity Studio.

> **Note:** this is taken from [Netlify's documentation](https://developers.netlify.com/guides/how-to-use-sanity-cms-with-astro/#buildwebhooks).

## Description

To keep your static site up to date with changes made to the CMS, a build hook or webhook can be used to trigger a rebuild whenever changes in content occur. A rebuild will regenerate any pages that are statically rendered with the latest data from Sanity.

There are two sides to the build/webhooks:

The Netlify Build Hook (which is called by)
The Sanity Webhook

### Netlify Build Hook

The first is on the Netlify side. Navigate to **Site configuration > Continuous deployment** and scroll down until you see **Build hooks**.

Click “Add build hook”, and give your build hook a name, then select the branch to build from.

When you click save you’ll be shown a URL which can be used on the Sanity side of the setup. Copy the URL and head back to Sanity Studio.

### Sanity Webhook

Navigate to **API > Webhooks** and fill out the fields. Give the webhook a name, then add the URL provided by Netlify. You’ll also need to select a dataset. We’re using the production dataset here.

### Triggering a rebuild

You should notice a new build with the message “Deploy triggered by hook” is now in your Netlify build queue when you change content in Sanity. This means that the webhook is working correctly and your site is being rebuilt with the latest content.
