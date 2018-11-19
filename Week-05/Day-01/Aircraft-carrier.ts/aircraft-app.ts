import F35 from './F35';
import F16 from './F16';
import Carrier from './carrier';

let gigaMegaCarrier = new Carrier(Math.round(Math.random() * 500), Math.round(Math.random() * 10000));
let extraBrutalCarrier = new Carrier(Math.round(Math.random() * 500), Math.round(Math.random() * 10000));

gigaMegaCarrier.add(new F16, 5);
gigaMegaCarrier.add(new F35, 5);
extraBrutalCarrier.add(new F16, 5);
extraBrutalCarrier.add(new F35, 5);

gigaMegaCarrier.getStatus();
extraBrutalCarrier.getStatus();

gigaMegaCarrier.fill();
extraBrutalCarrier.fill();

gigaMegaCarrier.getStatus();
extraBrutalCarrier.getStatus();

gigaMegaCarrier.fight(extraBrutalCarrier);