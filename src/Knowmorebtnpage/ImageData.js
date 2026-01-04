import Photo1 from '../assets/images/Photo1.jpg';
import Photo2 from '../assets/images/Photo2.jpg';
import Photo3 from '../assets/images/Photo3.jpg';
import Photo4 from '../assets/images/Photo4.jpg';
import Photo5 from '../assets/images/Photo5.jpg';
import Into1 from '../assets/images/interior1.jpg';
import Into2 from '../assets/images/interior2.jpg';
import Into3 from '../assets/images/interior3.jpg';
import Into4 from '../assets/images/interior4.jpg';
import acegold1 from '../assets/images/acegold1.png';
import acegold2 from '../assets/images/acegold2.jpg';
import acegold3 from '../assets/images/acegold3.png';
import acegold4 from '../assets/images/acegold4.jpg';
import acegold5 from '../assets/images/acegold6.png';
import aceht1 from '../assets/images/aceht1.jpg';
import aceht2 from '../assets/images/aceht2.jpg';
import aceht3 from '../assets/images/aceht3.jpg';
import Driveimg from '../assets/images/Ace-Flex1.png';

// All vehicle data in a single array
const vehicleData = [
    {
        title: 'tataaceflexfuel',
        mainImage: Driveimg,
        mediapart: [Driveimg],
        specs: [
            { label: 'GVW', value: '1460' },
            { label: 'Fuel Tank Capacity', value: '10 L' },
            { label: 'Engine', value: '694cc, 2 cylinder' }
        ],
        buttons: [
            { label: 'Enquire Now', className: 'enquire' }
        ],
        description: {
            label: 'Flex-fuels mark a pivotal advancement in creating more sustainable and eco-friendly transportation solutions. They play a vital role in reducing emissions and strengthening energy security, making them an essential step toward a greener future. The Tata Ace Flex-Fuel (E20–E85) brings this to life, addressing the nations growing need for energy sustainability.'
        },
        setImage: [Into1, Into2, Into3, Into4],
        knowinputData: [
            {
                title: 'Engine',
                specs: [
                    { label: 'Type', value: 'Gasoline engine' },
                    { label: 'Power', value: '-' },
                    { label: 'Torque', value: '55 Nm @ 1750-2750 rpm' },
                    { label: 'Gradeability', value: '-' },
                ],
            },
            {
                title: 'Clutch and Transmission',
                specs: [
                    { label: 'Gear Box Type', value: 'TA-59 with drive shafts' },
                    { label: 'Steering', value: 'Mechanical steering (Rack & Pinion)' },
                    { label: 'Max Speed', value: '55 kmph' },
                ],
            },
            {
                title: 'Brakes',
                specs: [
                    { label: 'Brakes', value: 'Font-Disc brakes,Rear-Drum brakes' },
                    { label: 'Regenerative Brake', value: '-' },
                    { label: 'Suspension Front', value: 'Independent, McPherson stru' },
                    { label: 'Suspension Rear', value: 'Semi Trailing arm with coil spring & hydraulic damper' },
                ],
            },
            {
                title: 'Wheels and Tyres',
                specs: [
                    { label: 'Type', value: '145R12' },
                ],
            },
            {
                title: 'Vehicle Dimensions(mm)',
                specs: [
                    { label: 'Length', value: '3560mm' },
                    { label: 'Width', value: '1497' },
                    { label: 'Height', value: '1820(Unladen)' },
                    { label: 'Wheelbase', value: '1800' },
                    { label: 'Front Track', value: '-' },
                    { label: 'Rear Track', value: '-' },
                    { label: 'Ground Clearance', value: '170 (Minimum in Laden condition)' },
                    { label: 'Min TCR', value: '3750' },
                ],
            },
            {
                title: 'Weight (kg)',
                specs: [
                    { label: 'GVW', value: '1460' },
                    { label: 'Payload', value: '750' },
                ],
            },
            {
                title: 'Battery',
                specs: [
                    { label: 'Battery Chemistry', value: '-' },
                    { label: 'Battery Energy (kWh)', value: '-' },
                    { label: 'IP Rating', value: '-' },
                    { label: 'Certified Range', value: '-' },
                    { label: 'Slow Charging time', value: '-' },
                    { label: 'Fast Charging time', value: '-' },
                ],
            },
            {
                title: 'Performance',
                specs: [
                    { label: 'Gradability', value: '-' },
                ],
            },
            {
                title: 'Seating & Warranty',
                specs: [
                    { label: 'Seats', value: 'D+1' },
                    { label: 'Warranty', value: '72000 Kms or 2 years* (whichever is earlier)' },
                    { label: 'Battery Warranty', value: '-' },
                ],
            },
        ]
    },
 {
        title: 'tataacegoldcngplus',
        mainImage: acegold1,
        mediapart: [acegold1,acegold2,acegold3,acegold4,acegold5],
        specs: [
            { label: 'GVW', value: '1630' },
            { label: 'Fuel Tank Capacity', value: '105L (35L+35L+35 ...' },
            { label: 'Engine', value: '2 cylinder 694cc' }
        ],
        buttons: [
            { label: 'Enquire Now', className: 'enquire' }
        ],
        description: {
            label: 'Ace Gold CNG Plus BS6 Phase 2 offers high power & pick up with a 2 cylinder 694CC offering 19.4 kW (26 HP) max power and 51 Nm max torque. It comes with a best in segment load body deck offering 2520 mm (8.2 feet) long load body and a segment leading Leaf spring suspension known for its high loadability.'
        },
        setImage: [Into1, Into2, Into3, Into4],
        knowinputData: [
            {
                title: 'Engine',
                specs: [
                    { label: 'Type', value: '4 stroke, Water Cooled, Multipoint Gas Injection, Dedicated CNG Engine' },
                    { label: 'Power', value: '19.4 kW @4000 (+/-100) rpm (26 HP)' },
                    { label: 'Torque', value: '51 Nm @ 2000 - 2500 rpm' },
                    { label: 'Gradeability', value: '28%' },
                ],
            },
            {
                title: 'Clutch and Transmission',
                specs: [
                    { label: 'Gear Box Type', value: 'GBS 65- 5/5.6' },
                    { label: 'Steering', value: 'Manual. 27.9-30.4(variable ratio); 380mm dia' },
                    { label: 'Max Speed', value: '70 kmph' },
                ],
            },
            {
                title: 'Brakes',
                specs: [
                    { label: 'Brakes', value: 'Font-Disc brakes,Rear-Drum brakes' },
                    { label: 'Regenerative Brake', value: '-' },
                    { label: 'Suspension Front', value: 'Rigid Axle with Parabolic Leaf Spring' },
                    { label: 'Suspension Rear', value: 'Live Axle with Semi-elliptical Leaf Spring' },
                ],
            },
            {
                title: 'Wheels and Tyres',
                specs: [
                    { label: 'Type', value: '145 R12 LT 8PR RADIAL (Tubeless Type)' },
                ],
            },
            {
                title: 'Vehicle Dimensions(mm)',
                specs: [
                    { label: 'Length', value: '4075' },
                    { label: 'Width', value: '1500' },
                    { label: 'Height', value: '1840' },
                    { label: 'Wheelbase', value: '2250' },
                    { label: 'Front Track', value: '1300' },
                    { label: 'Rear Track', value: '1320' },
                    { label: 'Ground Clearance', value: '160' },
                    { label: 'Min TCR', value: '4625' },
                ],
            },
            {
                title: 'Weight (kg)',
                specs: [
                    { label: 'GVW', value: '1630' },
                    { label: 'Payload', value: '615' },
                ],
            },
            {
                title: 'Battery',
                specs: [
                    { label: 'Battery Chemistry', value: '-' },
                    { label: 'Battery Energy (kWh)', value: '-' },
                    { label: 'IP Rating', value: '-' },
                    { label: 'Certified Range', value: '-' },
                    { label: 'Slow Charging time', value: '-' },
                    { label: 'Fast Charging time', value: '-' },
                ],
            },
            {
                title: 'Performance',
                specs: [
                    { label: 'Gradability', value: '28%' },
                ],
            },
            {
                title: 'Seating & Warranty',
                specs: [
                    { label: 'Seats', value: 'D+1' },
                    { label: 'Warranty', value: '3 year / 1 00 000 km (whichever is earlier)' },
                    { label: 'Battery Warranty', value: '-' },
                ],
            },
        ]
    },
     {
        title: 'tataaceht+',
        mainImage: aceht1,
        mediapart: [aceht2, aceht1, aceht3],
        specs: [
            { label: 'GVW', value: '2120' },
            { label: 'Fuel Tank Capacity', value: '30 L' },
            { label: 'Engine', value: '798 cc' }
        ],
        buttons: [
            { label: 'Enquire Now', className: 'enquire' }
        ],
        description: {
            label: 'The trusted Tata Ace range has empowered 24 Lakhs +  entrepreneurs while helping individuals achieve their success goals. One of India’s most desired Small Commercial Vehicles, the Tata Ace family offers variants across Diesel, Petrol and CNG fuel options that suit different business needs.'
        },
        setImage: [Into1, Into2, Into3, Into4],
        knowinputData: [
            {
                title: 'Engine',
                specs: [
                    { label: 'Type', value: '-' },
                    { label: 'Power', value: '26 kW (35 HP) @3750 rpm' },
                    { label: 'Torque', value: '85 Nm@1750-2750 rpm' },
                    { label: 'Gradeability', value: '36%' },
                ],
            },
            {
                title: 'Clutch and Transmission',
                specs: [
                    { label: 'Gear Box Type', value: '-' },
                    { label: 'Steering', value: 'Mechanical, variable ratio' },
                    { label: 'Max Speed', value: '-' },
                ],
            },
            {
                title: 'Brakes',
                specs: [
                    { label: 'Brakes', value: '-' },
                    { label: 'Regenerative Brake', value: '-' },
                    { label: 'Suspension Front', value: 'Parabolic leaf spring' },
                    { label: 'Suspension Rear', value: 'Semi - Elliptical leaf spring' },
                ],
            },
            {
                title: 'Wheels and Tyres',
                specs: [
                    { label: 'Type', value: '155 R13 LT 8PR RADIAL (Tubeless Tyres)' },
                ],
            },
            {
                title: 'Vehicle Dimensions(mm)',
                specs: [
                    { label: 'Length', value: '4075 mm' },
                    { label: 'Width', value: '1500' },
                    { label: 'Height', value: '1858 mm' },
                    { label: 'Wheelbase', value: '2250' },
                    { label: 'Front Track', value: '1310mm' },
                    { label: 'Rear Track', value: '1343' },
                    { label: 'Ground Clearance', value: '-' },
                    { label: 'Min TCR', value: '-' },
                ],
            },
            {
                title: 'Weight (kg)',
                specs: [
                    { label: 'GVW', value: '2120' },
                    { label: 'Payload', value: '-' },
                ],
            },
            {
                title: 'Battery',
                specs: [
                    { label: 'Battery Chemistry', value: '-' },
                    { label: 'Battery Energy (kWh)', value: '-' },
                    { label: 'IP Rating', value: '-' },
                    { label: 'Certified Range', value: '-' },
                    { label: 'Slow Charging time', value: '-' },
                    { label: 'Fast Charging time', value: '-' },
                ],
            },
            {
                title: 'Performance',
                specs: [
                    { label: 'Gradability', value: '36%' },
                ],
            },
            {
                title: 'Seating & Warranty',
                specs: [
                    { label: 'Seats', value: 'D+1' },
                    { label: 'Warranty', value: '3 year / 1 00 000 km (whichever is earlier)' },
                    { label: 'Battery Warranty', value: '-' },
                ],
            },
        ]
    },
    {
        title: 'tataacegolddiesel',
        mainImage: acegold1,
        mediapart: [acegold1,acegold2,acegold3,acegold4,acegold5],
        specs: [
            { label: 'GVW', value: '1835' },
            { label: 'Fuel Tank Capacity', value: '30 L' },
            { label: 'Engine', value: '702 CC' }
        ],
        buttons: [
            { label: 'Enquire Now', className: 'enquire' }
        ],
        description: {
            label: 'Ace Gold Diesel BS6 Phase 2 comes with a turbocharged 2 cylinder 702 CC engine delivering 16.17 kW (22HP) max power & a max torque of 55 Nm. This enhanced power & pickup ensures 32% improved acceleration vis a vis the BS6 Phase 1 variant. The vehicle is now offered with a Direct Drive gearbox, offering superior drivability, enhanced comfort and improved fuel efficiency.'
        },
        setImage: [Into1, Into2, Into3, Into4],
        knowinputData: [
            {
                title: 'Engine',
                specs: [
                    { label: 'Type', value: '4 Stroke, Turbocharged InterCooled, Direct Injection Common Rail Diesel engine' },
                    { label: 'Power', value: 'Power Mode : 16.17 kW (22 HP) @ 3600 +/-100 rpm City Mode : 12.5 kW at 3600 +/-100 rpm' },
                    { label: 'Torque', value: 'Power Mode : 55 Nm @ 1800 to 2200 engine rpm; City Mode : 40 Nm @1800 to 2200 engine rpm' },
                    { label: 'Gradeability', value: '35 % (Power Mode)' },
                ],
            },
            {
                title: 'Clutch and Transmission',
                specs: [
                    { label: 'Gear Box Type', value: 'GBS G65-5/6.31' },
                    { label: 'Steering', value: 'Manual Steering System 27.9-30.4(Variable); 380 mm Dia' },
                    { label: 'Max Speed', value: '65 kmph' },
                ],
            },
            {
                title: 'Brakes',
                specs: [
                    { label: 'Brakes', value: 'Front - Disc brakes; Rear - Drum brakes' },
                    { label: 'Regenerative Brake', value: '-' },
                    { label: 'Suspension Front', value: 'Rigid Axle with Parabolic Leaf Spring' },
                    { label: 'Suspension Rear', value: 'Live Axle with Semi-elliptical Leaf Spring' },
                ],
            },
            {
                title: 'Wheels and Tyres',
                specs: [
                    { label: 'Type', value: '145 R12 LT 8PR RADIAL (Tubeless Type)' },
                ],
            },
            {
                title: 'Vehicle Dimensions(mm)',
                specs: [
                    { label: 'Length', value: '3800' },
                    { label: 'Width', value: '1500' },
                    { label: 'Height', value: '1845' },
                    { label: 'Wheelbase', value: '2100' },
                    { label: 'Front Track', value: '1300' },
                    { label: 'Rear Track', value: '1320' },
                    { label: 'Ground Clearance', value: '160' },
                    { label: 'Min TCR', value: '4300' },
                ],
            },
            {
                title: 'Weight (kg)',
                specs: [
                    { label: 'GVW', value: '1835' },
                    { label: 'Payload', value: 'CLB:900 | High Deck:815' },
                ],
            },
            {
                title: 'Battery',
                specs: [
                    { label: 'Battery Chemistry', value: '-' },
                    { label: 'Battery Energy (kWh)', value: '-' },
                    { label: 'IP Rating', value: '-' },
                    { label: 'Certified Range', value: '-' },
                    { label: 'Slow Charging time', value: '-' },
                    { label: 'Fast Charging time', value: '-' },
                ],
            },
            {
                title: 'Performance',
                specs: [
                    { label: 'Gradability', value: '35 % (Power Mode)' },
                ],
            },
            {
                title: 'Seating & Warranty',
                specs: [
                    { label: 'Seats', value: 'D+1' },
                    { label: 'Warranty', value: '3 year / 1 00 000 km (whichever is earlier)' },
                    { label: 'Battery Warranty', value: '-' },
                ],
            },
        ]
    },

    // More vehicles can be added here
    // {
    //   title: 'tata-ace-gold-cng-plus',
    //   ...
    // }
];

const imageSet = [Photo1, Photo2, Photo3, Photo4, Photo5];

export default { vehicleData, imageSet };
