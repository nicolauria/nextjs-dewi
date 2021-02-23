import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);
graphcms.setHeader('authorization', `Bearer ${process.env.BEARER_TOKEN}`)

export async function getStaticProps() {
    const { portfolios } = await graphcms.request(
      `
      query Portfolios() {
        portfolios {
          title
          image
        }
      }
    `
    );

    console.log(portfolios);
  
    return {
      props: {
        portfolios,
      },
    };
  }
  
  export default ({ portfolios }) => {
    return (
        <>
        {portfolios.map((portfolio) => {
            return (
                <>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                  <img src="img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <a href="img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus" /></a>
                    <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
                  </div>
                </div>
                </>
            );
        })}
        </>
    );
  };