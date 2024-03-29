class Wallet {
    constructor(money) {
        let _money = money;
        // pobieranie aktualnej zawartosci portfela
        this.getWalletValue = () => _money;

        // sprawdzanie czy urzytkownik ma wystarczajaca ilosc srodkow
        this.checkCanPlay = value => {
            if (_money >= value) return true;
            return false;
        }

        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value;
                } else if (type === "-") {
                    return _money -= value;
                } else {
                    throw new Error("nieprawidłowy typ działania");
                }

            } else {
                throw new Error("nieprawidłowa liczba");
            }
        }
    }


}


// const wallet = new Wallet(200);