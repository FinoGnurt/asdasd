import { FaUser } from "react-icons/fa";
import { BsFillCreditCardFill } from "react-icons/bs";
import checkIconMobile from "../../assets/mobile/checkpoint.svg";
import { useSpring, animated } from "react-spring";

const Content = () => {
  const customer = useSpring({ customers: 120450, from: { customers: 0 } });

  const min = 30000;
  const max = 120451;
  const card = useSpring({
    cards: Math.random() * (max - min) + min, // return giá trị trong khoảng 30000 đến 120451 (>30000 và <120451)
    from: { cards: 0 }, // Giá trị khởi đầu cho animation là 0 chạy đến giá trị random ở trên
  });

  return (
    <section className="md:flex md:flex-row">
      <div className="ml-[70px] mr-[54px] font-bold flex flex-col items-center bg-gradient-to-b from-white/40 to-transparent shadow-md rounded-[24px] md:w-[20%]">
        <div className="mt-16 gap-8 flex items-start">
          <FaUser size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {customer.customers.to((value) => Math.floor(value))}
            </animated.div>
            <p className="text-13 font-semibold mb-[36px] md:text-16">
              Customers
            </p>
          </div>
        </div>

        <div className="gap-8 flex items-start mb-16">
          <BsFillCreditCardFill size={"22px"} className="mt-[12px]" />
          <div className="text-26">
            <animated.div>
              {card.cards.to((value) => Math.floor(value))}
            </animated.div>
            <p className="text-13 font-semibold md:text-16"> Cards Issued </p>
          </div>
        </div>
      </div>

      <div className="text-13 flex flex-col w-full mt-[90px] font-semibold md:w-[30%] md:mt-0 md:text-16 md:ml-[20%]">
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p> Card reports sent to your phone every weeks </p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p> No external fees </p>
        </div>
        <div className="check-content">
          <img src={checkIconMobile} alt="" />
          <p> Set spending limits and restrictions </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
