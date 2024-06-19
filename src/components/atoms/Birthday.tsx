export default function BirthDay({
  color,
  disabled,
  calendarType,
  birthDate,
  birthTime,
  gender,
  city,
}: {
  color: "red" | "blue";
  disabled: boolean;
  calendarType: "solar" | "lunar" | "lunarLeap";
  birthDate: string;
  birthTime: string;
  gender: string;
  city: string;
}) {
  let translatedCT = "";
  switch (calendarType) {
    case "solar":
      translatedCT = "양";
      break;
    case "lunar":
      translatedCT = "음";
      break;
    case "lunarLeap":
      translatedCT = "음(평달)";
      break;
    default:
      break;
  }
  return (
    <p className={disabled ? "opacity-50" : ""}>
      <span
        className={
          color === "red"
            ? "text-red-400"
            : color === "blue"
              ? "text-blue-400"
              : ""
        }
      >
        {translatedCT + " "}
      </span>
      {birthDate} {birthTime} {gender} {city}
    </p>
  );
}
