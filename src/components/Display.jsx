function Display({ display }) {
  return (
    <div className="w-full h-32 bg-gray-100 rounded-2xl mb-6 p-5 flex items-end justify-end">
      <p className="text-3xl font-bold">
        {display || "0"}
      </p>
    </div>
  );
}

export default Display;