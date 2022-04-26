// var alertPopupText = "Not Found Page"
// var alertPopupText_1 = "Loaded Page"
// alert(alertPopupText)
// alert(alertPopupText_1)

/**
 * Some built-in function
 * 1. Alert --> show alert pop up
 * 2. Console --> is object that has a lot of method in it
 * 3. Confirm --> show confirm popup
 * 4. Prompt ---> is combine between confirm and alert + has input for user enter
 * 5. Set timeout ----> After timeout, call method 
 * 6. Set interval ----> Every interval , method get called
 */

//--------------------------------------------------------------------------------
/**
 * Data types in JS
 * 1. Primitive Type
 * - Number
 * - String
 * - Boolean
 * - Undefined
 * - Null
 * - Symbol
 * 2. Complex Data
 * - Function
 * - Object include object type(2.1) and Array type(2.2)
 */
/*
// Complex Data
//1. Function : myFunction is a Complex Data
var myFunction = function(){
    alert(alertPopupText)
}

// 2.1 Object type

var listColor = {
    red: "#ddfgfgfe",
    blue: "#rgeorhgesr",
    green: "#savfbf",
    yellow: "#greht"
}
console.log(typeof listColor)
//2.2 Array type

var listObjMenu = ["Hello", 1, "World"]

console.log("listObjMenu: ", listObjMenu)
console.log(typeof listObjMenu)

*/
//=========================================================================
/** Truthy & Falsy
 * Truthy: Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị true thì ta gọi giá trị đó là Truthy.
 * Falsy: Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.
 * Trong Javascript có 6 giá trị sau được coi là Falsy:
 * false
 * 0 (số không)
 * '' or "" (chuỗi rỗng)
 * null
 * undefined
 * NaN
 */
//---------------------------------------------------------------------------------

/** String in JS
 * Template String ES6 
 * Method in String
 */

/*
var one = 1
var consoleText = "Hello World"
var position = consoleText.indexOf("H")
console.log("Position: " + position)
console.log(`Template String one: ${one}`)
console.log(`Print text: ${consoleText}`)
*/
//------------------------------------------------------------------------------------

/** Array in JS and work with array in JS
 * Create array has two way
 * Methods in array
 * 1. push 
 * 2. pop
 * 3. shift 
 * 4. unshift
 * 5. toString
 * 6. join
 * 7. splice
 * 8. slicing
 * 9. concat
 */

/**

var names = [
    "Long",
    "Hoang",
    "Software",
    "Engineer"
]

console.log(names.toString())
console.log(names)
console.log(names.join("/ "))
console.log('Using template string names: ' + names)
console.log(names.slice(-1, 0))
console.log("Using template string names: " + names)

namessplice = names.splice(1, 1, 'Hust')
console.log(names)
*/

//-------------------------------------------------------------------------------

/**
 * 1.Argument Function in JS
 * Argument Instance in function JS ?
 * Introduction to For of loops
 * 2. Return in Function
 */

/*
function write_dlt_log() {
    console.log(arguments)
    var myContent = ''

    for(var arg of arguments){
        myContent += `${arg} - `
    }
    console.log(myContent.slice(0, myContent.length - 2))
}

//write_dlt_log("Long", "Hoang", "Hust", 1,2,3)
var isConfirm = confirm("Yes Or No")
console.log(isConfirm)
*/

/** More Understanding Function
 * 1. Duplicate function in JS ---> nó sẽ overwrite lại function trước đó và chỉ thực thi function đc khai báo sau,
 * hàm trùng tên này sẽ hoạt động không khác nhau kể cả 2 hàm có khác nhau về tham số truyền vào.
 * 2. Declare variable in Function ---> biến đc khai báo trong hàm chỉ được sử dụng nội bộ trong hàm giống biến local
 * 3. Definition function in function ---> hoàn toàn sử dụng được
 */

/**
// 1. Duplicate function in JS
function printOutConsole(message) {
    console.log("printOutConsole")
}

function printOutConsole(content, _content1_) {
    console.log("printOutConsole 1")
}

printOutConsole(1)

// 2. Declare variable in Function
function printOutConsole_Other() {
    var local_var = "Hello String"
    console.log("printOutConsole_Other: " + `${local_var}`)
}

printOutConsole_Other()

// 3. Definition function in function

function printOutConsole_Other_1() {
    console.log("Declaration function in function")
    function showAlert() {
        alert("Message Define")
    }
}
*/
//------------------------------------------------------------------------------------
/** Types of function
 * 1. Declaration function
 * 2. Expression function
 * 3. Arrow function
 */

