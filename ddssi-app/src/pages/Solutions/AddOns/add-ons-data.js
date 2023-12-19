
import SupportBanner from '../../../assets/support-banner.jpg'
import ZenithBanner from '../../../assets/zenith-banner.jpg'
import AssetBanner from '../../../assets/assets-banner.jpg'
import SupportPack from '../../../assets/support-pack.png'
import Asset from '../../../assets/assets.png'
import Zenith from '../../../assets/zenith.png'
import Scalability from '../../../assets/new-images/scalability.jpg'
import AdditionalFunctionality from '../../../assets/new-images/additional-functionality.jpg'
import SystemSupport from '../../../assets/new-images/system-support.jpg'


export const _data = [
    {
      "title": "Support Pack",
      "description": "Annual support pack to ensure continuous access to support from our team of software engineers. Support pack is a 1 year maintenance agreement for 1 node or branch (unlimited phone, chat and email support (5 x 8) onsite as needed.",
      "reverse": false,
      "img": SupportPack,
      "banner": SupportBanner
    },
    {
      "title": "Assets",
      "description": "Ensure that company assets are properly recorded and keep track of their depreciated value. Assets is an add-on software that will add fixed asset management with depreciation to your SOLV system.",
      "reverse": true,
      "img": Asset,
      "banner": AssetBanner
    },
    {
      "title": "Zenith",
      "description": "Add nodes/branches to your sales and inventory system easily when you need it. Zenith adds 1 x single node or branch with unlimited users.",
      "reverse": false,
      "img": Zenith,
      "banner": ZenithBanner
    },
    {
      "title": "HR Solution Support Pack",
      "description": "Hr Solution/Payroll Support pack is a 1 year maintenance agreement for 1 node or branch (unlimited phone, chat and email support (5 x 8) onsite as needed.",
      "reverse": true,
      "img": Zenith,
      "banner": ZenithBanner
    }
  ];

  export const data = [
    {
        "title": "Scalability Features",
        "description": "Add-ons to increase the number of branches or nodes as needed.",
        "img": Scalability,
        "reverse": false,
        "background": "rgba(21, 149, 255, 0.1)",
        "color": "#1D8DF9",
        "animation": "zoom-in-up"
    },
    {
        "title": "Additional Functionality",
        "description": "Enhances the core functionality of the software. Adds new features or tools to meet specific user needs.",
        "img": AdditionalFunctionality,
        "reverse": true,
        "background": "rgba(215, 177, 70, 0.1)",
        "color": "#D7B146",
        "animation": "zoom-in-up"
    },
    {
        "title": "Extend System Support",
        "description": "Allows users to add support pack / maintenance agreement for continued access to SOLV support beyond support included in the purchase of the software.",
        "img": SystemSupport,
        "reverse": false,
        "background": "rgba(84, 105, 172, 0.1)",
        "color": "#5469AC",
        "animation": "zoom-in-up"
    }
];

export const addons_plan_data = [{
    "addons": {
        "col": 4,
        "list": [
            {
                "hasDiscount": true,
                "header": "Add-ons",
                "title":"Support Pack",
                "price":"₱69,000.00",
                "color": "#1595FF", 
                "description": "Support pack is a 1 year maintenance agreement for 1 node or branch (unlimited phone, chat and email support (5 x 8) onsite as needed."
                
            },
            {
                "hasDiscount":true,
                "header":"Add-ons",
                "title":"Assets",
                "price":"₱25,000.00", 
                "color": "#D7B146",
                "description": "Assets is an add-on software that will add fixed asset management with depreciation to your SOLV system."
                
            },
            {
                "hasDiscount": true,
                "header": "Add-ons",
                "title":"Zenith",
                "price":"₱40,000.00",
                "color": "#5469AC", 
                "description": "Zenith adds 1 x single node or branch with unlimited users."
                
            },
            {
                "hasDiscount":true,
                "header":"Add-ons",
                "title":"HR Solutions Support Pack",
                "price":"₱99,000.00", 
                "color": "#AD4742",
                "description": "HR Solutions Support Pack is a 1 year maintenance agreement for 1 node or branch (unlimited phone, chat and email support (5 x 8) onsite as needed."
                
            },
        ]
    }
}]
