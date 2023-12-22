import UnoImg from '../../../assets/compressed/uno.png'
import SoloImg from '../../../assets/compressed/solo.png'
import DuoImg from '../../../assets/compressed/duo.png'
import POSImg from '../../../assets/compressed/pos-solv-24.png'
import AccountingImg from '../../../assets/compressed/accounting.png'
import HRImg from '../../../assets/compressed/hr-solv-24.png'
import NoCostNoRisk from '../../../assets/new-images/no-cost-no-risk.png'
import Flexible from '../../../assets/new-images/flexible-payment-method.jpg'
import UserFriendly from '../../../assets/new-images/user-friendly.jpg'
import Realtime from '../../../assets/new-images/realtime.jpg'
import CuttingEdge from '../../../assets/new-images/cutting-edge.jpg'

export const _data = [
    {
        "title": "Uno 24",
        "description": "Uno is our entry level variant of SOLV Business Solution. It includes software for 1 Headquarters with unlimited users, a stand alone software for 1 x single node/branch with unlimited users. 24 months installment.",
        "img": UnoImg,
        "reverse": false,
    },
    {
        "title": "Solo 24",
        "description": "Solo 24 is our single log-in variant of SOLV Business Solution. It includes software for combined headquarters and branch with unlimited users, auto approval, 24 months installment.",
        "img": SoloImg,
        "reverse": true,
    },
    {
        "title": "Duo 24",
        "description": "Duo is the ideal SOLV Business Solution variant for businesses with 2 branches. It includes software for 1 Headquarters with unlimited users, stand alone software for 2 x single nodes/branches with unlimited users. 24 months installment.",
        "img": DuoImg,
        "reverse": false,
    },
    {
        "title": "POS 24",
        "description": "A convenient way to accurately record sales and keep track of how your business is doing. It also integrates with POS devices. POS is an add-on or stand alone point of sale software for a Single Node with unlimited users.",
        "img": POSImg,
        "reverse": true,
    },
    {
        "title": "Accounting One 24",
        "description": "Accounting One is a stand-alone advance accounting system. It will simplify, digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts.",
        "img": AccountingImg,
        "reverse": false,
    },
    {
        "title": "Accounting Unified Pro 24",
        "description": "Accounting Unified Pro is an add-on software that will add an integrated advance accounting module to your SOLV system. It will simplify, digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts.",
        "img": AccountingImg,
        "reverse": true,
    },
    {
        "title": "Hr Solution Starter 24",
        "description": "Accounting One is a stand-alone advance accounting system. It will simplify, digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts.",
        "img": HRImg,
        "reverse": false,
    },
    {
        "title": "Hr Solution Basic 24",
        "description": "Hr Solution Basic 24 is an add-on or stand alone software that will provide a complete solution for the Human Resources Department and expand the capabilities of your SOLV system. Hr Solution includes payroll, Human Resources Information System (HRIS) and timekeeping with geo tagging.",
        "img": HRImg,
        "reverse": true,
    },
    {
        "title": "Hr Solution Intermediate 24",
        "description": "Hr Solution Intermediate 24 is an add-on or stand alone software that will provide a complete solution for the Human Resources Department and expand the capabilities of your SOLV system. Hr Solution includes payroll, Human Resources Information System (HRIS) and timekeeping with geo tagging.",
        "img": HRImg,
        "reverse": false,
    },

];

export const data = [
    {
        "title": "No Cost, No Risk",
        "description": "Experience the full capabilities of our software without any upfront cost or financial commitment, providing a risk-free opportunity to explore its potential.",
        "img": NoCostNoRisk,
        "reverse": false,
        "background": "rgba(21, 149, 255, 0.1)",
        "color": "#1D8DF9",
        "animation": "zoom-in-up"
    },
    {
        "title": "Flexible Payment Structure",
        "description": " Our 24-month installment plan allows you to enjoy the software's benefits without a significant upfront financial burden, making it accessible for businesses of all sizes.",
        "img": Flexible,
        "reverse": true,
        "background": "rgba(215, 177, 70, 0.1)",
        "color": "#D7B146",
        "animation": "zoom-in-up"
    },
    {
        "title": "User-Friendly Interface",
        "description": "Navigate the software effortlessly with an intuitive and user-friendly interface, promoting a positive and efficient user experience.",
        "img": UserFriendly,
        "reverse": false,
        "background": "rgba(84, 105, 172, 0.1)",
        "color": "#5469AC",
        "animation": "zoom-in-up"
    },
    {
        "title": "Real-time Support",
        "description": "Benefit from access to real-time customer support for 24 months installment period, ensuring any questions or issues are promptly addressed",
        "img": Realtime,
        "reverse": true,
        "background": "rgba(173, 71, 66, 0.1)",
        "color": "#AD4742",
        "animation": "zoom-in-up"
    },
    {
        "title": "Cutting-Edge Technology",
        "description": "Stay ahead of the curve with software that incorporates the latest advancements and technologies.",
        "img": CuttingEdge,
        "reverse": false,
        "background": "rgba(115, 138, 70, 0.1)",
        "color": "#738A46",
        "animation": "zoom-in-up"
    }

];

