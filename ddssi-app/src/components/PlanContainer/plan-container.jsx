import React from 'react'
import { MainContainer } from './plan-container-styles'
import SubscriptionCard from '../SubscriptionCard/subscription-card'

const PlanContainer = ({ data }) => {
    return (
        <MainContainer col={data.col}>
            {
                data.list.map((item, key) => {
                    return <SubscriptionCard
                        key={key}
                        hasDiscount={item.hasDiscount}
                        header={item.header}
                        title={item.title}
                        price={item.price}
                        color={item.color}
                        description={item.description}
                    />
                })
            }
            
        </MainContainer>
    )
}

export default PlanContainer