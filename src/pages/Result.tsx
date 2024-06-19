import BirthDay from "@/components/atoms/Birthday";
import Main from "@/components/Layouts/Main";
import TableComponent from "@/components/molecules/Table";
import ResultDetail from "@/components/molecules/ResultDetail";
import { ArrowDropDown } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import Table2 from "@/components/molecules/Table2";
// function TabResult() {
//   const [tab, setTab] = useState(0);
//   const handleTab = useCallback((value: number) => {
//     return () => {
//       setTab(value);
//     };
//   }, []);
//   return <div></div>;
// }
export default function Result() {
  return (
    <Main additionalClasses="flex flex-col p-0">
      <div className="flex flex-row gap-2 p-4">
        {/* profile */}
        <img
          src="/images/animal.png"
          alt="animal picture"
          width={56}
          height={56}
        />
        <div>
          <h2 className="text-2xl">이호준</h2>
          <h3>경신(하얀 원숭이)</h3>
        </div>
      </div>
      <div className="mb-4 flex flex-col gap-1 p-4 pt-0 text-xs">
        {/* calendars */}
        <BirthDay
          disabled={true}
          color="red"
          calendarType="lunar"
          birthDate="1998/03/14"
          birthTime="10:30"
          city="서울 특별시"
          gender="남자"
        />
        <BirthDay
          disabled={true}
          color="blue"
          calendarType="lunarLeap"
          birthDate="1998/02/16"
          birthTime="10:30"
          city="서울 특별시"
          gender="남자"
        />
        <BirthDay
          disabled={false}
          color="red"
          calendarType="lunar"
          birthDate="1998/03/14"
          birthTime="10:30"
          city="서울 특별시"
          gender="남자"
        />
      </div>
      <div className="p-4 pl-0 text-xs">
        <TableComponent />
      </div>
      <div className="w-full">
        <Accordion className="p-0">
          <AccordionSummary
            style={{
              backgroundColor: "#524c46",
              color: "white",
            }}
            className="font-bold"
            expandIcon={
              <ArrowDropDown color="inherit" style={{ color: "white" }} />
            }
          >
            사주 풀이 자세히 보기
          </AccordionSummary>
          <AccordionDetails
            style={{
              backgroundColor: "#dad6d2",
            }}
            className="p-0"
          >
            <ResultDetail />
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="w-full">{/* <TabResult /> */}</div>
      <div className="p-4">
        <div className="mb-6 mt-8">
          <h2 className="text-dark text-2xl font-bold">오행과 십성 분석</h2>
          <div>
            <input
              type="checkbox"
              name="option1"
              id="option1"
              className="bg-dark color-dark w-4"
            />
            <label htmlFor="option1">합에 따른 오행 변화 적용</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="option2"
              id="option2"
              className="w-4"
            />
            <label htmlFor="option2">조후와 궁성 보정값 적용</label>
          </div>
        </div>
        <div className="flex flex-row">
          <svg viewBox="0 0 100 100" width="50%" height="50%">
            <path
              d="M 92.27305029709527 52.77163859753386 A 41.125 41.125 0 0 1 22.068283920798503 81.85140497383063"
              fill="none"
              stroke-width="11.75"
              stroke="#4C8093"
            ></path>
            <path
              d="M 19.99635409119195 78.69708294393168 A 41.125 41.125 0 0 1 49.07612046748871 8.492316567634909"
              fill="none"
              stroke-width="11.75"
              stroke="#DAD6D2"
            ></path>
            <path
              d="M 50.382683432365084 7.951120467488714 A 41.125 41.125 0 0 1 79.46244980866186 19.99635409119194"
              fill="none"
              stroke-width="11.75"
              stroke="#E57576"
            ></path>
            <path
              d="M 80.00364590880804 20.537550191338134 A 41.125 41.125 0 0 1 92.04887953251128 49.6173165676349"
              fill="none"
              stroke-width="11.75"
              stroke="#FFCB7F"
            ></path>
            <text
              dominant-baseline="central"
              x="50"
              y="50"
              dx="1.1480502970952695"
              dy="2.77163859753386"
              text-anchor="end"
              // style="font-size: 18px; font-weight: 500; fill: rgb(82, 76, 70); text-anchor: middle;"
              style={{
                fontSize: 18,
                fontWeight: 500,
                fill: "rgb(82, 76, 70)",
                textAnchor: "middle",
              }}
            >
              목木
            </text>
          </svg>
          <svg viewBox="0 0 100 100" width="50%" height="50%">
            <path
              d="M 93.24632034355965 52.121320343559645 A 41.125 41.125 0 0 1 52.121320343559645 93.24632034355965"
              fill="none"
              stroke-width="11.75"
              stroke="#212529"
            ></path>
            <path
              d="M 49.292893218813454 91.83210678118655 A 41.125 41.125 0 0 1 8.167893218813454 50.70710678118655"
              fill="none"
              stroke-width="11.75"
              stroke="#BCC2C8"
            ></path>
            <path
              d="M 7.951120467488714 49.617316567634916 A 41.125 41.125 0 0 1 19.99635409119194 20.537550191338145"
              fill="none"
              stroke-width="11.75"
              stroke="#343A40"
            ></path>
            <path
              d="M 20.537550191338134 19.99635409119195 A 41.125 41.125 0 0 1 49.6173165676349 7.951120467488714"
              fill="none"
              stroke-width="11.75"
              stroke="#59636D"
            ></path>
            <path
              d="M 50.382683432365084 7.951120467488714 A 41.125 41.125 0 0 1 79.46244980866186 19.99635409119194"
              fill="none"
              stroke-width="11.75"
              stroke="#838E99"
            ></path>
            <path
              d="M 80.00364590880804 20.537550191338134 A 41.125 41.125 0 0 1 92.04887953251128 49.6173165676349"
              fill="none"
              stroke-width="11.75"
              stroke="#A9B1B9"
            ></path>
            <text
              dominant-baseline="central"
              x="50"
              y="50"
              dx="2.121320343559643"
              dy="2.1213203435596424"
              text-anchor="end"
              // style="font-size: 18px; font-weight: 500; fill: rgb(82, 76, 70); text-anchor: middle;"
              style={{
                fontSize: 18,
                fontWeight: 500,
                fill: "rgb(82, 76, 70)",
                textAnchor: "middle",
              }}
            >
              정재正財
            </text>
          </svg>
        </div>
        <div className="mt-8 flex flex-row gap-3">
          <Grid container>
            <Grid container item>
              <Grid
                item
                className="bg-brown text-dark flex-grow py-2 text-center text-lg font-bold"
              >
                오행
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item className="flex-grow border p-4 text-center">
                목
              </Grid>
              <Grid item className="flex-grow border p-4 text-center">
                45% 과다
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item className="flex-grow border p-4 text-center">
                목
              </Grid>
              <Grid item className="flex-grow border p-4 text-center">
                45% 과다
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item className="flex-grow border p-4 text-center">
                목
              </Grid>
              <Grid item className="flex-grow border p-4 text-center">
                45% 과다
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item className="flex-grow border p-4 text-center">
                목
              </Grid>
              <Grid item className="flex-grow border p-4 text-center">
                45% 과다
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item className="flex-grow border p-4 text-center">
                목
              </Grid>
              <Grid item className="flex-grow border p-4 text-center">
                45% 과다
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
            <Grid container item>
              <Grid
                item
                className="bg-brown text-dark flex-grow py-2 text-center text-lg font-bold"
              >
                오행
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item className="flex-grow border p-4 text-center">
                목
              </Grid>
              <Grid item className="flex-grow border p-4 text-center">
                45% 과다
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item className="flex-grow border p-4 text-center">
                목
              </Grid>
              <Grid item className="flex-grow border p-4 text-center">
                45% 과다
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item className="flex-grow border p-4 text-center">
                목
              </Grid>
              <Grid item className="flex-grow border p-4 text-center">
                45% 과다
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item className="flex-grow border p-4 text-center">
                목
              </Grid>
              <Grid item className="flex-grow border p-4 text-center">
                45% 과다
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-dark text-2xl font-bold">나의 오행: 경금</h2>
        <div className="p-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 256 250"
            fill="none"
          >
            <g>
              <mask
                id="mask0_2628_2084"
                maskUnits="userSpaceOnUse"
                x="89"
                y="0"
                width="80"
                height="80"
              >
                <circle
                  cx="129"
                  cy="40"
                  r="39.5"
                  fill="#FFFFFF"
                  stroke="#524C46"
                ></circle>
              </mask>
              <circle
                cx="129"
                cy="40"
                r="39.5"
                stroke="#B8B2AC"
                fill="#FCFBF9"
              ></circle>
              <g
                mask="url(#mask0_2628_2084)"
                className="five-ten-graph-chart_chartCircle__3uW4q"
              >
                <rect
                  x="89"
                  y="54.54545454545455"
                  width="80"
                  height="80"
                  fill="#DAD6D2"
                ></rect>
                <text
                  x="129"
                  y="33"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  fill="#524C46"
                  font-size="16"
                  font-family="Pretendard Variable"
                  font-weight="bold"
                >
                  금(비겁)
                </text>
                <text
                  x="129"
                  y="52"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  fill="#524C46"
                  font-size="16"
                  font-family="Pretendard Variable"
                  font-weight="bold"
                >
                  31.8%
                </text>
              </g>
            </g>
            <g>
              <mask
                id="mask1_2628_2084"
                maskUnits="userSpaceOnUse"
                x="176"
                y="64"
                width="80"
                height="80"
              >
                <circle
                  cx="216"
                  cy="105"
                  r="39.5"
                  fill="#FFFFFF"
                  stroke="#524C46"
                ></circle>
              </mask>
              <circle
                cx="216"
                cy="105"
                r="39.5"
                stroke="#B8B2AC"
                fill="#FCFBF9"
              ></circle>
              <g
                mask="url(#mask1_2628_2084)"
                className="five-ten-graph-chart_chartCircle__3uW4q"
              >
                <rect
                  x="176"
                  y="144"
                  width="80"
                  height="80"
                  fill="#B1B0BB"
                ></rect>
                <text
                  x="216"
                  y="98"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  fill="#524C46"
                  font-size="16"
                  font-family="Pretendard Variable"
                  font-weight="bold"
                >
                  수(식상)
                </text>
                <text
                  x="216"
                  y="117"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  fill="#524C46"
                  font-size="16"
                  font-family="Pretendard Variable"
                  font-weight="bold"
                >
                  0.0%
                </text>
              </g>
            </g>
            <g>
              <mask
                id="mask2_2628_2084"
                maskUnits="userSpaceOnUse"
                x="143"
                y="168"
                width="80"
                height="80"
              >
                <circle
                  cx="183"
                  cy="208"
                  r="39.5"
                  fill="#FFFFFF"
                  stroke="#524C46"
                ></circle>
              </mask>
              <circle
                cx="183"
                cy="208"
                r="39.5"
                stroke="#B8B2AC"
                fill="#FCFBF9"
              ></circle>
              <g
                mask="url(#mask2_2628_2084)"
                className="five-ten-graph-chart_chartCircle__3uW4q"
              >
                <rect
                  x="143"
                  y="211.63636363636363"
                  width="80"
                  height="80"
                  fill="#99DFF9"
                ></rect>
                <text
                  x="183"
                  y="201"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  fill="#524C46"
                  font-size="16"
                  font-family="Pretendard Variable"
                  font-weight="bold"
                >
                  목(재성)
                </text>
                <text
                  x="183"
                  y="220"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  fill="#524C46"
                  font-size="16"
                  font-family="Pretendard Variable"
                  font-weight="bold"
                >
                  45.5%
                </text>
              </g>
            </g>
            <g>
              <mask
                id="mask3_2628_2084"
                maskUnits="userSpaceOnUse"
                x="34"
                y="168"
                width="80"
                height="80"
              >
                <circle
                  cx="74"
                  cy="208"
                  r="39.5"
                  fill="#FFFFFF"
                  stroke="#524C46"
                ></circle>
              </mask>
              <circle
                cx="74"
                cy="208"
                r="39.5"
                stroke="#B8B2AC"
                fill="#FCFBF9"
              ></circle>
              <g
                mask="url(#mask3_2628_2084)"
                className="five-ten-graph-chart_chartCircle__3uW4q"
              >
                <rect
                  x="34"
                  y="237.0909090909091"
                  width="80"
                  height="80"
                  fill="#FDAAAA"
                ></rect>
                <text
                  x="74"
                  y="201"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  fill="#524C46"
                  font-size="16"
                  font-family="Pretendard Variable"
                  font-weight="bold"
                >
                  화(관성)
                </text>
                <text
                  x="74"
                  y="220"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  fill="#524C46"
                  font-size="16"
                  font-family="Pretendard Variable"
                  font-weight="bold"
                >
                  13.6%
                </text>
              </g>
            </g>
            <g>
              <mask
                id="mask4_2628_2084"
                maskUnits="userSpaceOnUse"
                x="0"
                y="65"
                width="80"
                height="80"
              >
                <circle
                  cx="40"
                  cy="105"
                  r="39.5"
                  fill="#FFFFFF"
                  stroke="#524C46"
                ></circle>
              </mask>
              <circle
                cx="40"
                cy="105"
                r="39.5"
                stroke="#B8B2AC"
                fill="#FCFBF9"
              ></circle>
              <g
                mask="url(#mask4_2628_2084)"
                className="five-ten-graph-chart_chartCircle__3uW4q"
              >
                <rect
                  x="0"
                  y="137.72727272727272"
                  width="80"
                  height="80"
                  fill="#FFD36E"
                ></rect>
                <text
                  x="40"
                  y="98"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  fill="#524C46"
                  font-size="16"
                  font-family="Pretendard Variable"
                  font-weight="bold"
                >
                  토(인성)
                </text>
                <text
                  x="40"
                  y="117"
                  dominant-baseline="middle"
                  text-anchor="middle"
                  fill="#524C46"
                  font-size="16"
                  font-family="Pretendard Variable"
                  font-weight="bold"
                >
                  9.1%
                </text>
              </g>
            </g>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M95.1846 64.5709L83.6958 65.7286L90.4427 75.0994L95.1846 64.5709ZM76.2921 79.4058L88.4651 70.6412L87.2965 69.0181L75.1235 77.7827L76.2921 79.4058Z"
              fill="#428BFF"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M185.585 75.8724L180.762 65.3809L174.087 74.8036L185.585 75.8724ZM165.422 62.816L177.662 71.4863L178.818 69.8542L166.578 61.184L165.422 62.816Z"
              fill="#428BFF"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M196.411 168.768L205.05 161.107L194.096 157.456L196.411 168.768ZM203.051 145.684L198.308 159.914L200.205 160.546L204.949 146.316L203.051 145.684Z"
              fill="#428BFF"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M116 208.5L126 214.274L126 202.726L116 208.5ZM140 207.5L125 207.5L125 209.5L140 209.5L140 207.5Z"
              fill="#428BFF"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M52.1034 144.666L49.6925 155.959L60.6775 152.4L52.1034 144.666ZM60.4512 167.192L55.8282 152.92L53.9255 153.537L58.5486 167.808L60.4512 167.192Z"
              fill="#428BFF"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M99.2981 170.944C99.1359 171.472 99.4324 172.031 99.9603 172.193C100.488 172.356 101.048 172.059 101.21 171.531L99.2981 170.944ZM126.108 87.0952L117.652 94.9584L128.69 98.3499L126.108 87.0952ZM101.21 171.531L124.42 95.992L122.509 95.4046L99.2981 170.944L101.21 171.531Z"
              fill="#E85E5E"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M157.192 169.365L159.654 158.084L148.653 161.593L157.192 169.365ZM129.489 85.8024L153.505 161.095L155.41 160.487L131.395 85.1947L129.489 85.8024Z"
              fill="#E85E5E"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M82.4506 120.765L87.2592 131.263L93.9466 121.849L82.4506 120.765ZM154.775 170.917L90.3668 125.162L89.2085 126.792L153.617 172.548L154.775 170.917Z"
              fill="#E85E5E"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M172 118L162 112.226V123.774L172 118ZM84 119H163V117H84V119Z"
              fill="#E85E5E"
            ></path>
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M102.234 174.283L113.7 172.918L106.785 163.67L102.234 174.283ZM172.116 120.778L108.843 168.092L110.04 169.694L173.313 122.38L172.116 120.778Z"
              fill="#E85E5E"
            ></path>
          </svg>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-dark text-2xl font-semibold">대운수 : 7(을묘)</h2>
        <p className="text-dark">좌우로 슬라이드해서 더 볼 수 있어요.</p>
        <Table2></Table2>
        <Table2></Table2>
        <Table2></Table2>
        <Table2></Table2>
      </div>
    </Main>
  );
}
