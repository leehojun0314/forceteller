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
