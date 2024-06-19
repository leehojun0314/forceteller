import { useCallback, useState } from "react";

export default function ResultDetail() {
  const [tab, setTab] = useState(0);
  const handleClick = useCallback((value: number) => {
    return () => {
      setTab(value);
    };
  }, []);
  const detailTabs = [
    "궁성",
    "천간합",
    "지지육합",
    "지지삼합",
    "천간충",
    "지지충",
    "공망",
    "형",
    "파",
    "해",
    "원진",
  ];
  return (
    <div>
      <div className="p-4">
        <div className="mb-2 flex flex-wrap gap-1">
          {detailTabs.map((el, idx) => (
            <div
              className="h-7 min-w-10 cursor-pointer rounded-full px-3 py-1 text-center"
              style={{
                backgroundColor: tab === idx ? "#524c46" : "#fcfbf9",
                color: tab === idx ? "white" : "black",
                fontSize: 12,
                fontWeight: 500,
              }}
              onClick={handleClick(idx)}
            >
              {el}
            </div>
          ))}
        </div>
        <p className="text-sm">
          지지에 인묘반합이 있어요. 반합은 방합에 들어가는 세가지 지지 중
          두가지만 있는 경우를 말합니다.{" "}
        </p>
      </div>
      <div className="bg-dark p-4 text-white">
        <h3>합과 충이란?</h3>
        <p>
          합과 충은 어느 위치에서 얼마나 작용하냐에 따라 상이한 영향을 미치기
          때문에 합이라고 해서 무조건 좋고 충이라고 해서 꼭 나쁘게 작용하지
          않습니다.
        </p>
        <button className="text-dark mx-auto mb-2 mt-4 block w-full rounded-full bg-white px-20 py-4 font-bold">
          내 사주 합과 충 풀이
        </button>
      </div>
    </div>
  );
}
