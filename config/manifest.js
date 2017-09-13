module.exports = function () {
  return {
    name: "Seosamh Cahill",
    short_name: "Seo Cahill",
    description: "This is the personal website of Seosamh Cahill.",
    start_url: "/",
    display: "fullscreen",
    theme_color: "#fbb03b",
    background_color: "#fbb03b",

    icons: [
      {
        src: "assets/images/android/mipmap-xxxhdpi/ic_launcher.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "assets/images/android/playstore-icon.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "assets/images/ios/Icon-App-60x60@3x.png",
        sizes: "180x180",
        type: "image/png",
        targets: ['apple']
      }
    ],

    apple: {
      statusBarStyle: 'black-translucent'
    }
  }
}