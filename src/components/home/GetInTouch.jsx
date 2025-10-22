import { ConnectSVG } from "../../assets/svg";
import styles from "../../styles/getInTouch.module.scss";

const GetInTouch = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto lg:h-screen flex items-center justify-center mt-10 ">
        <div className="lg:mt-10 uppercase text-left mt-5 flex flex-col items-start justify-start">
          <h1 className="lg:text-[60px] text-2xl lg:leading-[70px]  font-tan-pearl">
            Let's work
          </h1>
          <h1 className="lg:text-[60px] text-2xl lg:leading-[70px]  lg:ml-[220px] font-tan-pearl">
            Together
          </h1>
          <div className="lg:w-md w-40 lg:-mt-10 lg:ml-[390px] -mt-5 ">
            <ConnectSVG />
          </div>
          <div className="flex flex-col items-center justify-center w-full">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
