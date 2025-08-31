import styles from "../../styles/description.module.scss";
import { DesignSVG } from "../../assets/svg.jsx";
import { Link } from "react-router";
const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen mt-32">
      <span>Turnkey</span>
      <h1 className="uppercase text-[100px] leading-[90px] mt-5">High-End</h1>
      <h1 className="uppercase text-[100px] leading-[90px]">Interiors &</h1>
      <h1 className="uppercase text-[100px] leading-[90px]">Exteriors</h1>
      <div className="w-[400px] -mt-10">
        <DesignSVG />
      </div>
      <p className="max-w-[360px] text-center">
        Æbele Interiors offers a full range of bespoke interior design services
        — from initial concept and aesthetic counselling to coordination,
        execution and magazine-worthy finishing touches.
      </p>
      <div className={styles["button-wrapper"]}>
        <Link to={"/studio"}>
          <button className={styles.button}>
            <span className={styles["span-mother"]}>
              <span>S</span>
              <span>T</span>
              <span>U</span>
              <span>D</span>
              <span>I</span>
              <span>O</span>
            </span>
            <span className={styles["span-mother2"]}>
              <span>S</span>
              <span>T</span>
              <span>U</span>
              <span>D</span>
              <span>I</span>
              <span>O</span>
            </span>
          </button>
        </Link>
        <Link to={"/karrar"}>
          <button className={styles.button}>
            <span className={styles["span-mother"]}>
              <span>K</span>
              <span>A</span>
              <span>R</span>
              <span>R</span>
              <span>A</span>
              <span>R</span>
            </span>
            <span className={styles["span-mother2"]}>
              <span>K</span>
              <span>A</span>
              <span>R</span>
              <span>R</span>
              <span>A</span>
              <span>R</span>
            </span>
          </button>
        </Link>
        <Link to={"/work"}>
          <button className={styles.button}>
            <span className={styles["span-mother"]}>
              <span>W</span>
              <span>O</span>
              <span>R</span>
              <span>K</span>
            </span>
            <span className={styles["span-mother2"]}>
              <span>W</span>
              <span>O</span>
              <span>R</span>
              <span>K</span>
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Description;
