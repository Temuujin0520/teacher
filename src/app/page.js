import DataJson from "../utils/data.json";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 p-6">
      {DataJson.map((item) => (
        <div key={item.id} className="text-center">
          <img className="rounded-full w-60 h-60 object-cover mx-auto" src={item.image} alt={item.first_name}/>
          <div>{item.first_name}</div>
        </div>
      ))}
    </div>
  );
}