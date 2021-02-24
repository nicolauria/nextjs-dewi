import { GraphQLClient } from "graphql-request";
import Header from '../components/Header'

const graphcms = new GraphQLClient(process.env.GRAPHQL_URL_ENDPOINT);
graphcms.setHeader('authorization', `Bearer ${process.env.BEARER_TOKEN}`)

export async function getStaticProps() {
    const { posts } = await graphcms.request(
      `
      query Posts() {
        posts {
          id
          title
          excerpt
          slug
          coverImage {
            id
            url
          }
          author {
            id
            name
          }
          date
        }
      }
    `
    );
  
    return {
      props: {
        posts,
      },
    };
  }
  
  export default ({ posts }) => {
    return (
        <div className="posts-page">
        <Header />
        {/* ======= About Boxes Section ======= */}
        <section id="about-boxes" className="about-boxes">
            <div className="container" data-aos="fade-up">
              <div className="row">
                
                {posts.map((post) => {
                    return (
                        <>
                        <a href={`/post/${post.slug}`}>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                            <div className="card">
                                <img src={post.coverImage.url} className="card-img-top" alt="..." />
                                <div className="card-icon">
                                <i className="ri-brush-4-line" />
                                </div>
                                <div className="card-body">
                                <h5 className="card-title"><a href>{post.title}</a></h5>
                                <p className="card-text">{post.excerpt}</p>
                                </div>
                            </div>
                            </div>
                        </a>
                        </>
                    );
                })}
              </div>
            </div>
          </section>{/* End About Boxes Section */}
          <style jsx>{`
                .navbar a {
                    color: #333 !important;
                }
          `}</style>
        </div>
    );
  };