import MethodDoc from "./MethodDoc";

async function getData() {
  const res = await fetch(process.env.API_BASE_URL + "/api/about/bio");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Bio() {
  const data = await getData();
  return (
    <div className="flex flex-col gap-5 max-w-lg mx-auto my-auto pb-8 lg:-order-first order-first">
      <MethodDoc endpoint="/about/bio" method="GET" title="Bio" />
      <div>
        <div className="xs:text-lg text-base">{data.Bio}</div>
        <span className="text-dark-3 font-bold flex justify-end gap-1 ">
          <span className="text-dark-2">Oussama </span>Dahiir
        </span>
      </div>
    </div>
  );
}
