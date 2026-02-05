'use client';
//Context 그대로 사용용
import { useContext, useEffect, useState } from 'react';
import { CardContext } from './CardContext';
import Button from '@/components/Button';

export default function WritePage({initialData, onClose}){
  //const {addCard} = useContext(CardContext);
  const {saveCard} = useContext(CardContext);

  const [form, setForm]= useState({
    id: null,
    name:'',
    src:'',
    like:false,
  });

  //수정 모드일 경우 form 초기화
  useEffect(() => {
      if (initialData){
        setForm(initialData);
      }
  }, [initialData]);

  const handleChange = (e) => {
      const {name, value} =  e.target;
      setForm(prev => ({
        ...prev, 
        [name]:value}));
  };

  const handleSave = () => {
      saveCard(form);
      onClose();
  }

  // const handleSubmit = () => {
  //     addCard({
  //         ...form,
  //         id:Date.now(),
  //     });
  //     onClose(); //다시 InfoArea로..
  // }
  return(
    <div className="wirte-area">
      <h2>{form.id ? '카드 수정' : '카드 입력'}</h2>
      <ul>
        <li>이름 :
          <input type="text" 
          name="name"
          value={form.name}
          onChange={handleChange}/>
        </li>
        <li>
          이미지경로 :
          <input type="text" 
            name="src" 
            value={form.src} 
            onChange={handleChange} />
        </li>
      </ul>
      <div className="btn-area">
        <Button action={form.id ? "edit" : "save"} onAction={handleSave} />
        <Button action="cancel" onAction={onClose} />
      </div>
    </div>
  );
}
