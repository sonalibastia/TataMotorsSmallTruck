import driveimg from '../assets/images/acegold1.png';
import acegold1 from '../assets/images/acegold1.png';
import acegold2 from '../assets/images/acegold2.jpg';
import acegold3 from '../assets/images/acegold3.png';
import acegold4 from '../assets/images/acegold4.jpg';
import acegold5 from '../assets/images/acegold6.png';


const mainImage = driveimg;

const mediapart = [
    acegold1, acegold2, acegold3, acegold4, acegold5
];

const specs = [
    { label: 'GVW', value: '1630' },
    { label: 'Fuel Tank Capacity', value: '105L (35L +35L+35 ...' },
    { label: 'Engine', value: '2 cylinder 694cc ' }
];

const buttons = [
    { label: 'Enquire Now', className: 'enquire' }
    // { label: 'Book Now', className: 'book' }
];

const description = { label: 'Ace Gold CNG Plus BS6 Phase 2 offers high power & pick up with a 2 cylinder 694CC offering 19.4 kW (26 HP) max power and 51 Nm max torque. It comes with a best in segment load body deck offering 2520 mm (8.2 feet) long load body and a segment leading Leaf spring suspension known for its high loadability.' };


export default { mainImage, mediapart, specs, description, buttons };
