import RequirementAnalysis from '../../../assets/new-images/requirement-analysis.jpg'
import RapidPrototyping from '../../../assets/new-images/rapid-prototyping.jpg'
import AgileDevelopmentMethodologies from '../../../assets/new-images/agile.jpg'
import CostEffectiveSolutions from '../../../assets/new-images/cost-effective.jpg'
import CollaborativeApproach from '../../../assets/new-images/collaborative-approach.jpg'
import FeatureEnhancement from '../../../assets/new-images/feature-enhancement.jpg'

export const data = [
    {
        "title": "Requirements Analysis",
        "description": " Conduct in-depth analysis of client requirements. Identify specific features, workflows, and functionalities needed.",
        "img": RequirementAnalysis,
        "reverse": false,
        "background": "rgba(21, 149, 255, 0.1)",
        "color": "#1D8DF9",
        "animation": "zoom-in-up"
    },
    {
        "title": "Rapid Prototyping",
        "description": "Develop prototypes to visualize customization early in the process. Ensure alignment with client expectations before full implementation.",
        "img": RapidPrototyping,
        "reverse": true,
        "background": "rgba(215, 177, 70, 0.1)",
        "color": "#D7B146",
        "animation": "zoom-in-up"
    },
    {
        "title": "Feature Enhancement",
        "description": "Add, modify, or remove features based on client needs. Align software capabilities with specific business goals.",
        "img": FeatureEnhancement,
        "reverse": false,
        "background": "rgba(84, 105, 172, 0.1)",
        "color": "#5469AC",
        "animation": "zoom-in-up"
    },
    {
        "title": "Agile Development Methodologies",
        "description": "Adopt agile methodologies for flexible and iterative development. Accommodate changes and updates throughout the customization process.",
        "img": AgileDevelopmentMethodologies,
        "reverse": true,
        "background": "rgba(21, 149, 255, 0.1)",
        "color": "#1D8DF9",
        "animation": "zoom-in-up"
    },
    {
        "title": "Cost-Effective Solutions",
        "description": "Offer tiered pricing models based on customization needs. Provide transparent cost structures for tailored",
        "img": CostEffectiveSolutions,
        "reverse": false,
        "background": "rgba(173, 71, 66, 0.1)",
        "color": "#AD4742",
        "animation": "zoom-in-up"
    },
    {
        "title": "Collaborative Approach",
        "description": "Work closely with clients in a collaborative development model. Ensure client involvement in decision-making hroughout the customization process.",
        "img": CollaborativeApproach,
        "reverse": true,
        "background": "rgba(115, 138, 70, 0.1)",
        "color": "#738A46",
        "animation": "zoom-in-up"
    }

];


export const custom_plan_data = [{
    "custom": {
        "col": 4,
        "list": [
            {
                "hasDiscount": false,
                "header": "SOLV Custom",
                "title":"Level 1",
                "price":"₱49,990.00",
                "color": "#1595FF", 
                "description": "Customization package up to maximum 15 man-days with 1 year validity.",
                "isAvailable": true,
                "isSolv24" : false
            },
            {
                "hasDiscount": false,
                "header":"SOLV Custom",
                "title":"Level 2",
                "price":"₱99,990.00", 
                "color": "#D7B146",
                "description": "Customization package up to maximum 30 man-days with 1 year validity.",
                "isAvailable": true,
                "isSolv24" : false
            },
            {
                "hasDiscount": false,
                "header": "SOLV Custom",
                "title":"Level 3",
                "price":"₱199,990.00",
                "color": "#5469AC", 
                "description": "Customization package up to maximum 60 man-days with 1 year validity.",
                "isAvailable": true,
                "isSolv24" : false
                
            },
            {
                "hasDiscount": false,
                "header":"SOLV Custom",
                "title":"Level 4",
                "price":"₱299,000.00", 
                "color": "#AD4742",
                "description": "Customization package up to maximum 90 man-days with 1 year validity.",
                "isAvailable": true,
                "isSolv24" : false
                
            },
        ]
    }
}]
