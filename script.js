let num=document.getElementById("seenum")
for (let i=1;i<=30;i++) {
    const option=document.createElement("option")
    option.value=i
    option.textContent=i
    num.appendChild(option)
}