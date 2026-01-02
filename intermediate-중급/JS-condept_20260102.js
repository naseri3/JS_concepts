/* 형변환
    : 함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환
    alert 전달받은 값의 자료형과 관계없이 이를 문자열로 자동 변환하여 보여주는 것이나, 수학 관련 연산자가 전달받은 값을 숫자로 변환하는 경우가 형 변환의 대표적인 예시다.
*/

// 문자형 변환
// String(value) 함수를 호출해 전달받은 값을 문자열로 변환
let value = true;
alert(typeof value);                // boolean
value = String(value);              // 변수 value엔 문자열 "true"가 저장됩니다.
alert(typeof value);                // string

// false는 문자열 "false"로, null은 문자열 "null"로  변환되는 것과 같이,
// 문자형으로의 변환은 대부분 예측 가능한 방식으로 일어남


// 숫자형 변환
// Number(value) 함수를 사용하면 주어진 값(value)을 숫자형으로 명시해서 변환할 수 있습니다.
let str = "123";
alert(typeof str);              // string
let num = Number(str);          // 문자열 "123"이 숫자 123으로 변환됩니다.
alert(typeof num);              // number

// null과 undefined는 숫자형으로 변환 시 결과가 다르다는 점에 유의
// nill은 0이 되고 undefined는 NaN이 된다.


// 블린형 변환
// Boolean(value)를 호출하면 명시적으로 블리언으로의 형 변환을 수행할 수 있음
// 숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 "비어있다고" 느껴지는 값들은 false가 된다. 그 외의 값은 true로 변환
alert( Boolean(1) ); // 숫자 1(true)
alert( Boolean(0) ); // 숫자 0(false)
alert( Boolean("hello") ); // 문자열(true)
alert( Boolean("") ); // 빈 문자열(false)





// unllish 병합 연산자 ??
// 값1이 null 또는 undefined 일 때만 기본값 사용
// ??       기본값      null, undefined
// nullish 병합 연산자 ??를 사용하면 짧은 문법으로 여러 피연산자 중 그 값이 '확정되어 있는' 변수를 찾을 수 있음.
let firstName = null;
let lastName = null;
let nickName = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자
alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); // 바이올렛

// '??'와 '||'의 차이
/*
    ||는 첫 번째 truthy 값을 반환합니다.
    ??는 첫 번째 정의된(defined) 값을 반환합니다.
*/
let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0
// nullish 병합 연산자 ??를 사용하면 피연산자 중 ‘값이 할당된’ 변수를 빠르게 찾을 수 있습니다.
// ??의 연산자 우선순위는 대다수의 연산자보다 낮고 ?와 = 보다는 높습니다.
// 괄호 없이 ??를 ||나 &&와 함께 사용하는 것은 금지되어있습니다.