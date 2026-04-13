import Image from "next/image";

export default function Page() {
  return (
    <>
      <h1>tailwind button 예제</h1>
      <section>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" id="btn">버튼예제</button>
      </section>
    </>
  );
}
