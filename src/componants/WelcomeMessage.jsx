import style from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  return (
    <h5 className={style.h5Welcoms}>
      No items in the todo list for today!! wanna add something ? or else you
      can enjoy your day.{" "}
    </h5>
  );
};

export default WelcomeMessage;