/**
 * Differences between Declaration function and Expression function is Declaration function can be called before definition it
 */

/*
// 1. Declaration function
myFunc() // Hosting feature
function myFunc() {
    console.log("This is my Function")
}

// 2. Expression function

var pFunc = function() {
    console.log("This is my Function2")
}

myFunc()
pFunc()
*/

//------------------------------------------------------------------------------------


/** Polyfill?
 * Definition: A polyfill is a piece of code (usually JavaScript on the Web)
 * used to provide modern functionality on older browsers that do not natively support it.
 */

// Code example
/*
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';

        if (search instanceof RegExp) {
            throw TypeError('first argument must not be a RegExp');
        }
        if (start === undefined) { start = 0; }
        return this.indexOf(search, start) !== -1;
    };
}
*/

//--------------------------------------------------------------------------------------

/** Object Understanding deeply in JS
 * 1. Convention: 
 * If key has value is function --> is called like as method
 * and others --> is called like as property
 */

/*
var addressList = ['Phuong Trung-TO', 'Do Duc Duc- Cau Giay', 'Ba trieu-Hai Ba Trung']
var heightKey = 'height'


var myInfo = {
    name: 'Long Hoang',
    age: 25,
    address: addressList[0],
    [heightKey] : 1.65,
    getName: function() {
        return this.name
    }
}

// Get value has many ways
console.log(myInfo[heightKey])
console.log(myInfo.getName())
console.log(myInfo['name'])
console.log(myInfo.name)
// Add new one pair key:value
myInfo.phone = '0356556997'
myInfo["address2"] = addressList[1]
myInfo[addressList[0]] = addressList[0]

console.log("My Info.phone", myInfo.phone)
console.log("My Info[\"address2\"]", myInfo["address2"])
console.log("myInfo[addressList[0]] ", myInfo[addressList[0]])
console.log("My Info: ", myInfo)

// Delete a pair key:value
// delete myInfo[heightKey]
console.log('myInfo: remove height-key', myInfo)

delete myInfo[addressList[0]]
console.log('myInfo: remove addressList[0]-key', myInfo)

delete myInfo["phone"]
console.log("Remove phone-key:", myInfo)
*/

//==========================================================================

/** Object Constructor
 * Có thể hiểu như một bản mô tả, bản thiết kế chung cho một nhóm đối tượng nào đó. 
 * Tất cả các thuộc tính và phương thức trong bản thiết kế này đếu sẽ có trong đối 
 * tượng 
 */

/*
function User(firstName, lastName, avatar) {
    // từ khoá this sẽ nói cho Object Constructor biết rằng sau này đối tượng
    // được khởi tạo từ Object Constructor thì sẽ có thuộc tính đó và được gán 
    // gía trị bằng đối số truyền vào khi khởi tạo Object Constructor
    this.firstName = firstName
    this.lastName = lastName
    this.avatar = avatar
    this.getName = function() {
        return `${this.firstName} ${this.lastName}` // this keyword in expression function 
                                                    // là đối tượng gọi đến method, nó có ý nghĩ với từ khoá 
                                                    // this ở trong object constructor bên trên
    }
    console.log("This is Object Constructor")
}

var author = new User('Long', 'Hoang', "Star")
var user = new User('Robot', 'Machine', 'Gold')

author.title = 'Toi di code dao'
user.comment = 'Xao cho vua thoi'
author.getAvatar = function() {
    return `${this.avatar}`
}
console.log(author.getAvatar())


// author.constructor('H', 'K', 'G')
// console.log(author.firstName)
console.log(author)
console.log(user)
 
delete author.title
console.log(author)
*/
//============================================================================
/** Object Prototype - Basic 
 * 1. What is Prototype? Prototype được sử dụng để định nghĩa thêm 1 thuôc tính hay 1 method cho 
 * một đối tượng trong JS chẳng hạn như Array Object, String Ọbject, etc or có thể thêm cho Object Contructor
 * Phân biệt cách thêm thuộc tính hay method trực tiếp so với Prototype
 * Nếu thêm thuộc tính hay method trực tiếp ví dụ: 
 * var user = new User('Robot', 'Machine', 'Gold')
 * user.comment = 'Xao cho vua thoi'
 * thì chỉ có đối tượng đó có thuộc tính or method đó 
 * Còn khi dùng prototype thì tất cả các đối tượng sẽ có thuộc tính or method đó
 * 2. How to use Prototype
 */
/*
User.prototype.className = 'LClass'

var user1 = new User('Nguyen', 'Van', 'Flower')
console.log(user1.className)

*/

