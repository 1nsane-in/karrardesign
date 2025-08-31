import { ConnectSVG } from "../../assets/svg";
import styles from "../../styles/getInTouch.module.scss";

const GetInTouch = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto mt-44">
        <p className="text-xs uppercase">Contact</p>
        <div className="mt-10 uppercase">
          <h1 className="text-[110px] leading-[100px]">Let's </h1>
          <h1 className="text-[110px] leading-[100px] ml-[200px]">work</h1>
          <h1 className="text-[110px] leading-[100px] ml-[300px]">Together</h1>
          <div className="w-md -mt-10 ml-[400px]">
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
