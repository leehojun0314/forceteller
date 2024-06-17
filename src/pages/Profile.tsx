import { SubmitHandler, useForm } from "react-hook-form";
import "@/assets/css/profile.module.css";
enum GenderEnum {
  male,
  female,
}
enum CalendarEnum {
  Solar,
  Lunar,
  LunarLeap,
}
enum TimeshiftEnum {
  unknown,
  night,
}
interface IFormInput {
  name: string;
  gender: GenderEnum;
  email: string;
  password: string;
  calendarType: CalendarEnum;
  birthDate: Date;
  birthTime: Date;
  timeShift: TimeshiftEnum;
  agree: boolean;
  city: string;
}
export default function Profile() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  console.log("field: ", watch("gender"));
  console.log("errors: ", errors);
  console.log("isValid: ", isValid);
  return (
    <main
      className="p-4"
      style={{
        height: "calc(100vh - 56px)",
      }}
    >
      <form
        className="flex h-full flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="mb-2 block">이름</label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            {...register("name", { required: true })}
            placeholder="홍길동"
          />
        </div>
        <div>성별</div>
        <div className="flex flex-row items-center justify-center gap-0">
          <input
            type="radio"
            value="0"
            // onChange={handleGender}
            className="hidden"
            // checked={selectedGender === "male"}
            id="male"
            {...register("gender", { required: true })}
          />
          <label
            className={
              "border-grey-300 relative box-border w-1/2 items-center justify-center rounded-md rounded-r-none border border-r-0 bg-white p-3 text-center hover:cursor-pointer"
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
            value="1"
            className="hidden"
            id="female"
            {...register("gender", { required: true })}
          />
          <label
            className={
              "border-grey-300 relative box-border w-1/2 items-center justify-center rounded-md rounded-l-none border border-l-0 bg-white p-3 text-center hover:cursor-pointer"
            }
            htmlFor="female"
          >
            여자
          </label>
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
                <option value="Solar" defaultChecked>
                  양력
                </option>
                <option value="Lunar">음력</option>
                <option value="LunarLeap">음력(윤달)</option>
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
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="date"
              {...register("birthDate", { required: true })}
              style={{
                flex: 4,
              }}
            />
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="time"
              {...register("birthTime", {
                required:
                  watch("timeShift") === TimeshiftEnum.unknown ? false : true,
              })}
              style={{
                flex: 4,
              }}
            />
          </div>
          <div className="mt-2 flex flex-row gap-4">
            <div className="flex flex-row items-center gap-2">
              <input
                type="radio"
                {...register("timeShift")}
                id="knowtime"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-black accent-slate-500 focus:ring-2 focus:ring-black dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-black"
              />
              <label htmlFor="knowtime">시간모름</label>
            </div>
            <div className="flex flex-row items-center gap-2">
              <input
                type="radio"
                {...register("timeShift")}
                id="night"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-black accent-slate-500 focus:ring-2 focus:ring-black dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-black"
              />
              <label htmlFor="night">야자시/조자시</label>
            </div>
          </div>
        </div>
        <div>
          <label>도시</label>
          <div className="relative">
            <input
              type="text"
              {...register("city", { required: true })}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              placeholder="도시명을 입력해주세요"
            />
          </div>
        </div>
        <div className="flex-grow"></div>
        <input
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
        />
      </form>
    </main>
  );
}
