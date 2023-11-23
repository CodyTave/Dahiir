import CopyToCLip from "./CopyToCLip";
export default function MethodDoc({
  method,
  title,
  endpoint,
  note,
}: {
  method: "GET" | "POST";
  title: string;
  endpoint: string;
  note?: string;
}) {
  const Url = process.env.API_BASE_URL + "/api" + endpoint;
  const methodColor =
    method === "GET"
      ? "text-green-0"
      : method === "POST"
      ? "text-yellow-0"
      : "";
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex gap-5 items-center">
        <h3 className={`xs:text-3xl text-2xl font-bold ${methodColor}`}>
          {method}
        </h3>
        <h4 className="xs:text-3xl text-2xl font-bold">{title}</h4>
      </div>
      <div className="flex justify-between gap-3 bg-light-2 p-3 xs:px-5 px-1 rounded-md">
        <span className="font-medium font-sans xs:text-base text-xs">
          {Url}
        </span>
        <span className="xs:block hidden">
          <CopyToCLip text={Url} />
        </span>
      </div>
      {note && (
        <span className="text-light-1 font-light xs:text-base xxs:text-sm text-xs">
          {"NB: " + note}
        </span>
      )}
    </div>
  );
}
