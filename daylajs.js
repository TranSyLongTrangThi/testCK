// B1/
console.log("Bài 1: ")
function findOppositeNumber(n, inputNumber) {
    if (inputNumber < n / 2)
        return inputNumber + (n / 2)
    else return inputNumber - (n / 2)
}
findOppositeNumber(10, 2)
console.log(findOppositeNumber(10, 2))

findOppositeNumber(10, 6)
console.log(findOppositeNumber(10, 6))


// B2/
console.log("Bài 2: ")
function merge2String(s1, s2) {
    let result = " ";
    for (let i = 0; i < s1.length || i < s2.length; i++) {
        if (i < s1.length) {
            result += s1[i];
        }
        if (i < s2.length) {
            result += s2[i];
        }
    }
    return result;
}
console.log(merge2String("abc", "123"));
console.log(merge2String("abc", "0123"));
console.log(merge2String("abcd", "123"));






// B3/
console.log("Bài 3: ")
localStorage.setItem("Luot", 3)
function start() {

    let random_number = Math.floor(Math.random() * 100) + 1;
    // console.log(random_number);
    let button = document.getElementById("button").addEventListener("click", function () {
        let t = localStorage.Luot;
        if (t > 1) {
            let input = document.getElementById("input").value;
            t--;
            localStorage.setItem("Luot", t)
            if (input > random_number) {
                document.getElementById("KQ").innerHTML = "Nhỏ nhỏ xíu nữa là chuận"
                document.getElementById("Luot").innerHTML = "Còn " + t + " lượt"
            } else
                if (input < random_number) {
                    document.getElementById("KQ").innerHTML = "Thêm xíu nữa nha"
                    document.getElementById("Luot").innerHTML = "Còn " + t + " lượt"
                }
                else if (input == random_number) {
                    localStorage.setItem("Luot", 0)
                    document.getElementById("KQ").innerHTML = "Bạn đã chiến thắng"
                    document.getElementById("Luot").innerHTML = "Bạn còn " + t + " lượt"
                    alert("ĂN CẢ LÔ LẪN ĐỀ LUN ")
                }
        }
        else {
            let input = document.getElementById("input").value;
            localStorage.setItem("Luot", t)
            if (input != random_number) {
                document.getElementById("KQ").innerHTML = "Bạn đã hết lượt"
                document.getElementById("Luot").innerHTML = "Bạn hết lượt ư ? Phải ra đề ư ? Đừng lo 0989150522 ALO là có tiền chỉ có thể là bốc bát họ"
            }
            else {
                localStorage.setItem("Luot", 0)
                document.getElementById("KQ").innerHTML = "Xin chúc mừng người chơi hệ phèn đã đạt được danh hiệu 'Mãi mới win'"
                document.getElementById("Luot").innerHTML = "Còn " + t + " lượt"
                alert("CUỐI CÙNG thì anh vẫn là kẻ chiến thắng. Lun là kẻ chiến thắng. Sẽ là người duy nhất chiến thắng trên đường tới tim em( GÀ! Non! Đoán mãi mới trúng  )")
            }
        }

    })

}
start()