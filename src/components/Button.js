const Button = ({ children, type = "button", name = "", ...restProps }) => {
  let style = "shadow-md";

  switch (type) {
    case "register":
      style +=
        " rounded-[0.625rem] text-[0.6875rem] w-[5.25rem] h-[2.0625rem] bg-[#365347] text-[#ffffff]";
      break;

    case "login":
      style +=
        " rounded-[0.625rem] text-[0.6875rem] mr-[2.44rem] w-[5.25rem] h-[2.0625rem] bg-[#ACC830] text-[#464646]";
      break;

    case "mini-join":
      style +=
        " rounded-[0.625rem] text-[0.5rem] w-[3rem] h-[1.50rem] bg-[#54AB75] text-[#ffffff]";
      break;

    case "big-join":
      style +=
        " rounded-[0.625rem] text-[0.75rem] w-[6.3125rem] h-[2.4375rem] bg-[#54AB75] text-[#ffffff]";
      break;

    case "make-reservation":
      style +=
        " rounded-[0.625rem] text-[0.8125rem] w-[7.4375rem] h-[2.1875rem] bg-[#365347] text-[#ffffff]";
      break;

    case "search":
      style +=
        " rounded-[0.625rem] text-[0.875rem] w-[3.75rem] h-[2.1875rem] bg-[#365347] text-[#ffffff]";
      break;

    case "register-long":
      style +=
        " rounded-[0.625rem] text-[0.875rem] w-[13.75rem] h-[2.875rem] bg-[#54AB75] text-[#ffffff]";
      break;

    case "register-emailDoubleCheck":
      style +=
        " text-[0.625rem] text-[#54AB75] bg-transparent w-[4.5rem] h-[1.9375rem] rounded-[0.3125rem] border border-green-500 ";
      break;

    case "register-certification":
      style +=
        " text-[0.625rem] w-[5.625rem] h-[1.9375rem] bg-transparent text-[#54AB75] border border-green-500 rounded-[0.3125rem]      ";
      break;

      case "register-addressSearch":
        style +=
          " w-[25.3125rem] h-[1.9375rem] rounded-[0.3125rem] border border-green-500 bg-[#54AB75] text-[0.625rem] text-[#ffffff]   ";
        break;

    default:
      style += "bg-[#675D50] text-white";
      break;
  }

  return (
    <button type={type} className={style} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
