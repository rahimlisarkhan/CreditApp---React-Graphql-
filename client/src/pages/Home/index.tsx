import { useQuery } from "@apollo/react-hooks";
import { GET_ENTERIES } from "shared/schema/home";

export default function HomePage() {
  const a = useQuery(GET_ENTERIES);

  console.log("data", a);

  return <div>HomePage</div>;
}
