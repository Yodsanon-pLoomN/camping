"use server";

import { profileSchema, ValidateWithZod } from "@/utils/schemas";

//for backend

const renderError = (error:unknown):{ message:string} =>{
    return {
        message: error instanceof Error ? error.message : 'An error!!'
    }
}



export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validateField = ValidateWithZod(profileSchema, rawData);
    console.log("validated : ", validateField);
  } catch (error) {
    console.log(error);
    return renderError(error)
  }

  return { message: "Create Profile susscessfull!!" };
};
