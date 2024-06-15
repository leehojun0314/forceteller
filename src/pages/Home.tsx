export default function Home() {
  return (
    <main className="pt-6">
      <div className="px-8">
        <h1 className="text-2xl">모두를 위한 사주풀이,</h1>
        <h1 className="mb-3 text-2xl">포스텔러 만세력</h1>
        <p className="w-2/3 whitespace-pre-line leading-tight text-gray-500">
          서머타임은 물론 지역에 따른 1~2분의 미세 시차까지 보정합니다. 포스텔러
          만세력을 통해 다양한 방식으로 사주 오행을 분석해보세요.
        </p>
      </div>

      <img
        src="/images/pro_intro_2.webp"
        alt="포스텔러 만세력"
        className="with-full-width"
      />
      <img
        src="/images/pro_intro_2.webp"
        alt="포스텔러 만세력"
        className="with-full-width"
      />
      <img
        src="/images/pro_intro_2.webp"
        alt="포스텔러 만세력"
        className="with-full-width"
      />
      <div className="bottom-0 left-0 right-0 p-5">
        <button
          className="bg-primary mx-auto block w-10/12 rounded-2xl py-4 text-lg font-bold"
          style={{
            boxShadow: "10px 10px 15px",
          }}
        >
          시작하기
        </button>
      </div>
    </main>
  );
}
