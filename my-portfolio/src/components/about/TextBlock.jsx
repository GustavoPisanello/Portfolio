import LittleBalls from "./LittleBalls";

export default function TextBlock({ data }) {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index} // Chave deve ser movida para o container mais externo
          className={`h-1/2 w-full flex flex-col justify-center items-${item.style === "start" ? "start" : "end"} -mr-[4px]`} // Usando valores explícitos
        >
          <div
            className={`w-[75%] max-w-[350px] flex flex-col items-center bg-${item.bgColor} border-4 border-black rounded-xl shadow-md shadow-black`}
          >
            <p
              className={`text-${item.color} font-medium text-base pl-6 pr-6 pt-6 text-justify`}
            >
              {item.text}
            </p>
            <LittleBalls color={item.color} />
          </div>
        </div>
      ))}
    </>
  );
}
