import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Dewi Bootstrap Template - Index</title>
        <meta content name="description" />
        <meta content name="keywords" />
        {/* Favicons */}
        <link href="img/favicon.png" rel="icon" />
        <link href="img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
        {/* Vendor CSS Files */}
        <link rel="preload" href="vendor/aos/aos.css" as="style" />
        <link rel="preload" href="vendor/bootstrap/css/bootstrap.min.css" as="style" />
        <link rel="preload" href="vendor/bootstrap-icons/bootstrap-icons.css" as="style" />
        <link rel="preload" href="vendor/boxicons/css/boxicons.min.css" as="style" />
        <link rel="preload" href="vendor/glightbox/css/glightbox.min.css" as="style" />
        <link rel="preload" href="vendor/remixicon/remixicon.css" as="style" />
        <link rel="preload" href="vendor/swiper/swiper-bundle.min.css" as="style" />
        
        <link href="vendor/aos/aos.css" rel="stylesheet" />
        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
        <link href="vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link href="vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />

        <link rel="preload" as="script" href="vendor/aos/aos.js" />
        <link rel="preload" as="script" href="vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <link rel="preload" as="script" href="vendor/glightbox/js/glightbox.min.js" />
        <link rel="preload" as="script" href="vendor/isotope-layout/isotope.pkgd.min.js" />
        <link rel="preload" as="script" href="vendor/php-email-form/validate.js" />
        <link rel="preload" as="script" href="vendor/purecounter/purecounter.js" />
        <link rel="preload" as="script" href="vendor/swiper/swiper-bundle.min.js" />
        {/* Template Main CSS File */}
        <link href="css/style.css" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