//============================================================================
/** Date Object
 * There are many methods that is used in date object
 * To read detail these method visit 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date?retiredLocale=vi
 */
/*
var date = new Date()
console.log(date.getUTCDate())
*/

//=============================================================================
/** Math Object
 *  Math.PI --> return pi number
 *  Math.abs()
 *  Math.round() 
 *  Math.ceil()
 *  Math.floor()
 *  Math.random()
 *  Math.min()
 *  Math.max()
 */



//
/** For/in and for/of loop
 * For/in: thường đc dùng để lấy index trong mảng or key của object
 * For/of: thường được dùng để lấy phần tử trong mangr or từng chữ cái của một chuỗi 
 * nó khá giống với for eạch trong các ngôn ngữ có sd for each. Vì vậy nó ko thể sử dụng 
 * trực tiếp cho Object mà chỉ sử dụng đc gián tiếp 
 */

/*
var myInfo = {
    'age': 18,
    'name': 'HoangLong',
    'address': 'PhuongTrung-TO'

}

var myArr = [
    'A',
    'B',
    'C',
    'D',
    'E'
]

var myString = 'LongHust'

// For/in
for(var key in myInfo) {
    console.log(key)
}

for(var idx in myArr) {
    console.log(idx)
}

for(var idx_char in myString) {
    console.log(idx_char)
}
//For of
for (var element of myArr) {
    console.log(element)
}

for(var char of myString) {
    console.log(char)
}

// Error if using for/of for object type
// for(var value of myInfo) {
//     console.log(value)
// }

*/
//=========================================================================
/** Recusive
 * 1. Xác định được điểm dừng
 * 2. Logic Handle
 */






//=========================================================================
/** Map& reduce method in array JS
 * Array methods:
 * forEach() --> duyệt qua phần tử mảng
 * every() --> dùng để kiểm tra xem tất cả các phần tử của mảng
 *             có thoả mãn một điều kiện nào đó không
 * some() --> dùng để kiểm tra xem có 1 trong các phần tử nào của 
 *            mảng có thoả mãn điều kiện nào đó không 
 * find() --> tìm kiếm duy nhất một phần tử nào đó trong mảng 
 * filter() --> tìm kiếm nhiều phần tử thoả mãn đk nào đó trong mảng
 * map() --> dùng để thay đổi element của một array
 * reduce()
 */

var courses = [
    {
        id: 0,
        name: 'Javascript',
        coin: 0
    },
    {
        id: 1,
        name: 'HTML,CSS',
        coin: 0
    },
    {
        id: 2,
        name: "C++",
        coin: 0
    },
    {
        id: 3,
        name: "Python",
        coin: 0
    },
    {
        id: 4,
        name: "Golang",
        coin: 0
    },
    {
        id: 5,
        name: "Rust",
        coin: 0
    },
    {
        id: 6,
        name: "Ruby",
        coin: 0
    }
]
// // For example for these methods
// // 1. forEach
// courses.forEach(function(course, idx) {
//     console.log(arguments)
//     console.log(course.name)
// })
// // 2. every
// var isFree = courses.every(function(course, idx) {
//     return course.coin === 0
// })
// console.log(isFree)
// // 3. some
// var resultAbsoluteIdx = courses.some(function(course, idx) {
//     return course.id === 6
// })
// console.log(resultAbsoluteIdx)
// // 4. map
// var newCourses = courses.map(function(course, idx, originArr) {
//     return {
//         id: course.id,
//         name: `Khoa hoc ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//         originArr: originArr
//     }
// }) 
// console.log(newCourses)
// // 5. reduce

// var i = 0;
// var totalCoin = courses.reduce(function(accumulator, currentValue, currentIdx, originalArr) {
//     i++
//     console.table({
//         'Luot chay ': i,
//         'Bien accumulator: ': accumulator
//     })
//     console.log(currentValue)
//     console.log(`CurrentValue: ${currentValue}, CurrentIdx: ${currentIdx}`)
//     return accumulator + currentValue.coin

// }, 0) // 0 --> Initial value

// console.log(totalCoin)

// Flat - 'Làm phẳng mảng từ Depth array' - 'Mảng sâu'

// var depthArr = [1, 2, [3, 4], 5, 6, [7, 8, 9]]

// // Method1:
// var flatArr = []
// for(var element of depthArr) {
//     flatArr = flatArr.concat(element)
// }
// // Method2: Using reduce

// flatArr = depthArr.reduce(function(tmpArr,itemArr) {
//     return tmpArr.concat(itemArr)
// }, [])

// console.log(flatArr)

