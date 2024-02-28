import Button from "./Button";
import "./HeroComp.css";
const HeroComp = () => {
  return (
    <div className="backgroundHero">
      <div className="">
        <h1>Title</h1>
        <p>Some about text in two lines</p>
        <Button />
      </div>
    </div>
  );
};

export default HeroComp;
