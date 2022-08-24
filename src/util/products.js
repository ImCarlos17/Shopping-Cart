import uniqid from "uniqid";
import model1 from "../static/clothes/model1.webp";
import model2 from "../static/clothes/model2.webp";
import model22 from "../static/clothes/model2(2).webp";
import model3 from "../static/clothes/model3.webp";
import model4 from "../static/clothes/model4.webp";
import model5 from "../static/clothes/model12.jpg";
import model6 from "../static/clothes/model6.jpg";
import model7 from "../static/clothes/model9.webp";
import model8 from "../static/clothes/model10.webp";
import model9 from "../static/clothes/model11.webp";
import model10 from "../static/clothes/model12.jpg";
import model11 from "../static/clothes/model13.jpg";

const products = [
  {
    name: "January",
    price: 35,
    img: model1,
    id: uniqid(),
  },
  {
    name: "February",
    price: 40,
    img: model2,
    id: uniqid(),
  },
  {
    name: "March",
    price: 15,
    img: model22,
    id: uniqid(),
  },
  {
    name: "April",
    price: 38,
    img: model3,
    id: uniqid(),
  },
  {
    name: "May",
    price: 28,
    img: model4,
    id: uniqid(),
  },
  {
    name: "June",
    price: 20,
    img: model5,
    id: uniqid(),
  },
  {
    name: "July",
    price: 15,
    img: model6,
    id: uniqid(),
  },
  {
    name: "August",
    price: 25,
    img: model7,
    id: uniqid(),
  },
  {
    name: "September",
    price: 30,
    img: model8,
    id: uniqid(),
  },
  {
    name: "Octuber",
    price: 12,
    img: model9,
    id: uniqid(),
  },
  {
    name: "Octuber",
    price: 50,
    img: model10,
    id: uniqid(),
  },
  {
    name: "December",
    price: 35,
    img: model11,
    id: uniqid(),
  },
];

export default products;
