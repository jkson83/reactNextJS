// 카드정보 출력
import { useContext, useState } from 'react';
import {CardContext} from './CardContext';
import WritePage from './writePage';
import Button from '@/components/Button';

export default function InfoArea({onClose}) {
  const { list,  selectedId, deleteCard } = useContext(CardContext); //선택된 카드 컴포넌트
  let tabTitle = "카드정보";
  const selectedItem = list.find(item => item.id === selectedId);
  const [mode, setMode] = useState('view'); //'view' || 'write'
  
  //입력
  if (mode === 'write') {
    return (
      <WritePage
        initialData={null}
        onClose={() => setMode('view')}
      />
    );
  }

  //수정
  if (mode === 'edit' && selectedItem) {
    return (
      <WritePage
        initialData={selectedItem}
        onClose={() => setMode('view')}
      />
    );
  }

//  const onClose = () => { onClose(); };

  return(
    <div className="info-area">
      <h1>{tabTitle}</h1>
      <div className="btn-area">
      <button onClick={() => setMode('write')}>입력</button>
        {selectedItem && (
          <>
            <button onClick={() => setMode('edit')}>수정</button>
            <button onClick={() => deleteCard(selectedId)}>삭제</button>
            {/* <Button action="cancel" onAction = {onClose} /> */}
          </>
        )}
      </div>
      <hr />
      {selectedItem ? (
        <ul>
          <li>사진이름 : {selectedItem.name}</li>
          <li>파일명 : {selectedItem.src}</li>
          <li>좋아요 : {selectedItem.like ? '♥' : '♡'}</li>
        </ul>
      ) : (
        <p>카드를 선택하세요.</p>
      )}
    </div>
  );
};