import granites from "../content/graniteContent";

export default function Granite() {
  return (
    <>
      <div className="py-6 bg-blue">
        <div className="text-center text-primary pt-6 pb-4 text-4xl">Granite</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
          {granites.map((data, i) => {
            return (
              <div className="flex items-center pb-4 justify-center flex-col" key={i}>
                <img className="h-[80%] md:h-full" src={data.url} alt={data.url} />

                <div className="font-bold"> {data.tittle}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
