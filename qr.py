import qrcode

data = ""
img = qrcode.make(data)
img.save("qrcode.png")
print("สร้าง QR Code สำเร็จ")