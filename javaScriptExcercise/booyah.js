function booyah1() {
    alert('BOOYAH!')
}
let booyah2 = new function () {
    alert('BOOYAH!')
}
function testQuestion3() {
    setTimeout(booyah1, 2000);
    setTimeout(booyah2(), 2000);
}