// Lấy ra các khoá học đưa vào mảng mới 
var topics = [
    {
        topic: 'Front-end',
        courses: [
            {
                id: 1,
                title: 'HTML,CSS'
            },
            {
                id: 2,
                title: "JS"
            }
        ]
    },
    {
        topic: 'Back-end',
        courses: [
            {
                id: 3,
                title: "Python"
            },
            {
                id: 4,
                title: "C++"
            }
        ]
    }
]

// var newCourses = topics.reduce(function(saveCourse, topic) {
//     return saveCourse.concat(topic.courses)
// }, [])

// console.log(newCourses)

// var titleList = topics.reduce(function(saveCourse, topic) {
//     var getTitle = function(saveCourse, topic) {
//         for (var course of topic.courses) {
//             saveCourse = saveCourse.concat(course.title)
//         }
//         return saveCourse
//     }
//     return getTitle(saveCourse, topic)
    
// }, [])

// console.log(titleList)

//=========================================================================================

/** Phương thức reduce có logic như thế nào
 *  Implement self-reduce method 
 */
/*
var arr = [1,2,3,4,5]

if(!Array.prototype.reduce_2) {
    Array.prototype.reduce_2 = function(callBackFn, initialValue) {
        var idx = 0
        if(initialValue === undefined) {
            initialValue = this[0]
            idx = 1

        }
        
        for(; idx < this.length; idx++) {
            initialValue = callBackFn(initialValue, this[idx], idx, this)
        }
        return initialValue

    }
}

var totalCoin = arr.reduce_2(function(total, element) {
    return total + element
})

console.log(totalCoin)


var newCourses = topics.reduce_2(function(saveCourse, topic) {
    return saveCourse.concat(topic.courses)
}, [])

console.log(newCourses)
*/

//========================================================================================
/** String/Array includes method
 * includes method dùng để kiểm tra phần tử chứa trong string or array hay không trả về true false
 * tuy nhiên không thể dùng includes method để kiểm tra cho mảng các đối tựợng đc 
 */

/*
var courses = [
    {
        id: 0,
        title: "HTML-CSS"
    },
    {
        id: 1,
        title: "PHP"
    }
]

console.log(courses.includes({id}))
*/
//========================================================================================
/** Callback?
 * Definition: 
 * 1. Là hàm
 * 2. Được truyền qua đối số
 * 3. Được gọi lại 
 */

// Exercise for practice callback: Implement self forEach, some, find, every, filter methods
/* 
Array.prototype.forEach2 = function(callbackFn) { 
    var len = this.length
    for(var idx = 0; idx < len; idx++) {
        callbackFn(this[idx], idx, this)
    }
}

topics.forEach2(function(element) {
    console.log(element)
})

Array.prototype.some2 = function(callBackFn) {
    var len = this.length
    var result = false
    for(var idx = 0; idx < len; idx++) {
        if(callBackFn(this[idx], idx, this)){
            return true;
        }
    }
    return result
}

var result = courses.some2(function(element) {
    return element.coin === 7
})
console.log(result)

Array.prototype.every2 = function(callBackFn) {
    var len = this.length
    var result = false
    for(var idx = 0; idx < len; idx++) {
        if(callBackFn(this[idx], idx, this)){
            result = true
        }
        else{
            return false
        }
    }
    return result
}
result = courses.every2(function(element) {
    return element.coin === 0
})

console.log(result)

var listBirthDay = [1,2,3,4,5,6,7,9,10]

Array.prototype.find2 = function(callBackFn) {
    var len = this.length
    for(var idx = 0; idx < len; idx++) {
        if(callBackFn(this[idx], idx, this)){
            return this[idx]
        }
    }
    return undefined
}

var candidate = listBirthDay.find2(function(element) {
    return element > 4
})
console.log(candidate)

Array.prototype.filter2 = function() {

}
*/

//========================================================================================

/** HTML DOM (Document Object Model)
 * HTML Dom gồm 3 thành phần: 
 * 1. Element (Được hiểu là có bao nhiêu thẻ tag thì có bấy nhiêu element)
 * 2. Atribute (Là thuộc tính mở rộng trong thẻ tag)
 * 3. Text (Là text trong thẻ tag nào đó)
 */

// Terminology: 
// Node: được hiểu sẽ là 1 trong 3 thành phần của html dom

// console.log(document)
// document.write("Hihi")

//========================================================================================
// Truy cập Element in HTML Dom
// Truy cập thông qua id, class, tag name, CSS Selector, HTML collection

// var headingNode = document.getElementById('heading')
// console.log({
//     element: headingNode    
// })

