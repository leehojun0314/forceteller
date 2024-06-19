import styles from "@/assets/css/profile.module.css";
import ErrorText from "@/components/atoms/ErrorText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Main from "@/components/Layouts/Main";
import SubmitButton from "@/components/atoms/SubmitButton";
const nameRegex = /^[a-zA-Z가-힣- ']+$/;
interface IFormInput {
  name: string;
  gender: "male" | "female";
  calendarType: "solar" | "lunar" | "lunarleap";
  birthDate: Date;
  city: string;
}
const schema = yup.object({
  name: yup
    .string()
    .matches(nameRegex, "이름에 특수문자를 포함 할 수 없습니다.")
    .required("정확한 이름을 입력해주세요."),
  gender: yup.string().oneOf(["male", "female"]).required(),
  calendarType: yup.string().oneOf(["solar", "lunar", "lunarleap"]).required(),
  birthDate: yup.date().required("생년월일을 입력해주세요."),
  city: yup.string().required("정확한 도시명을 입력해주세요."),
});
export default function Profile() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      gender: "male",
      calendarType: "solar",
      birthDate: undefined,
      city: "",
    },
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const [isTimeUnknown, setIsTimeUnknown] = useState<boolean>(false);
  const [datetime, setDatetime] = useState<string>("");
  const [isNightTimeshift, setIsNightTimeshift] = useState<boolean>(false);

  const handleTimeUnknown = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (evt.target.checked) {
        setIsNightTimeshift(false);
        setDatetime("");
      }
      setIsTimeUnknown(evt.target.checked);
    },
    [],
  );
  const handleNightTimeshift = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (evt.target.checked) {
        setIsTimeUnknown(false);
      }
      setIsNightTimeshift(evt.target.checked);
    },
    [],
  );
  const handleDatetime = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => {
      setDatetime(evt.target.value);
    },
    [],
  );
  const onSubmit = useCallback(
    (data: IFormInput) => {
      console.log("on submit data: ", data);
      console.log("is time unknown: ", isTimeUnknown);
      console.log("is night time shift: ", isNightTimeshift);
      console.log("datetime: ", datetime);
      //   history.push("/profile/confirm");
      navigate("/profile/confirm", {
        state: {
          ...data,
          isTimeUnknown,
          isNightTimeshift,
          datetime,
        },
      });
      //   window.location.href = "/result";
    },
    [isTimeUnknown, datetime, isNightTimeshift, navigate],
  );
  console.log("errors: ", errors);
  console.log("isValid: ", isValid);
  return (
    <Main>
      <form
        className={"flex h-full flex-col gap-6" + styles}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="mb-2 block">이름</label>
          <input
            className={
              "focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" +
              (errors.name ? " border-red-400" : "")
            }
            {...register("name", { required: true })}
            placeholder="홍길동"
          />
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </div>
        <div>
          <div>성별</div>
          <div className="flex flex-row items-center justify-center gap-0">
            <input
              type="radio"
              value="male"
              // onChange={handleGender}
              className="hidden"
              // checked={selectedGender === "male"}
              id="male"
              {...register("gender", { required: true })}
            />
            <label
              className={
                "border-grey-300 relative z-0 box-border w-1/2 items-center justify-center rounded-md rounded-r-none border border-r-0 bg-white p-3 text-center hover:cursor-pointer"

                //   (selectedGender === "male"
                //     ? "text-black after:absolute after:h-12 after:w-full after:rounded-md after:border-2 after:border-black after:content-['']"
                //     : "text-gray-500")
              }
              htmlFor="male"
            >
              <span>남자</span>
            </label>
            <input
              type="radio"
              value="female"
              className="hidden"
              id="female"
              {...register("gender", { required: true })}
            />
            <label
              className={
                "border-grey-300 relative z-0 box-border w-1/2 items-center justify-center rounded-md rounded-l-none border border-l-0 bg-white p-3 text-center hover:cursor-pointer"
              }
              htmlFor="female"
            >
              여자
            </label>
          </div>
        </div>

        <div>
          <div className="mb-2 flex flex-row justify-between">
            <label>생년월일시</label>
            <button>12간지 시간표</button>
          </div>
          <div className="flex flex-row">
            <div
              className="relative"
              style={{
                flex: 3,
              }}
            >
              <select
                className="focus:shadow-outline block w-full appearance-none rounded border bg-white px-4 py-3 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
                {...register("calendarType")}
              >
                <option value="solar" defaultChecked>
                  양력
                </option>
                <option value="lunar">음력</option>
                <option value="lunarleap">음력(윤달)</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1 text-gray-700">
                <svg
                  className="h-4 w-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>

            <input
              className={
                "focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" +
                (errors.birthDate ? " border-red-400" : "")
              }
              type="date"
              {...register("birthDate", { required: true })}
              style={{
                flex: 4,
              }}
            />

            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="time"
              style={{
                flex: 4,
              }}
              value={datetime}
              disabled={isTimeUnknown}
              onChange={handleDatetime}
            />
          </div>
          <div className="mt-2 flex flex-row gap-4">
            <div className="flex flex-row items-center gap-2">
              <input
                type="checkbox"
                // {...register("timeShift")}
                checked={isTimeUnknown}
                id="knowtime"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-black accent-slate-500 focus:ring-2 focus:ring-black dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-black"
                onChange={handleTimeUnknown}
              />
              <label htmlFor="knowtime">시간모름</label>
            </div>
            <div className="flex flex-row items-center gap-2">
              <input
                type="checkbox"
                // {...register("timeShift")}
                id="night"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-black accent-slate-500 focus:ring-2 focus:ring-black dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-black"
                checked={isNightTimeshift}
                onChange={handleNightTimeshift}
              />
              <label htmlFor="night">야자시/조자시</label>
            </div>
          </div>
          {errors.birthDate && (
            <ErrorText>{errors.birthDate.message}</ErrorText>
          )}
        </div>
        <div>
          <label>도시</label>
          <div className="relative">
            <input
              type="text"
              {...register("city", { required: true })}
              className={
                "focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none" +
                (errors.city ? " border-red-400" : "")
              }
              placeholder="도시명을 입력해주세요"
            />
            {errors.city && <ErrorText>{errors.city.message}</ErrorText>}
          </div>
        </div>
        <div className="flex-grow"></div>
        <SubmitButton
          value="만세력 보러가기"
          disabled={!isValid}
          additionalClasses="mb-4"
          handleClick={() => {
            window.location.href = "/result";
          }}
        />
        <SubmitButton value="저장된 만세력 불러오기" />
        {/* <input
          type="submit"
          className={
            "bottom-4 mx-auto w-full rounded-2xl py-4 text-center text-lg font-bold " +
            (isValid
              ? "bg-primary cursor-pointer"
              : "bg-disabled text-disabledText")
          }
          style={{ boxShadow: "1px 1px 20px 2px" }}
          value={"만세력 보러가기"}
        />
        <input
          type="submit"
          className="bg-primary bottom-4 mx-auto w-full cursor-pointer rounded-2xl py-4 text-center text-lg font-bold"
          style={{ boxShadow: "1px 1px 20px 2px" }}
          value={"저장된 만세력 불러오기"}
        /> */}
      </form>
    </Main>
  );
}
