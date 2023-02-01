// Material Dashboard 2 React Examples
import DataTable from "pages/make/Tables/DataTable";
// import { useState } from "react";

// [Import - React-Redux]
import { useSelector, useDispatch } from "react-redux";

// [Import - Redux-action] redux-action 함수
import { actEditCardNo } from "redux/actions/makeCardAction";

function MakeCardList() {
  // Data - global
  const { cardList } = useSelector((state) => state.makeReducer);

  // Data - local
  const columnList = [
    { Header: "아이디", accessor: "userId", width: "10%" },
    { Header: "제목", accessor: "feedTitle" },
    { Header: "유형", accessor: "cardType", width: "20%" },
  ];

  // ================= Function =====================
  const dispatch = useDispatch();

  // function 1 - 수정할 카드 click 시, 선택된 카드 store - card edlit number update
  const handleEdit = (item) => {
    // 클릭한 card의 cardList 인덱스 확인
    for (let i = 0; i < cardList.length; i += 1) {
      if (cardList[i].cardno === item.cardno) {
        // data store - edit card number 업데이트 하기
        const patEditCardNo = actEditCardNo(i);
        dispatch(patEditCardNo);
      }
    }
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