// var classAtr = document.getElementsByClassName('heading')

// for (var element of classAtr) {  
//     console.log(element)
// }
// console.log(classAtr)
// var tagH1List = document.getElementsByTagName('h1')

// console.log(tagH1List)

// var cssselector = document.querySelector('.box .heading_2:first-child')
// console.log(cssselector)

// Method1: Get li element through querySelectorAll
// var getElementInBox1 = document.querySelectorAll('.box_1 li')
// console.log(getElementInBox1)
// // Method2: Get li element through querySelectorAll and querySelector
// var boxNode = document.querySelector('.box_1')

// console.log(boxNode)
// console.log(boxNode.querySelectorAll('li'))

//========================================================================================
/** Atribute Node
 * có thể thay đổi, thêm thuộc tính
 * getAttribute --> get value của các attribute trong 1 element node
 * if không có attribute getAttribute trả về null
 */

// var headingElement = document.querySelector('h1')

// headingElement.setAttribute('color', 'red')

//========================================================================================
/** Text Node 
 * Hk 2 thuộc tính innnerText and textContent để lấy ra nội dung của Text Node và set text node trong một element
 * Điểm khác nhau của innnerText và textContent là 
 * innnerText sẽ get nội dung mà bạn thực sự nhìn thấy trên website 
 * còn textContent thì sẽ get ra nội dung Text trong 1 thẻ tag (kể cả dấu cách các thẻ tag con, v..v)
 */

// var headingElement = document.querySelector('h1')
// headingElement.setAttribute('class', 'Heading')


// console.log(headingElement.innerText) //headingElement.innerText --> getter
// console.log(headingElement.textContent)

// headingElement.textContent = 'Ahihi' // setter
// console.log(headingElement.innerText)
// console.log(headingElement.textContent)

//========================================================================================
/** innerHTML vs outerHTML 
 * Thêm một element vào một element 
 * innerHTML có thể dùng để get ra tất cả các thẻ con HTML or set HTML trong 1 element nào đó
 * outerHTML được dùng để get ra chính element đó or thay thế chính element đó bằng element trong outerHTML
 */

// var boxNode = document.querySelector('.box')

// console.log(boxNode.getAttribute('id'))
// console.log([boxNode])
//========================================================================================
/** Node Properties
 * Gồm rất nhiều thuộc tính bao h cần thì tra
 */
//========================================================================================
/** DOM CSS
 * thay đổi thuộc tính CSS qua thuộc tính style
 */
//  boxNode.style.color = 'red'
// console.log(boxNode.style.color)

//========================================================================================
/** ClassList Property
 * trả về object quản lý class atribute cho 1 element nào đó
 * Một số method hay dùng:
 * 1. add --> add class attribute cho element
 * 2. remove --> remove class attribute cho element
 * 3. contains --> kiểm tra xem có tồn tại class attribute nào đó hay không 
 * 4. toggle --> nếu tồn tại class thì remove không có thì add thêm vào 
 */

// var boxNode = document.querySelector('.box')
// console.log(boxNode)
// console.log(boxNode.classList)
// boxNode.classList.add('red')
// setInterval(() => {
//     boxNode.classList.toggle('blue')
// }, 2000);
// setTimeout(function() {
//     boxNode.classList.remove('red')
// }, 3000)
// setTimeout(function() {
//     boxNode.classList.add('blue')
// }, 4000)

//========================================================================================
/** DOM Events and example
 * 1. Attribute events: nhận các event hành động người dùng bằng các atribute 
 * 2. Assign event using the element node
 */

// 1. Attribute event xử lý trực tiếp trong element luôn

// 2. Assign event using the element node

// var h1Node = document.querySelector('h1')

// h1Node.onclick = function handleOnClick() {
//     console.log('onClick: ', this)
// }
// var inputResult
// var inputElement = document.querySelector('input[type=text]')
// var checkBoxElement = document.querySelector('input[type=checkbox]')

// console.log([inputElement])

// inputElement.oninput = function handleOnChange(e) {
//     inputResult = e.target.value
//     console.log(inputResult)
//     if(inputResult === 'HoangLong'){
//         checkBoxElement.checked = true
//     }
// }

// checkBoxElement.onchange = function (e) {
//     console.log(e.target.checked)
// }

//========================================================================================
/** DOM Events
 * 1. preventDefault: loại bỏ hành vi mặc định của trình duyệt trên một đối tượng <1 thẻ HTML>
 * 2. stopPropagation: loại bỏ sự kiện nổi bọt
 */
