import React from "react";
import TestForm from "@/app/components/screens/testForm/TestForm";
import { NextPageAuth } from "@/app/providers/private.route.interface";

const Testing: NextPageAuth = () => {
  return <TestForm />;
};

Testing.isOnlyUser = true

export default Testing;
