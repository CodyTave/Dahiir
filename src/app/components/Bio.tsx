import { getBio } from "../services/api";
import MethodDoc from "./MethodDoc";

export default async function Bio() {
  const data = await getBio();
  return (
    <div className="flex flex-col gap-5 max-w-lg mx-auto my-auto lg:-order-first order-first">
      <MethodDoc endpoint="/about/bio" method="GET" title="Bio" />
      <div>
        <div className="xs:text-lg text-base">{data.Bio}</div>
        <span className="text-dark-3 font-bold flex justify-end gap-1 mt-8 ">
          <span className="text-dark-2">Oussama </span>Dahiir
        </span>
      </div>
    </div>
  );
}