// 1. PreventDefault
// var aElements = document.getElementsByTagName('a')

// for (var aElement of aElements) {
//     aElement.onclick = function(e) {
//         if(e.target.href !== 'https://fullstack.edu.vn/'){
//             e.preventDefault()
//         }
//     }
// }

// 2.stopPropagation

// var wrapperBtn = document.querySelector('.wrapperBtn')

// wrapperBtn.onclick = function() {
//     console.log('wrapperBtn.onclick')
// }

// var btnElement = wrapperBtn.querySelector('button')

// btnElement.onclick = function(e) {
//     e.stopPropagation()
//     console.log('btnElement.onclick')
// }

//========================================================================================
/**
 * 1. Promise
 *  - Sync
 *  - Async 
 *  - Pain
 *  - lý thuyết cách hoạt động 
 *  - Thực hành, ví dụ 
 */
// Promise có 3 trạng thái là Pendding, FullFill, Reject
// var myPromise = new Promise(
//     // Executor
//     function (resolve, reject) {
//         resolve(123)
//     })

// // tính chất chain

// myPromise
//     .then(function(data) {
//         console.log('then_1', data)
//         return new Promise(function(resolve) {
//             setTimeout(function () {
//                 resolve(456)
//             }, 3000)
//         })
//     })
//     .then(function(data) {
//         console.log('then_2', data)
//     })
//     .catch(function(data) {
//         console.log('Failure!!!', data)
//     })
//     .finally(function() {
//         console.log('Done ^^')
//     })

//========================================================================================
/** Promise Method
 * 1. resolve
 * 2. reject
 * 3. all --> được dùng khi muốn chạy song song các promise mà không phụ thuộc nhau 
 *            và bất động bộ và muốn lấy kết qủa của các promise này để làm 1 việc gì 
 *            đó chung.
 *  Kết quả trả về của  các promise này phải thành công
 */

// var myPromise1 = new Promise(
//     function(resolve) {
//         setTimeout(function() {
//             resolve([1,2])
//         }, 3000)
//     }
// )

// myPromise1
//     .then(function(data1) {
//         console.log(data1)
//     })


// var myPromise2 = new Promise(
//     function (resolve) {
//         setTimeout(function () {
//             resolve([3,4])
//         }, 5000)
//     }
// )

// myPromise2
//     .then(function (data2) {
//         console.log(data2)
//     })

// Promise.all([myPromise1, myPromise2])
//     .then(
//         function(data) {
//             console.log(data[0].concat(data[1]))
//         }
//     )

//========================================================================================
/** Promise Example
 * 
 */
/*
 var users = [
     {
         id: 1,
         name: 'Long Hoang'
     },
     {
         id: 2,
         name: 'Minh Diep'
     },
     {
         id: 3,
         name: 'Thanh Con'
     }
 ]

 var comments = [
     {
         id: 1,
         userId: 1,
         content: 'không thấy có trong ảnh'
     },
     {
         id: 2,
         userId: 2,
         content: 'ban hậu cần làm việc thầm lặng thôi chú'
     }, 
 ]
// Fake API
function getComments() {
    return new Promise(
        function(resolve,reject) {
            setTimeout(
                function(){
                    resolve(comments)
                }
            , 2000)
        }
    )
}

function getUserById(userIds) {
    return new Promise(
        function(resolve, reject) {
            var usersList = users.filter(function(user) {
                return userIds.includes(user.id)
            })
            setTimeout(function() {
                resolve(usersList)
            }, 2000)
        }
    )
}

getComments()
    .then(
        function(comments) {
            var userIdArr = comments.map(function(comment) {
                return comment.userId
            })
            return {
                'userIds' : userIdArr,
                'comments' : comments
            }
        }
    )
    .then(
        function(data) {
            var userIds = data.userIds
            console.log(userIds)
            return getUserById(userIds)
                    .then(function(users) {
                        return {
                            'users' : users,
                            'comments' : data.comments
                        }
                    })
        }
    )
    .then(function(commentBoxData) {
        var comments = commentBoxData.comments
        var users = commentBoxData.users
        // Two ways to render on HTML
        // Method1: Using map method
        // var htmls = comments.map(function(comment) {
        //     var user = users.find(function(user) {
        //         return user.id === comment.userId
        //     })
        //     return `<div>${user.name}: ${comment.content}</div>`
        // })
        // console.log(htmls)
        // var commentList = document.getElementById('comment')
        // commentList.innerHTML = htmls.join(' ')

        // Method2: Using forEach
        var html = '';
        comments.forEach(function(comment) {
            var user = users.find(function(user){
                return user.id === comment.userId
            })
            html += `<div>${user.name} : ${comment.content}</div>`
        })
        var commentList = document.getElementById('comment')
        commentList.innerHTML = html
    })
*/

