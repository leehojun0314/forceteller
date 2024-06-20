export function formatDate(date: Date) {
  const year = date.getFullYear(); // 연도 가져오기
  const month = date.getMonth() + 1; // 월 가져오기, 월은 0부터 시작하므로 1을 더합니다.
  const day = date.getDate(); // 일 가져오기

  // MM과 DD 형식을 맞추기 위해 한 자리 숫자일 경우 '0'을 추가합니다.
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;

  // yyyy/mm/dd 형식으로 문자열 생성
  return `${year}/${formattedMonth}/${formattedDay}`;
}
export function formatDateString(input: string): string {
  // 숫자만 포함된 문자열을 YYYY.MM.DD 형식으로 변환
  const cleanInput = input.replace(/[^0-9]/g, "");
  let formattedDate = "";

  for (let i = 0; i < cleanInput.length && i < 8; i++) {
    if (i === 4 || i === 6) {
      formattedDate += "."; // 년도와 월 사이, 월과 일 사이에 점 추가
    }
    formattedDate += cleanInput[i];
  }

  return formattedDate;
}
export function isNumeric(value: string): boolean {
  // 정규 표현식을 사용하여 문자열이 숫자만 포함하는지 검사
  return /^[0-9]+$/.test(value);
}

export function getCalendarType(calendar: string) {
  let transformedCalendarType;
  switch (calendar) {
    case "solar":
      transformedCalendarType = "양력";
      break;
    case "lunar":
      transformedCalendarType = "음력";
      break;
    case "lunarleap":
      transformedCalendarType = "음력(윤달)";
      break;
    default:
      break;
  }
  return transformedCalendarType;
}
export function getBirthTime(birthTime: string, bracket = false) {
  return birthTime !== "unknown"
    ? birthTime
    : bracket
      ? "(시간모름)"
      : "시간모름";
}
