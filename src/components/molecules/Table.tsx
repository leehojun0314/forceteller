import { Grid } from "@mui/material";
import style from "@/assets/css/table.module.css";
import React from "react";
function ItemContainer({
  children,
  addClass = "",
}: React.PropsWithChildren<{ addClass?: string }>) {
  return (
    <Grid container item className={"flex items-center " + addClass}>
      {children}
    </Grid>
  );
}

function TitleCol({ children }: React.PropsWithChildren) {
  return (
    <Grid item className="flex-grow text-center">
      {children}
    </Grid>
  );
}
function TitleRow({ children }: React.PropsWithChildren) {
  return (
    <Grid item className="text-center" style={{ flex: 1 }}>
      {children}
    </Grid>
  );
}
function ItemBig({ children }: React.PropsWithChildren) {
  return (
    <Grid
      item
      className="min-h-12 w-6 flex-grow border-collapse border bg-white text-center text-xl"
      style={{ lineHeight: "3rem", marginTop: -1, marginLeft: -1 }}
    >
      {children}
    </Grid>
  );
}
function Item({ children }: React.PropsWithChildren) {
  return (
    <Grid
      item
      className="min-h-6 w-6 flex-grow border-collapse border bg-white text-center"
      style={{ lineHeight: "1.5rem", marginTop: -1, marginLeft: -1 }}
    >
      {children}
    </Grid>
  );
}
const TableGrid = () => {
  return (
    <Grid container className={style.table}>
      <ItemContainer addClass="mb-2">
        <Grid item style={{ flex: 1 }}></Grid>
        <TitleCol>생시</TitleCol>
        <TitleCol>생일</TitleCol>
        <TitleCol>생월</TitleCol>
        <TitleCol>생년</TitleCol>
      </ItemContainer>
      <ItemContainer>
        <TitleRow>천간</TitleRow>
        <ItemBig>신辛</ItemBig>
        <ItemBig>경庚</ItemBig>
        <ItemBig>을乙</ItemBig>
        <ItemBig>무戊</ItemBig>
      </ItemContainer>
      <ItemContainer>
        <TitleRow>십성</TitleRow>
        <Item>겁재</Item>
        <Item>비견</Item>
        <Item>정재</Item>
        <Item>편인</Item>
      </ItemContainer>
      <ItemContainer>
        <TitleRow>천간</TitleRow>
        <ItemBig>신辛</ItemBig>
        <ItemBig>경庚</ItemBig>
        <ItemBig>을乙</ItemBig>
        <ItemBig>무戊</ItemBig>
      </ItemContainer>
      <ItemContainer>
        <TitleRow>십성</TitleRow>
        <Item>겁재</Item>
        <Item>비견</Item>
        <Item>정재</Item>
        <Item>편인</Item>
      </ItemContainer>
      <ItemContainer>
        <TitleRow>십성</TitleRow>
        <Item>겁재</Item>
        <Item>비견</Item>
        <Item>정재</Item>
        <Item>편인</Item>
      </ItemContainer>
      <ItemContainer>
        <TitleRow>십성</TitleRow>
        <Item>겁재</Item>
        <Item>비견</Item>
        <Item>정재</Item>
        <Item>편인</Item>
      </ItemContainer>
    </Grid>
  );
};
export default TableGrid;