//========================================================================================
/**
 * Fetch 
 * Definition: fetch() sẽ tạo một request gửi đến server và nhận về dữ liệu mà server trả về
 * thông qua url. 
 */

var postApi = 'https://jsonplaceholder.typicode.com/posts'

// fetch(postApi)
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(data) {
//         var titleBoxs = document.getElementById('titleBox')
        
//         var htmls = data.map(function(item) {
//             return `<div><h2>${item.title}</h2><p>${item.body}</p></div>`
//         })

//         titleBoxs.innerHTML = htmls.join(' ')
//     })
//     .catch(function(err) {
//         console.log(err)
//     })

//========================================================================================
/** JSON server là một lib để tạo ra 1 fake API server như backend làm 
 * Thêm, sửa, xoá, với fetch và rest API 
 */
/*
var courseapi = '  http://localhost:3000/courses'

function start() {
    initHandleEvent()
    handleGetCourses(courseapi)
}

start();
//-- Working with Rest Api --//
function handleGetCourses(courses_api) {
    fetch(courses_api)
        .then(function(response) {
            return response.json()
        })
        .then(handleRenderingHTML)
}

function handleCreateNewCourse(name, description) {
    data = {
        title : name,
        description: description
    }
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch(courseapi, options)
        .then(function(response) {
            return response.json()
        })
        .then(function(newCourse) {
            // Method1 to render HTML using request api again
            //handleGetCourses(courseapi)
            // Method2 handle render html internally
            var contentCourseBox = getElementByQuerySelector('.coursebox').innerHTML

            contentCourseBox += 
            `<li data-id-course = ${newCourse.id}>
            <h2>${newCourse.title}</h2>
            <p>${newCourse.description}</p>
            <button onclick = "handleDeleteCourse(${newCourse.id})">Remove</button>
            <button onclick = "handleOnClickModifyCourse(${newCourse.id}, '${newCourse.title}', '${newCourse.description}')">Modify</button>
            </li>`

            getElementByQuerySelector('.coursebox').innerHTML = contentCourseBox
            initValueInputElement('', '')
        })
}

function handleDeleteCourse(idCourse) 
{
    console.log('handleDeleteCourse')
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    fetch(courseapi + `/${idCourse}`, options)
        .then(function(response) {
            return response.json()
        })
        .then(function (newCourse) {
            // Method1 to render HTML using request api again

            // Method2 using HTML DOM to handle delete course internally
            var query = `li[data-id-course = "${idCourse}"]`
            var courseItem = document.querySelector(String(query))
            courseItem.remove()
        })

}

function handleModifyCourse(title, description) {
    console.log('handleModifyCourse', title, description)
    modifyCourseData.title = title
    modifyCourseData.description = description
    console.log(modifyCourseData)
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(modifyCourseData)
    }

    fetch(courseapi + `/${modifyCourseData.id}`, options)
    .then(function(response) {
        return response.json()
    })
    .then(function (newCourse) {
        // Method1 to render HTML using request api again
        handleGetCourses(courseapi)
        initValueInputElement('', '')
        var buttonElement = document.getElementById('create')
        buttonElement.innerText = 'Create'
        // Method2 using HTML DOM to handle delete course internally
    })
}

//-- End working REST API --//

function handleOnClickModifyCourse(idCourse, titleCourse, descriptionCourse) {
    console.log('handleOnClickModifyCourse', idCourse, titleCourse, descriptionCourse)
    var data = {
        id: idCourse,
        title: titleCourse,
        description: descriptionCourse
    }

    modifyCourseData = data

    initValueInputElement(data.title, data.description)
    var buttonElement = document.getElementById('create')
    buttonElement.innerText = 'Modify'
}

function initValueInputElement(titleValue, descriptionValue) {
    getElementByQuerySelector('input[name = "title"]').value = titleValue
    getElementByQuerySelector('input[name = "description"]').value = descriptionValue
}

function getElementByQuerySelector(cssSelectorItem) {
    return document.querySelector(cssSelectorItem)
}

function handleRenderingHTML(courses) {
    var coursesBlock = getElementByQuerySelector('.coursebox')
    var html = ''

    html = courses.map(function(course) {
        return `<li data-id-course = ${course.id}>
        <h2>${course.title}</h2>
        <p>${course.description}</p>
        <button onclick = "handleDeleteCourse(${course.id})">Remove</button>
        <button onclick = "handleOnClickModifyCourse(${course.id}, '${course.title}', '${course.description}')">Modify</button>
        </li>`
    })

    coursesBlock.innerHTML = html.join(' ')
}

function initHandleEvent() {
    var btnElement = document.querySelector('#create')
    btnElement.addEventListener('click', handleOnClickUpdateCourse)
}

function handleOnClickUpdateCourse() {
    console.log('handleOnClickUpdateCourse')
    var title = getElementByQuerySelector('input[name = "title"]').value
    var description = getElementByQuerySelector('input[name = "description"]').value
    if (getElementByQuerySelector('#create').innerText === "Create") {
        console.log('Create Course')
        handleCreateNewCourse(title, description)
    }
    else{
        console.log('Modify Course')
        handleModifyCourse(title, description)
    }
}
*/

//========================================================================================
/** ECMAScript 6 - ES6
 * 1. Let,const --> OK
 * 2. Template Literals --> OK
 * 3. Multi-line String --> OK
 * 4. Arrow function --> OK
 * 5. Classes --> OK
 * 6. Default parameter values --> OK
 * 7. Destructuring
 * 8. Rest parameters
 * 9. Spread
 * 10. Enhanced object literals --> OK
 * 11. Tagged template literals
 * 12. Modules
 */

//1.1 Var / Let, Const: Scope, Hosting
//1.2 Const / Var, Let: Assignment

// Code block: if else, loop, {}
// 1.1.1 Var / Let, Const:  Điểm giống nhau là đều để khai báo biến
//                       Điểm khác nhau là biến var có thể đươc truy cập ngoài code block
//                       còn let, const thì không

{
    var course = "Javascript"
    let course1 = "Java"
    {
        {
            console.log(course1)
        }
    }
}

console.log(course)

// 1.1.2 Hosting: Định nghĩa đơn giản là đưa lên trên. Từ khoá var là một trong những keyword hỗ trợ 
// hosting

/*
var a = 1; // Trình thông dịch của JS sẽ dịch ra như sau: 
           // var a; a = 1;
*/
// Với ví dụ dưới bởi vì var là từ khóa hỗ trợ hosting nên nó sẽ đưa các hosting lên đầu nên không
// bị lỗi. Nhưng nếu sử dụng vs let/const sẽ gây ra lỗi 

/*
a = 1 
var a;
console.log(a)
*/

/* Error 
a = 2
b = 3
let a;
const b
console.log(a)
console.log(b)
*/

//1.2. Const / Var, Let: Assignment
// Const đươc hiểu là 1 hằng nên không thể dùng toán tử = để gán lần thứ 2

const cost = 100
//cost = 1000 ---> Error
console.log(cost)

//2. Template Literals
//3. Multi-line String
// Method1
const multiLine = 'line1\nline2\nline3'
// Method2
const multiLine1 = 'line1\n'
                    + 'line2\n'
                    + 'line3\n'
console.log(multiLine1)
// Method3
const multiLine2 = `line1
line2
line3`

console.log(multiLine2)

// 4. Arrow function 

/**
 * Arrow function không thể dùng đươc context(cụ thể là this) trong function 
 */


var logger = (message) => {
    console.log(message)
}

const foo = (a) => {
    console.log(a)
}
 
logger('Anh Long Dep Trai')

foo(10)

const foo2 = a => {
    console.log(a)
}

foo2(1000)

const sum = (first, second) => {
    return first+second
}

console.log(sum(1,2))

const obj = (name, title) => ({'name': name, 'title': title})

console.log(obj('LongHoang', 'Dep Trai'))

var courseObj = {
    name: "zzHoang",
    //Error when using arrow function for method in object
    getName: () => {
        return this.name
    }
}

console.log(courseObj.getName())

/** Classes
 * 
 */

class Course {
    constructor(name, title){
        this.name = name
        this.title = title
    }

    getTitle() {
        return this.title
    }

}

/** Enhanced object literals
 * 1. Định nghĩa key:value cho object
 * 2. Định nghĩa method cho object
 * 3. Định nghĩa key cho oject dứoi dạng biến
 */
{
    let nameCourse = "JS"
    let costCourse = 1000

    let myCourse = {
        nameCourse,
        costCourse,
        getName() {
            return this.nameCourse
        }
    }

    console.log(myCourse.getName())
}

let nameCourse = 'name'
let costCourse = 'costs'

var myCourse = {
    [nameCourse]: 'zZhoang',
    [costCourse]: 1000
}

console.log(myCourse)

/** Destructuring
 * 
 */



  






  




















