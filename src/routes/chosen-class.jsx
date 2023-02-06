import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { classLoader } from "./class";

export default function ChosenClass() {
    
  return (
    <div>chosen-class</div>
  )
}
export async function loader({ params }) {
  return classLoader(params.index);
}