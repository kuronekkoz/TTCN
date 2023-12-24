export default function ServiceItems({ item }) {
  return (
    <div className="flex flex-col space-y-4">
      <span className="text-2xl text-left text-lime-500 ">{item.name}</span>
      <div className="text-left">{item.description}</div>
    </div>
  );
}
