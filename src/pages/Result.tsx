import Main from "@/components/Layouts/Main";

export default function Result() {
  return (
    <Main>
      <div className="flex flex-row gap-2">
        {/* profile */}
        <img
          src="/images/animal.png"
          alt="animal picture"
          width={56}
          height={56}
        />
        <div>
          <h2 className="text-2xl">이호준</h2>
          <h3>경신(하얀 원숭이)</h3>
        </div>
      </div>
    </Main>
  );
}
