$(document).ready(function () {
    $("#khartoum").text(2);
    $("#omdur").text(5);
    $("#royal").text(3);
    $("#pay").text(0);
    $("#check").click(() => {
        let myPayments = $("#payment").val();
        if (myPayments == allPay) {
            alert("Your appointment has been confirmed");
            $("#payment").val("");
        } else {
            alert("please enter all payments");
            $("#payment").val("");
        }
    });

    let allPay = 0;

    let payment1 = 0;
    let payment2 = 0;
    let payment3 = 0;

    let kh = 2;
    let khApp = 0;
    let khPay = 0;
    $(".f1").click(() => {
        if (kh != 0) {
            khPay++;
            kh -= 1;
            khApp += 1;
            $("#khartoum").text(kh);
            $("#kh").text(khApp + " Romm/s in Khartoum hospital " + khPay * 2800 + " SDG");
            payment1 = khPay * 2800;
            allPay = payment1 + payment2 + payment3;
            $("#pay").text(allPay + " SDG");
        } else {
            alert("There is No Empty Room In Khartoum Hospital");
        }
    });
    $(".f2").click(() => {
        alert("There is No Empty Rooms In omdurman Hospital");
    });
    let om = 5;
    let omApp = 0;
    let omPay = 0;
    $(".f3").click(() => {
        if (om != 0) {
            omPay++;
            om--;
            omApp++;
            $("#omdur").text(om);
            $("#omd").text(omApp + " Room/s in omdurman hospital " + omPay * 2000 + " SDG");
            payment2 = omPay * 2000;
            allPay = payment1 + payment2 + payment3;
            $("#pay").text(allPay + " SDG");
        } else {
            alert("There is No Empty Rooms In omdurman Hospital");
        }
    });
    let roy = 3;
    let royApp = 0;
    let royPay = 0;
    $(".f4").click(() => {
        if (roy != 0) {
            royPay++;
            roy--;
            royApp++;
            $("#royal").text(roy);
            $("#ro").text(royApp + " Room/s in Royall Care hospital " + royPay * 3500 + " SDG");
            payment3 = royPay * 3500;
            allPay = payment1 + payment2 + payment3;
            $("#pay").text(allPay + " SDG");
        } else {
            alert("There is No Empty Room/s In royall Care Hospital");
        }
    });
});
