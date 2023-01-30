// Material Dashboard 2 React Examples
import DataTable from "pages/make/Tables/DataTable";
// import { useState } from "react";

// [Import - React-Redux]
import { useSelector } from "react-redux";

// [Import - Redux-action] redux-action 함수
// import { actAddCard } from "redux/actions/makeCardAction";

function MakeCardList() {
  // const dispatch = useDispatch();

  const { cardList, cardNo } = useSelector((state) => state.makeReducer);

  const columnList = [
    { Header: "번호", accessor: "userId", width: "5%" },
    { Header: "제목", accessor: "feedTitle" },
    { Header: "유형", accessor: "cardType", width: "20%" },
  ];

  // const rowList = [
  //   {
  //     id: 1,
  //     name: "Hanny Baniard",
  //     position: "Data Coordiator",
  //     office: "Baorixile",
  //     age: 42,
  //     startDate: "4/11/2021",
  //     salary: "$474,978",
  //   },
  //   {
  //     id: 2,
  //     name: "Lara Puleque",
  //     position: "Payment Adjustment Coordinator",
  //     office: "Cijangkar",
  //     age: 47,
  //     startDate: "8/2/2021",
  //     salary: "$387,287",
  //   },
  //   {
  //     id: 3,
  //     name: "Torie Repper",
  //     position: "Administrative Officer",
  //     office: "Montpellier",
  //     age: 25,
  //     startDate: "4/21/2021",
  //     salary: "$94,780",
  //   },
  //   {
  //     id: 4,
  //     name: "Nat Gair",
  //     position: "Help Desk Technician",
  //     office: "Imider",
  //     age: 57,
  //     startDate: "12/6/2020",
  //     salary: "$179,177",
  //   },
  //   {
  //     id: 5,
  //     name: "Maggi Slowan",
  //     position: "Help Desk Technician",
  //     office: "Jaunpils",
  //     age: 56,
  //     startDate: "11/7/2020",
  //     salary: "$440,874",
  //   },
  //   {
  //     id: 6,
  //     name: "Marleah Snipe",
  //     position: "Account Representative II",
  //     office: "Orekhovo-Borisovo Severnoye",
  //     age: 31,
  //     startDate: "7/18/2021",
  //     salary: "$404,983",
  //   },
  //   {
  //     id: 7,
  //     name: "Georgia Danbury",
  //     position: "Professor",
  //     office: "Gniezno",
  //     age: 50,
  //     startDate: "10/1/2020",
  //     salary: "$346,576",
  //   },
  //   {
  //     id: 8,
  //     name: "Bev Castan",
  //     position: "Design Engineer",
  //     office: "Acharnés",
  //     age: 19,
  //     startDate: "1/14/2021",
  //     salary: "$445,171",
  //   },
  //   {
  //     id: 9,
  //     name: "Reggi Westney",
  //     position: "Financial Advisor",
  //     office: "Piuí",
  //     age: 56,
  //     startDate: "3/21/2021",
  //     salary: "$441,569",
  //   },
  //   {
  //     id: 10,
  //     name: "Bartholomeus Prosh",
  //     position: "Project Manager",
  //     office: "Kelīshād va Sūdarjān",
  //     age: 28,
  //     startDate: "5/27/2021",
  //     salary: "$336,238",
  //   },
  //   {
  //     id: 11,
  //     name: "Sheffy Feehely",
  //     position: "Software Consultant",
  //     office: "Ndibène Dahra",
  //     age: 27,
  //     startDate: "3/23/2021",
  //     salary: "$473,391",
  //   },
  //   {
  //     id: 12,
  //     name: "Euphemia Chastelain",
  //     position: "Engineer IV",
  //     office: "Little Baguio",
  //     age: 63,
  //     startDate: "5/1/2021",
  //     salary: "$339,489",
  //   },
  // ];

  const handleEdit = (item) => {
    console.log(item);
    console.log(cardNo);
  };

  return (
    <div>
      <DataTable
        table={{
          columns: columnList,
          rows: cardList,
        }}
        handleEdit={handleEdit}
      />
      ;
    </div>
  );
}

export default MakeCardList;
