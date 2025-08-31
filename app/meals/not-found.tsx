export default function NotFound() {
  return (
    <main className="mt-20 text-center">
      <h1 className="text-[5rem] m-0 font-black uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent font-montserrat bg-center">
        Meal not found
      </h1>
      <p className="text-[1.5rem] font-medium text-[#ddd8d8]">
        Unfortunately, we could not find the requested page or meal data.
      </p>
    </main>
  );
}