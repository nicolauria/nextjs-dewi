import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="vendor/aos/aos.js"></script>
          <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="vendor/glightbox/js/glightbox.min.js"></script>
          <script src="vendor/isotope-layout/isotope.pkgd.min.js"></script>
          <script src="vendor/php-email-form/validate.js"></script>
          <script src="vendor/purecounter/purecounter.js"></script>
          <script src="vendor/swiper/swiper-bundle.min.js"></script>

          <script src="js/main.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument
