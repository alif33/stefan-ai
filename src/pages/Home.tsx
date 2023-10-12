import Layout from "../components/Layout"

const Home = ()=>{
    return(
      <Layout>
        <div className="pt-5">
          <img
              width={450}
              height={480}
              src="/img/bg.png"
              className="mx-auto"
            />
        </div>
      </Layout>
    )
}

export default Home