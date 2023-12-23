export default function ProfileCard({ item }) {
  if (item) {
    return (
      <div className="flex flex-row">
        <div className=" ">
          <img
            src={item.img}
            alt=""
            className=" max-h-[10em] max-w-[20em]  w-[10em] rounded-full"
          />
        </div>
        <div className="ml-5 mt-5">
          <div className="text-2xl font-bold mb-7">{item.name}</div>
          <span className="text-left">{item.description}</span>
        </div>
      </div>
    );
  }
}