export const solv24_plan_data = [{
    "sales": {
        "col": 4,
        "list": [
            {
                "hasDiscount": false,
                "header":"SOLV 24",
                "title":"Uno 24",
                "price":"₱4,125.00 monthly", 
                "color":"#1595FF", 
                "description":"Uno is our entry level variant of SOLV Business Solution. It includes software for 1 Headquarters with unlimited users, a stand alone software for 1 x single node/branch with unlimited users. 24 months installment.",
                "isAvailable" : true,
                "isSolv24": true
            },
            {
                "hasDiscount":false, 
                "header":"SOLV 24" ,
                "title":"Solo 24" ,
                "price":"₱4,125.00 monthly" ,
                "color":"#D7B146" ,
                "description":"Solo 24 is our single log-in variant of SOLV Business Solution. It includes software for combined headquarters and branch with unlimited users, auto approval, 24 months installment.",
                "isAvailable" : true,
                "isSolv24": true
            },
            {
                "hasDiscount":false, 
                "header":"SOLV 24", 
                "title":"Duo 24", 
                "price":"₱6,625.00 monthly", 
                "color":"#5469AC",
                "description":"Duo is the ideal SOLV Business Solution variant for businesses with 2 branches. It includes software for 1 Headquarters with unlimited users, stand alone software for 2 x single nodes/branches with unlimited users. 24 months installment.",
                "isAvailable" : true,
                "isSolv24": true
            },
            {
                "hasDiscount": false, 
                "header":"SOLV 24", 
                "title":"POS 24", 
                "price":"₱750.00 monthly",
                "color":"#AD4742", 
                "description":"A convenient way to accurately record sales and keep track of how your business is doing. It also integrates with POS devices. POS is an add-on or stand alone point of sale software for a Single Node with unlimited users.",
                "isAvailable" : true,
                "isSolv24": true
            }
        ]
    }, 
    "accounting":{
        "col": 2,
        "list": [
            {
                "hasDiscount":false, 
                "header":"SOLV 24",
                "title":"Accounting One 24" ,
                "price":"₱6,208.33 monthly" ,
                "color":"#D7B146", 
                "description":"Accounting One is a stand-alone advance accounting system. It will simplify, digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts.",
                "isAvailable" : true,
                "isSolv24": true
            },
            {
                "hasDiscount":false,
                "header":"SOLV 24", 
                "title":"Accounting Unified Pro 24", 
                "price":"₱6,208.33 monthly", 
                "color":"#5469AC", 
                "description":"Accounting Unified Pro is an add-on software that will add an integrated advance accounting module to your SOLV system. It will simplify, digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts.",
                "isAvailable" : false,
                "isSolv24": true
            },
            
        ]
    },
    "hr":{
        "col": 3,
        "list": [
            {
                "hasDiscount":false, 
                "header":"SOLV 24",
                "title":"Hr Solution Starter 24" ,
                "price":"₱2,875.00 monthly" ,
                "color":"#AD4742", 
                "description":"Hr Solution Basic 24 is an add-on or stand alone software that will provide a complete solution for the Human Resources Department and expand the capabilities of your SOLV system. Hr Solution includes payroll, Human Resources Information System (HRIS) and timekeeping with geo tagging.",
                "isAvailable" : true,
                "isSolv24": true
            },
            {
                "hasDiscount":false,
                "header":"SOLV 24", 
                "title":"Hr Solution Basic 24", 
                "price":"₱4,125.00 monthly", 
                "color":"#1595FF", 
                "description":"Hr Solution Basic 24 is an add-on or stand alone software that will provide a complete solution for the Human Resources Department and expand the capabilities of your SOLV system. Hr Solution includes payroll, Human Resources Information System (HRIS) and timekeeping with geo tagging.",
                "isAvailable" : true,
                "isSolv24": true
            },
            {
                "hasDiscount":false, 
                "header":"SOLV 24", 
                "title":"Hr Solution Intermediate 24" ,
                "price":"₱7,041.67 monthly" ,
                "color":"#738A46" ,
                "description":"Hr Solution Intermediate 24 is an add-on or stand alone software that will provide a complete solution for the Human Resources Department and expand the capabilities of your SOLV system. Hr Solution includes payroll, Human Resources Information System (HRIS) and timekeeping with geo tagging.",
                "isAvailable" : true,
                "isSolv24": true
            }
                
        ]
    }
    
}]