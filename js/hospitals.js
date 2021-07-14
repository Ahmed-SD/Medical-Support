$(document).ready(function () {
    $("#khartoum").text(2);
    $("#omdur").text(5);
    $("#royal").text(3);
    $("#pay").text(0);
    $("#check").click(() => {
        let myPayments = $("#payment").val();
        if (myPayments == allPay && allPay!=0) {
            $("#check").addClass("btn-success");
            $("#payment").val("");
            $("#check").text("checked");
            UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> Confirmed'});
        } else {
            UIkit.notification({message: '<span></span> Please Reinter Money again'});
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
        if (kh >=1) {
            UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> Adedd to Appointments'})
            khPay++;
            kh -= 1;
            khApp += 1;
            $("#khartoum").text(kh);
            $("#kh").text(khApp + " Romm/s in Khartoum hospital " + khPay * 2800 + " SDG");
            payment1 = khPay * 2800;
            allPay = payment1 + payment2 + payment3;
            $("#pay").text(allPay + " SDG");
        } else {
            UIkit.notification({message: '<span></span>Sory khartoum Hospital is Fulled'});
        }
    });
    $(".f2").click(() => {
        UIkit.notification({message: '<span></span>Sory Ahmed Gasiem Hospital is Fulled'});
    });
    let om = 5;
    let omApp = 0;
    let omPay = 0;
    $(".f3").click(() => {
        if (om >=1) {
            UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> Adedd to Appointments'})
            omPay++;
            om--;
            omApp++;
            $("#omdur").text(om);
            $("#omd").text(omApp + " Room/s in omdurman hospital " + omPay * 2000 + " SDG");
            payment2 = omPay * 2000;
            allPay = payment1 + payment2 + payment3;
            $("#pay").text(allPay + " SDG");
        } else{
            UIkit.notification({message: '<span></span>Sory Omdurman Hospital is Fulled'});
        }
    });
    let roy = 3;
    let royApp = 0;
    let royPay = 0;
    $(".f4").click(() => {
        if (roy >= 1) {
            UIkit.notification({message: '<span uk-icon=\'icon: check\'></span> Adedd to Appointments'})
            royPay++;
            roy--;
            royApp++;
            $("#royal").text(roy);
            $("#ro").text(royApp + " Room/s in Royall Care hospital " + royPay * 3500 + " SDG");
            payment3 = royPay * 3500;
            allPay = payment1 + payment2 + payment3;
            $("#pay").text(allPay + " SDG");
        } else {
            UIkit.notification({message: '<span></span>Sory Royall Care Hospital is Fulled'});
        }
    });
});