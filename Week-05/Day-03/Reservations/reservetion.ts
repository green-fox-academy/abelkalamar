interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy {

  private dow: string;
  private bookCode: string[] = [];

  constructor() {
  }

  getCodeBooking(): string {
    let characters = ('0123456789ABCDEFGHIJKLMNOPQRSTUYZ').split('');
    for (let i = 0; i < 8; i++) {
      this.bookCode.push(characters[Math.round(Math.random() * characters.length)]);
    }
    return this.bookCode.join('');
  }

  getDowBooking(): string {
    let days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    return this.dow = days[Math.round(Math.random() * days.length)];
  }

  info() {
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()} `)
  }
}

let resi = new Reservation();
resi.info();