
import DataJson from "../utils/data.json";

export default function Home() {
  console.log(DataJson);
  return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 p-6">
    {DataJson.map((item)=>(
      <div key={item.id}>{item.first_name} <img src={item.image}/></div>
    ))}
    </div>
  );
}
  