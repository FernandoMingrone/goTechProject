import React from 'react'
import { InfoSection } from "../../components";
import { homeObjTwo, homeObjThree, homeObjOne  } from "./Data"

const Products = () => {
    return (
        <>
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjOne} />
        </>
    )
};


export default Products;
