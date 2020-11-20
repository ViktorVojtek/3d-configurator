const htmlTemplate = (htmlWebpackPlugin) => (`
  <html>
    <head>
      ${htmlWebpackPlugin.tags.headTags}
      <meta charset="utf-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
      <div id="root"></div>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      ${htmlWebpackPlugin.tags.bodyTags}
    </body>
  </html>
`);

module.exports = htmlTemplate;