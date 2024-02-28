import CardComp from "./CardComp";
import "./PortfolioComp.css";
const PortfolioComp = () => {
  return (
    <div className="background">
      <div className="portfolioWrapper">
        <h1>Portfolio</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
          excepturi, reiciendis distinctio in, id totam voluptas rem ea
          doloremque perspiciatis aut illum tempora officia dicta maiores
          consequatur natus! Hic, vel!
        </p>
        <div className="cardWrapper">
          <CardComp title="random" />
          <CardComp title="random2" />
          <CardComp title="random3" />
          <CardComp title="random4" />
          <CardComp title="random5" />
          <CardComp title="memem" />
        </div>
      </div>
    </div>
  );
};

export default PortfolioComp;
