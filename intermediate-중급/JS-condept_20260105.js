/**
 * 객체 복사, 병합과 Object.assign
 * : 객체가 할당된 변수를 복사하면 동일한 객체에 대한 참조 값이 나나 더 만들어지는 것
 * Object.assign(dest, [str1, str2, str3...])
 */
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }

/** 중첩 객체 복사 */
let user1 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, 같은 객체입니다.

// user와 clone는 sizes를 공유합니다.
user.sizes.width++;       // 한 객체에서 프로퍼티를 변경합니다.
alert(clone.sizes.width); // 51, 다른 객체에서 변경 사항을 확인할 수 있습니다.

/** 요약
 * : 객체는 참조에 의해 할당되고 복사 됨
 *   객체에 할당된 변수를 복사하거나 함수의 인자로 넘길 땐 객체가 아닌 객체의 참조로 복사 된다.
 *   그리고 복사된 참조를 이용한 몬드 작업은 동일한 객체를 대상으로 이루어진다.
 *   얕은 복사 : Object.assign
 *   깊은 복사 : _.cloneDeep(obj)
 */



/** new 연산자와 생서자 함수
 * : 객체 리터럴(...)을 사용하면 객체를 쉽게 만들 수 있다.
 * new 연산자와 생성자 함수를 사용하면 유사한 객체 여러 개를 만들 수 있다.
 * 
 * 생성자 함수
 * 1. 함수 이름의 첫 글자는 대문자로 시작
 * 2. 반드시 'new'연산자를 붙여 실행  
 */
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user2 = new User("보라");

alert(user2.name); // 보라
alert(user2.isAdmin); // false
// 1. 빈 객체를 만들어 this에 할당
// 2. 함수 부문을 실행. this에 새로운 프로퍼티를 추가해 this를 수정
// 3. this 반환

/** new function() {...} 
 * 재사용할 필요가 없는 복잡한 객체를 만들 때, 많은 양의 코드가 필요할 때
 * 익명 생성자 함수로 감싸주는 방식을 사용
*/
let user3 = new function() {
  this.name = "John";
  this.isAdmin = false;

  // 사용자 객체를 만들기 위한 여러 코드.
  // 지역 변수, 복잡한 로직, 구문 등의
  // 다양한 코드가 여기에 들어갑니다.
};
/** 위 생성자 함수는 익명 함수이기 때문에 어디에도 저장되지 않는다.
 * 단 한번만 호출할 목적으로 만들기 때문에 재사용이 불가능하다.
 * 이렇게 익명 생성자 함수를 이용하면 재사용은 막으면서 코드를 캡슐화할 수 있다
 */


// new.target과 생성자 함수
// 일반적인 방법으로 함수를 호출했다면 new.target은 undefined를 반환
// 반면 new와 함께 호출한 경우에 new.target은 함수 자체를 반환한다.
function User(name) {
  if (!new.target) { // new 없이 호출해도
    return new User(name); // new를 붙여줍니다.
  }
  this.name = name;
}

let bora = User("보라"); // 'new User'를 쓴 것처럼 바꿔줍니다.
alert(bora.name); // 보라
/** new가 붙어있으면 새로운 객체를 만든다는 걸 누구나 알 수 있기 때문 new를 생략해서 객체를 만드는 것은 정말 필요한 경우에만 사용하고 남발하지 않는다. */


/** 생성자와 return문
 * 생성자 함수에는 보통 return문이 없다.
 * 반환해야 할 것들은 모두 this에 저장되고, this는 자동으로 반환되기 때문에 반환문을 명시적으로 써 줄 필요 없다.
 * - 객체를 return 한다면 this 대신 객체가 반환
 * - 원시형을 return 한다면 return문이 무시된다.
 * return 뒤에 객체가 오면 생성자 함수는 해당 객체를 반환해주고, 이 외의 경우는 this가 반환
 */
function BigUser() {
  this.name = "원숭이";
  return { name: "고릴라" };  // <-- this가 아닌 새로운 객체를 반환함
}
alert( new BigUser().name );  // 고릴라



/** 생성자 내 메서드
 * 생성자 함수를 사용하면 매개변수를 이용해 객체 내부를 자유롭게 구성할 수 있음
 */
function User(name) {
  this.name = name;
  this.sayHi = function() {
    alert( "제 이름은 " + this.name + "입니다." );
  };
}
let bora1 = new User("이보라");
bora.sayHi(); // 제 이름은 이보라입니다.


/** 요약
 * - 생성자 함수는 일반 함수이다. 다만, 일반 함수와 구분하기 위해 함수 이름 첫 글자를 대문자로 사용
 * - 생성자 함수는 반드시 new 연산자와 함께 호출한다.
 *   new와 함계 호출하면 내부에서 this가 임시적으로 만들어지고, 마지막엔 this가 반환
 */