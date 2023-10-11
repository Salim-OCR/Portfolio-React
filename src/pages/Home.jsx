import Buttons from "../components/Buttons";

function Home() {
  return (
    <>
      <section id="pageHome">
        <div className="monProfil">
          <div className="imgProfil">
            <img src="./media/profil.jpg" alt="photo de profil" />
          </div>
          <h1>salim ibrahimi</h1>
          <h2>développeur web </h2>
          <h3>front-end</h3>
        </div>
      </section>
      <Buttons right={"/knowledges"} />
    </>
  );
}
export default Home;
