import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

describe("Should render NavBar component: title, links(Home, Shop, Contact, Cart)", () => {
  it("render NavBar component", () => {
    const storeTitle = screen.getByRole("link", { name: "Dog Clothes Store" });
    expect(storeTitle).toBeInTheDocument();

    const linkHome = screen.getByRole("link", { name: "Home" });
    expect(linkHome).toBeInTheDocument();

    const linkShop = screen.getByRole("link", { name: "Shop" });
    expect(linkShop).toBeInTheDocument();

    const linkContact = screen.getByRole("link", { name: "Contact" });
    expect(linkContact).toBeInTheDocument();
  });
});

describe("Should render Home Page, ad with button shop page", () => {
  it("render Home Page Component", () => {
    const linkHome = screen.getByRole("link", { name: "Home" });

    fireEvent.click(linkHome);

    const storeAd = screen.getByText("The Best Clothes to dress your Dog");
    expect(storeAd).toBeInTheDocument();

    const btnShopPage = screen.getByRole("button", { name: "Shop Page" });
    expect(btnShopPage).toBeInTheDocument();
  });
});

describe("It should render the shop page when pressing the link", () => {
  it("render shop page", () => {
    const linkShop = screen.getByRole("link", { name: "Shop" });

    fireEvent.click(linkShop);

    const cardItem = screen.getByText("January");
    expect(cardItem).toBeInTheDocument();
  });
});

describe("It should render the shop page when pressing the button Shop page", () => {
  it("render shop page", () => {
    const linkHome = screen.getByRole("link", { name: "Home" });

    fireEvent.click(linkHome);

    const btnShopPage = screen.getByRole("button", { name: "Shop Page" });
    fireEvent.click(btnShopPage);

    const cardItem = screen.getByText("January");
    expect(cardItem).toBeInTheDocument();
  });
});

describe("It should change the number of items in the cart", () => {
  it("add item to cart", () => {
    const linkShop = screen.getByRole("link", { name: "Shop" });

    fireEvent.click(linkShop);

    const btnAdd = screen.getAllByRole("button", { name: "Add to cart" });
    expect(btnAdd).toBeTruthy();
  });
});
