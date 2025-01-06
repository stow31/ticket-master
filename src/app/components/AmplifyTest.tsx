'use client'
import {Alert} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';
export default function AmplifyTest(){
    return(
        <Alert 
        variation="success"
        isDismissible={true}
        hasIcon={true}
      >
        Amplify UI is working!
      </Alert>
    );
}