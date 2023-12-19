import AccountingImg from '../../../assets/accounting.png'
import Staging from '../../../assets/new-images/stagin.jpg'
import FinancialStatement from '../../../assets/new-images/financial-statement.jpg'
import UserPermission from '../../../assets/new-images/user-permission-security.jpg'
import SimplifiedDataEntry from '../../../assets/new-images/simplified-data-entry.jpg'
import Chart from '../../../assets/new-images/chart.jpg'
import Posting from '../../../assets/new-images/posting.jpg'

export const _data = [
    {
        "title": "Accounting One",
        "description": "Accounting One is a stand-alone advance accounting system. It will simplify, digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts.",
        "img": AccountingImg,
        "reverse": false,
    },
    {
        "title": "Accounting Connect",
        "description": "Accounting Connect is an add-on software that will add an integrated advance accounting module to your SOLV system. It will simplify, digitize and automate your accounting processes and ensure accurate recording of your company's financial transactions into organized accounts.",
        "img": AccountingImg,
        "reverse": true,
    },
];

export const data = [
    {
        "title": "Staging Prior to Posting",
        "description": "Staging area for data validation and review of supervisor before final posting. Improved control over data accuracy and compliance.",
        "img": Staging,
        "reverse": false,
        "background": "rgba(21, 149, 255, 0.1)",
        "color": "#1D8DF9",
        "animation": "zoom-in-up"
    },
    {
        "title": "Financial Statement in a second",
        "description": "Instant generation of financial statements for quick decision-making. Real-time insights into the financial health of the organization.",
        "img": FinancialStatement,
        "reverse": true,
        "background": "rgba(215, 177, 70, 0.1)",
        "color": "#D7B146",
        "animation": "zoom-in-up"
    },
    {
        "title": "User Permissions and Security",
        "description": "Implement role-based access control to restrict user permissions.",
        "img": UserPermission,
        "reverse": false,
        "background": "rgba(84, 105, 172, 0.1)",
        "color": "#5469AC",
        "animation": "zoom-in-up"
    },
    {
        "title": "Simplified data entry",
        "description": "Easy one-time record entry and categorization of transactions for accurate financial reporting.",
        "img": SimplifiedDataEntry,
        "reverse": true,
        "background": "rgba(173, 71, 66, 0.1)",
        "color": "#AD4742",
        "animation": "zoom-in-up"
    },
    {
        "title": "Customizable Chart of Accounts",
        "description": "Easily tailor the chart of accounts to fit specific business structures and reporting requirements. Adapt to changes in business processes or industry standards effortlessly.",
        "img": Chart,
        "reverse": false,
        "background": "rgba(84, 105, 172, 0.1)",
        "color": "#5469AC",
        "animation": "zoom-in-up"
    },
    {
        "title": "Integrated Automatic Posting",
        "description": "Automated posting of transactions and journal entries from retail operations. Integration ensures accuracy and timeliness in financial data recording. (Accounting Connect)",
        "img": Posting,
        "reverse": true,
        "background": "rgba(255, 165, 0, 0.2)",
        "color": "rgb(255, 165, 0)",
        "animation": "zoom-in-up"
    }
];


export const accounting_plan_data = [{
    "accounting": {
        "col": 2,
        "list": [
            
            {
                "hasDiscount": true,
                "header": "Sales and Inventory",
                "title":"Uno",
                "price":"₱99,000.00",
                "color": "#1595FF", 
                "description": "Uno is our entry level variant of SOLV Business Solution. It includes software for 1 Headquarters with unlimited users, a stand alone software for 1 x single node/branch with unlimited users."
                
            },
            {
                "hasDiscount":true,
                "header":"Sales and Inventory",
                "title":"Solo",
                "price":"₱99,000.00", 
                "color": "#738A46",
                "description": "Solo is our single log-in variant of SOLV Business Solution. It includes software for combined headquarters and branch with unlimited users, auto approval."
                
            },
        ]
    }
}]
