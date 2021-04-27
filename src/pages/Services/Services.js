import React from 'react'
import { InfoSection } from "../../components";
import { homeObjTwo, homeObjThree  } from "./Data"

const Services = () => {
    return (
        <>
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
        </>
    )
};


export default Services;