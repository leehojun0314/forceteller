import styles from "@/assets/css/profile.module.css";
import ErrorText from "@/components/atoms/ErrorText";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Main from "@/components/Layouts/Main";
import SubmitButton from "@/components/atoms/inputs/SubmitButton";
import InputField from "@/components/molecules/InputField";
import TextInputBox from "@/components/atoms/inputs/TextInputBox";
import RadioInputBox from "@/components/atoms/inputs/RadioInputBox";
import SelectBox from "@/components/atoms/inputs/SelectBox";
import DateInputBox from "@/components/atoms/inputs/DateInputBox";
const nameRegex = /^[a-zA-Z가-힣- ']+$/;
interface IFormInput {
  name: string;
  gender: "male" | "female";
  calendarType: "solar" | "lunar" | "lunarleap" | "";
  birthDate: string;
  birthTime: string;
  city: string;
}
const schema = yup.object({
  name: yup
    .string()
    .matches(nameRegex, "이름에 특수문자를 포함 할 수 없습니다.")
    .required("정확한 이름을 입력해주세요."),
  gender: yup.string().oneOf(["male", "female"]).required(),
  calendarType: yup
    .string()
    .oneOf(["solar", "lunar", "lunarleap", ""])
    .required(),
  birthDate: yup.string().required("생년월일을 입력해주세요."),
  birthTime: yup.string().required(),
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
      calendarType: "",
      birthDate: undefined,
      birthTime: "unknown",
      city: "",
    },
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
    mode: "onBlur",
  });
  console.log("errors:", errors);
  console.log("isvalid: ", isValid);
  const onSubmit = useCallback(
    (data: IFormInput) => {
      console.log("on submit data: ", data);

      //   history.push("/profile/confirm");
      navigate("/profile/confirm", {
        state: {
          ...data,
        },
      });
      //   window.location.href = "/result";
    },
    [navigate],
  );
  console.log("errors: ", errors);
  console.log("isValid: ", isValid);
  return (
    <Main additionalClasses="p-4">
      <form
        className={"flex h-full flex-col gap-5 " + styles}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField title="이름">
          <TextInputBox
            inputProps={{
              ...register("name", { required: true }),
              placeholder: "홍길동",
            }}
            addClassName={errors.name ? " border-red-400" : ""}
          />
          {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
        </InputField>
        <InputField title="성별">
          <RadioInputBox
            radio1Content="남자"
            radio1Props={{
              ...register("gender", { required: true }),
              value: "male",
            }}
            radio2Content="여자"
            radio2Props={{
              ...register("gender", { required: true }),
              value: "female",
            }}
          />
        </InputField>
        <InputField
          title="생년월일시"
          SubTitle={
            <SelectBox
              options={[
                { value: "", content: "" },
                { value: "solar", content: "양력" },
                { value: "lunar", content: "음력" },
                { value: "lunarLeap", content: "음력(윤달)" },
              ]}
              selectProps={register("calendarType")}
            />
          }
        >
          <div className="flex flex-row">
            <DateInputBox
              addClasses={
                errors.birthDate ? " border-red-400 flex-1" : " flex-1"
              }
              inputProps={register("birthDate", { required: true })}
            />
            <SelectBox
              options={[
                { value: "unknown", content: "태어난시-모름" },
                { value: "0", content: "子(자) 23:30 ~ 01:29" },
                { value: "1", content: "丑(축) 01:30 ~ 03:29" },
                { value: "3", content: "寅(인) 03:30 ~ 05:29" },
                { value: "4", content: "卯(묘) 05:30 ~ 07:29" },
                { value: "5", content: "辰(진) 07:30 ~ 09:29" },
                { value: "6", content: "巳(사) 09:30 ~ 11:29" },
                { value: "7", content: "午(오) 11:30 ~ 13:29" },
                { value: "8", content: "未(미) 13:30 ~ 15:29" },
              ]}
              selectProps={register("birthTime", { required: true })}
              addClasses=" flex-1"
            />
          </div>
        </InputField>
        <InputField title="도시">
          <TextInputBox
            inputProps={{
              ...register("city", { required: true }),
              placeholder: "도시명을 입력해주세요",
            }}
          />
        </InputField>

        <div className="flex-grow"></div>
        <div className="flex flex-col gap-2">
          <SubmitButton
            value="만세력 보러가기"
            disabled={!isValid}
            additionalClasses="mb-4"
            // handleClick={() => {
            //   window.location.href = "/result";
            // }}
          />
          <SubmitButton value="저장된 만세력 불러오기" />
        </div>
      </form>
    </Main>
  );
}
