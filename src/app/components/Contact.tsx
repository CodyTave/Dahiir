import { padding } from "../constants/styles";
import JsonForm from "./JsonForm";
import MethodDoc from "./MethodDoc";

export default function Contact() {
  return (
    <div className={padding + " grid lg:grid-cols-2 gap-10"}>
      <MethodDoc
        method="POST"
        endpoint="/contact"
        title="Contact"
        note="Edit the json to send a Message"
      />
      <JsonForm />
    </div>
  );
}
