import Vanilla from '../ice_cream_pics/vanilla.png';
import Chocolate from '../ice_cream_pics/chocolate.png';
import Mixed from '../ice_cream_pics/mixed.png';
import Mango from '../ice_cream_pics/mango.png';
import Chocchip from '../ice_cream_pics/chocchip.png';
import Strawberry from '../ice_cream_pics/strawberry.png';

const Flavours = [
        {name:'Vanilla',
        desc:'Sweet dessert made from milk, cream, sugar, and a source of vanilla',
        image: Vanilla,
        id:1,
        quantity:0,
        quantityFunc: function (quantity) {return this.quantity = quantity}},
        {name:'Strawberry',
        desc:'A sweet-tart burst of ripe, juicy strawberries stirred into sweet, frozen cream',
        image: Strawberry,
        id:2,
        quantity:0,
        quantityFunc: function (quantity) {return this.quantity = quantity}}, 
        {name:'Chocolate', 
        desc: 'A frozen dessert made from milk, cream, chocolate, and sugar flavored cocoa powder',
        image: Chocolate,
        id:3,
        quantity:0,
        quantityFunc: function (quantity) {return this.quantity = quantity}},  
        {name:'Mango',
        desc: 'Custard based ice cream made with cream, sugar, milk, eggs and mangoes',
        image: Mango,
        id:4,
        quantity:0,
        quantityFunc: function (quantity) {return this.quantity = quantity}}, 
        {name: 'Choc-Chip',
        desc: 'Double-flavour ice cream made from vanilla ice cream and rich chocolate flakes',
        image: Chocchip,
        id:5,
        quantity:0,
        quantityFunc: function (quantity) {return this.quantity = quantity}}, 
        {name: 'Mixed',
        desc: 'A mixed dessert of all the ice-creams offered at the Ice Cream Shop!',
        image: Mixed,
        id:6,
        quantity:0,
        quantityFunc: function (quantity) {return this.quantity = quantity}}
];

export default Flavours;