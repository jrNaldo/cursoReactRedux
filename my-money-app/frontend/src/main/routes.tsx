import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../dashboard/dashboard";
import BillingCycle from "../billingCycle/billingCycle";

function Router(props: any){
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/billingCycles" element={<BillingCycle />} />
            <Route path="*" element={<Dashboard/>}/>
        </Routes>
    )
}

export default Router