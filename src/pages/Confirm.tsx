import CalendarIcon from "@/components/atoms/CalendarIcon";
import LocationIcon from "@/components/atoms/LocationIcon";
import ProfileIcon from "@/components/atoms/ProfileIcon";
import Main from "@/components/Layouts/Main";
import TextInputBox from "@/components/atoms/inputs/TextInputBox";
import SubmitButton from "@/components/atoms/inputs/SubmitButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { getCalendarType } from "@/utils/functions";

export default function Confirm() {
  const location = useLocation();
  console.log("location: ", location);

  const { name, gender, birthDate, birthTime, calendarType, city } =
    location.state;
  console.log("states: ", location.state);

  const navigate = useNavigate();
  const handleSubmit = useCallback(() => {
    navigate("/result", {
      state: location.state,
    });
  }, [navigate, location.state]);
  useEffect(() => {
    if (!location.state) {
      window.alert("Bad request");
      window.location.href = "/";
    }
  }, [location]);
  return (
    <Main additionalClasses="flex flex-col p-4">
      <h1 className="text-2xl font-semibold leading-relaxed">
        입력하신 프로필을 <br /> 확인해주세요.
      </h1>
      <div className="mt-8 flex flex-col gap-3">
        <TextInputBox
          Icon={ProfileIcon}
          inputProps={{
            type: "text",
            value: `${name} / ${gender === "male" ? "남자" : "여자"}`,
            readOnly: true,
          }}
        />
        <TextInputBox
          inputProps={{
            type: "text",
            value: `${getCalendarType(calendarType)} ${birthDate} ${birthTime === "unknown" ? "(시간모름)" : birthTime}`,
            readOnly: true,
          }}
          Icon={CalendarIcon}
        />
        <TextInputBox
          inputProps={{
            type: "text",
            value: `${city}`,
            readOnly: true,
          }}
          Icon={LocationIcon}
        />
      </div>
      <div className="flex-grow"></div>
      <SubmitButton value="만세력 보러가기" handleClick={handleSubmit} />
    </Main>
  );
}
