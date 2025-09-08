import { ConnectSVG } from "../../assets/svg";
import styles from "../../styles/getInTouch.module.scss";

const GetInTouch = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto mt-44 ">
        <p className="text-xs uppercase text-center">Contact</p>
        <div className="lg:mt-10 uppercase text-center mt-5 flex flex-col items-center justify-center">
          <h1 className="lg:text-[110px] text-2xl lg:leading-[120px]   font-tan-pearl">
            Let's{" "}
          </h1>
          <h1 className="lg:text-[110px] text-2xl lg:leading-[120px]  lg:ml-[120px] font-tan-pearl">
            work
          </h1>
          <h1 className="lg:text-[110px] text-2xl lg:leading-[120px]  lg:ml-[240px] font-tan-pearl">
            Together
          </h1>
          <div className="lg:w-md w-40 lg:-mt-10 lg:ml-[400px] -mt-5 ">
            <ConnectSVG />
          </div>
          <div className="-mt-[50px] flex items-center justify-center">
            <div className={styles["button-wrapper"]}>
              <button className={styles.button}>
                <span className={styles["span-mother"]}>
                  <span>M</span>
                  <span>E</span>
                  <span>S</span>
                  <span>S</span>
                  <span>A</span>
                  <span>G</span>
                  <span>E</span>
                </span>
                <span className={styles["span-mother2"]}>
                  <span>M</span>
                  <span>E</span>
                  <span>S</span>
                  <span>S</span>
                  <span>A</span>
                  <span>G</span>
                  <span>E</span>
                </span>
              </button>
            </div>
            <div className={styles["button-wrapper"]}>
              <button className={styles.button}>
                <span className={styles["span-mother"]}>
                  <span>C</span>
                  <span>A</span>
                  <span>L</span>
                  <span>L</span>
                </span>
                <span className={styles["span-mother2"]}>
                  <span>C</span>
                  <span>A</span>
                  <span>L</span>
                  <span>L</span>
                </span>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <h1 className=" text-sm text-zinc-600">
              Inspired by our work? <br /> We would be delighted to help you{" "}
              <br /> create your dream interior!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
