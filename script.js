let num=document.getElementById("seenum")
for (let i=1;i<=30;i++) {
    const option=document.createElement("option")
    option.value=i
    option.textContent=i
    num.appendChild(option)
}
console.log(29689);
let bt=document.getElementById("btsubmit");
const checkpass={1:1234,2:4567,3:1241
                ,4:2121,5:1234,6:2435
                ,7:1111,8:2222,9:3333
                ,10:1111,11:2222,12:3333
                ,13:1111,14:2222,15:3333
                ,16:1111,17:3333,18:2222
                ,19:1111,20:2222,21:3333
                ,22:1111,23:2222,24:3333
                ,25:1111,26:2222,27:3333
                ,28:1111,29:2222,30:3333
}


const form = document.querySelector("form");


form.addEventListener("submit", async function (e) {
    e.preventDefault(); // กันหน้ารีเฟรช

    const selectedNum = num.value;             
    const correctPass = checkpass[selectedNum];

    const { value: text } = await Swal.fire({
        title: "กรุณากรอกรหัส",
        input: "text",
        inputLabel: "Input Password",
        inputPlaceholder: "กรอกรหัสที่นี่",
        inputAttributes: {
            maxlength: "20",
            autocapitalize: "off",
            autocorrect: "off"
        },
        showCancelButton: true
    });

    if (text === undefined) return;

    Swal.fire({
        title: "Loading",
        text: "กำลังโหลด กรุณารอสักครู่",
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    setTimeout(() => {
        Swal.close();

        if (text == correctPass) {
            Swal.fire("✅ Correct!","โปรดแคปภาพหน้าจอหน้านี้ เพื่อเป็นหลักฐาน","success");
        } else {
            Swal.fire("❌ Wrong password","กรุณาลองใหม่","error");
        }
    }, 1700);

});