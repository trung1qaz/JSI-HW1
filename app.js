//Thầy xem kết quả ở console.log ạ
//Bài 1:
console.log("Bài 1")
let student = [
    {
        name: "NVA",
        age: 16,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    },
    {
        name: "NVB",
        age: 18,
        course: ["mindX 01", "mindX 02", "mindX 04"]
    },
    {
        name: "NVC",
        age: 17,
        course: ["mindX 01", "mindX 03", "mindX 04"]
    },
    {
        name: "NVD",
        age: 15,
        course: ["mindX 01", "mindX 02", "mindX 03"]
    }
    ]
    console.log("a,")
    let person = prompt("Độ tuổi cần tìm", "<Yo age here>");
    let x = 0;
    for (i=0; i<=3; i++) {
        if(student[i].age == person){
            x = student[i].name
            console.log(x)
        }
    };
    if (x == 0){
        console.log("ko tìm thấy")
    };
    console.log("b,")
    let course = prompt("Môn học cần tìm", "<Yo course here>");
    let y = 0;
    for (i=0; i<=3; i++) {
        for (z=0; z <=2; z++){
            if(student[i].course[z] == course){
                y = student[i].name
                console.log(y)
            }
        }
    };
    if (y == 0){
        console.log("ko tìm thấy khóa học")
    };

//Bài 2:
console.log("Bài 2")
let arr1 = [0,2,4,6,8]
let arr2 = [1,3,5,7]

// a, Duyệt 2 array trên và hiển thị ra màn hình những số lớn hơn 3.
console.log("a, - các số lớn hơn 3 của arr1:")
for (i=0; i<=4; i++) {
    if (arr1[i] > 3) {
        console.log( arr1[i])
    }
};

console.log("- các số lớn hơn 3 của arr2:")
for (i=0; i<=3; i++) {
    if (arr2[i] > 3) {
        console.log(arr2[i])
    }
};

// b, Ghép 2 array kể trên lại thành 1 arry như sau: [0,2,4,6,8,2,3,5,7]
let merge1 = arr1.concat(arr2); 
let t = merge1.join();
console.log("b, Hợp nhất 2 array được",t)


// c, Ghép 2 array kể trên lại thành 1 arry như sau: [0,1,2,3,4,5,6,7,8]
let merge2 = arr1.concat(arr2); 
merge2.sort(function(a, b){return a - b});
t = merge2.join();
console.log("c, Hợp nhất 2 array được",t)

