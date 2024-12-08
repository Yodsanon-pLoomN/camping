

import { createProfileAction } from "@/actions/actions";
import { SubmitButton } from "@/components/Form/Button";
import FormContainer from "@/components/Form/FormContainer";
import FormInput from "@/components/Form/FormInput";




  


const CreateProfile = () => {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">New user Informations</h1>
      <div className="border p-8 rounded-md ">

        <FormContainer action={createProfileAction}>

          <div className="grid md:grid-cols-2 gap-4 mt-4">
          <FormInput
            name="firstName"
            label="First Name"
            type="text"
            placeholder="Your name"
            />
          <FormInput
            name="lastName"
            label="Last Name"
            type="text"
            placeholder="Your lastname"
            />
           <FormInput
            name="userName"
            label="Username"
            type="text"
            placeholder="Your username"
            />
            </div>

          <SubmitButton text="Create profile" size='lg' />
      </FormContainer>
      </div>
    </section>
  );
};
export default CreateProfile;
