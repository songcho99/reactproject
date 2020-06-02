import React, {useState} from 'react';

const Counter = () => {
    //클래스 형태의 stat영역과 같다
    //useState(0) 은 value값을 0으로 초기화
    const [value, setValue]=useState(0);
    return (
        <div>
            <p>
                현재 카운트 값은 {value} 입니다.
            </p>
            <button type='button' onClick={()=>setValue(value+1)}>증가</button>
            <button type='button' onClick={()=>setValue(value-1)}>감소</button>
        </div>
    );
};

export default Counter;