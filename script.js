function cevir() {

    let miktar = document.getElementById("miktar").value;
    let birinciPara = document.getElementById("birinciPara").value;
    let ikinciPara = document.getElementById("ikinciPara").value;
    let sonuc = document.getElementById("sonuc");

    let kur = {
        TRY: 1,
        USD: 40,
        EUR: 43
    };

    let tlMiktar = miktar * kur[birinciPara];
    let cevrilenMiktar = tlMiktar / kur[ikinciPara];

    sonuc.innerHTML =
        `${miktar} ${birinciPara} = ${cevrilenMiktar.toFixed(2)} ${ikinciPara}`;
}