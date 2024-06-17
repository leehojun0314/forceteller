import CalendarIcon from "@/components/atoms/CalendarIcon";
import LocationIcon from "@/components/atoms/LocationIcon";
import ProfileIcon from "@/components/atoms/ProfileIcon";
import Main from "@/components/Layouts/Main";
import InputForm from "@/components/molecules/InputForm";
import SubmitButton from "@/components/atoms/SubmitButton";
import { formatDate } from "@/utils/formatDate";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";

export default function Confirm() {
  const location = useLocation();
  console.log("location: ", location);
  if (!location.state) {
    window.alert("Bad request");
    window.location.href = "/";
  }
  const {
    name,
    gender,
    birthDate,
    datetime,
    isTimeUnknown,
    isNightTimeshift,
    calendarType,
    city,
  } = location.state;
  let transformedCalendarType: string;
  switch (calendarType) {
    case "solar":
      transformedCalendarType = "양";
      break;
    case "lunar":
      transformedCalendarType = "음";
      break;
    case "lunarleap":
      transformedCalendarType = "음(윤)";
      break;
    default:
      break;
  }
  const navigate = useNavigate();
  const handleSubmit = useCallback(() => {
    navigate("/result", {
      state: null,
    });
  }, [navigate]);
  return (
    <Main additionalClasses="flex flex-col">
      <h1 className="text-2xl font-semibold leading-relaxed">
        입력하신 프로필을 <br /> 확인해주세요.
      </h1>
      <div className="mt-8 flex flex-col gap-3">
        <InputForm
          content={`${name} / ${gender === "male" ? "남자" : "여자"}`}
          Icon={ProfileIcon}
        />
        <InputForm
          content={`${transformedCalendarType!} ${formatDate(birthDate)} ${isTimeUnknown ? "(시간모름)" : isNightTimeshift ? "(야자시/조자시)" : datetime}`}
          Icon={CalendarIcon}
        />
        <InputForm content={`${city}`} Icon={LocationIcon} />
      </div>
      <div className="flex-grow"></div>
      <SubmitButton value="만세력 보러가기" handleClick={handleSubmit} />
    </Main>
  );
}
