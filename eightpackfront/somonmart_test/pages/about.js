import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Layout from "../components/Layout";
import CollapsibleMenuDemo from "../components/LeftMenu/MainLeft";
import Typography from "@material-ui/core/Typography";

export default function About() {
  const router = useRouter();
  return (
    <Layout>
      <Typography variant="h5" gutterBottom>
        Доставка и оплата{" "}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Условия доставки
      </Typography>
      <Typography variant="subtitle2">
        • При заказе на сумму свыше 3 000 руб. доставка в пределах МКАД
        осуществляется бесплатно. <br /> • Стоимость доставки заказов на сумму
        до 3 000 руб. в пределах МКАД составляет 350 руб.
      </Typography>
      <Typography variant="subtitle1">Осуществляется</Typography>
      <Typography variant="subtitle2">
        • В рабочие дни с 9:00 до 18:00 <br /> • На следующий рабочий день - при
        размещении заказа до 16.00 <br /> • Через один рабочий день - при
        размещении заказа после 16.00
      </Typography>
      <Typography variant="subtitle1">Оплата</Typography>
      <Typography variant="subtitle1">Безналичный расчет</Typography>
      <Typography variant="subtitle2">
        • Оформить заказ на сайте, указав безналичную форму оплаты и заполнив
        реквизиты организации. После обработки заказа, менеджер вышлет Вам счет
        к оплате на почту.
        <br />
        • Отправить письмо заявку с заказом на почту somonmart@mail.ru.
        <br />
        Не забудьте приложить реквизиты организации и указать артикулы нужных
        товаров. После обработки заказа, менеджер вышлет Вам счет на оплату.
        <br />• Оформить заказ по телефону вместе с оператором.
      </Typography>
      <Typography variant="subtitle1">
        Счет на оплату товара Вы получите по электронной почте, указанной в
        заказе.
      </Typography>
      <Typography variant="subtitle2">
        Обращаем Ваше внимание, что счет действителен в течение 3 (трех)
        банковских дней.
        <br />
        Перед оплатой внимательно проверьте реквизиты Вашей организации.
        <br />
        После оплаты счета с Вами свяжется оператор компании для уточнения даты
        доставки.
        <br />
        При получении заказа обязательно необходимо иметь при себе главную
        печать вашей организации или доверенность с главной печатью организации.
        Вместе с заказом Вы получите все необходимые документы (счет и товарная
        накладная).
        <br />* Оплата производится только в российских рублях.
      </Typography>
    </Layout>
  );
}
