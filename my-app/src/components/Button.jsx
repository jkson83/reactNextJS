'use client';

export default function Button({ action, onAction }) { 
  console.log(action);
  let title = "";
  let className = "";

  switch (action) { 
    case "save":
      title = "저장";
      className = "btn";
      break;
    case "edit":
      title = "수정";
      className = "btn";
      break;
    case "delete":
      title = "삭제";
      className = "btn";
      break;
    case "cancel":
      title = "취소";
      className = "btn";
      break;
    default:
      return null;
  }

  return (
    <button className={className} onClick= {onAction}> { title }</button>
  );
};
