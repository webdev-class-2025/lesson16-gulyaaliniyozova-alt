let role =" user"  ;
let subscription ="pro";
let productStatus = "sale";

if ( role === "admin" )console.log(" полный доступ к системе" );
else if (role==="user") 
    console.log("Ограничний доступ");
else if (role==="guest")
    console.log("Только просмотр");
else console.log("Неизвестний ползователь");

switch (subscription) {
    case "free":console.log ("Минималный функционал"); break;
    case "pro":console.log ("Полний доступ к возможностям"); break;
    case "enterprise":
        console.log ("VIP-обслуживание"); break;
        default:console.log("Тариф не определён");
    }

    if (productStatus === "available" && (subscription === "pro" || subscription === "enterprise"))
        console.log( "Можно заказать" );
   if ( productStatus === "sale" && (role ==="user" || role ==="guest" ))
    console.log("Доступна акция");
if (productStatus ===" out-of-stock ")
    console.log( "Товар временно не доступен");

console.log(role , subscription , productStatus);
