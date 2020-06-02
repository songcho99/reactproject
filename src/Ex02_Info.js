import React, { useState, useEffect } from 'react';

const Ex02_Info = () => {
    const [name,setName]=useState('');
    const [nickname,setNickname]=useState('');

    useEffect(()=>{
        console.log('렌더링 되었습니다.');
        console.log(name,nickname);
    });
    //키보드로 입력한 값 name에 넣어주기
    const onChangeName=e=>{
        setName(e.target.value);
    }
    //키보드로 입력한 값을 nickname에 넣어준다
    const onChangeNickname=e=>{
        setNickname(e.target.value);
    }
    return (
        <div>
            <h4>이름 입력</h4>
            <input type='text' value={name} onChange={onChangeName}/>
            <h4>닉네임 입력</h4>
            <input type='text' value={nickname} onChange={onChangeNickname}/>
            <hr/>
            <h2>입력한 이름과 닉네임 출력</h2>
            name:{name}<br/>
            nickname:{nickname}
        </div>
    );
};

export default Ex02_Info;