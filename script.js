function hesapla() {
    let vize = Number(document.getElementById("vize").value);
    let final = Number(document.getElementById("final").value);

    let ortalama = (vize * 0.4) + (final * 0.6);

    let sonuc = "";

    if (ortalama >= 50) {
        sonuc = "Geçtiniz! Ortalama: " + ortalama.toFixed(2);
    } else {
        sonuc = "Kaldınız! Ortalama: " + ortalama.toFixed(2);
    }

    document.getElementById("sonuc").innerText = sonuc;
}