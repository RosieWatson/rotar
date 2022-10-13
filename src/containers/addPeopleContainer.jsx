import * as React from "react";
import styled from "styled-components"
import { useForm } from "react-hook-form";
import { Checkbox, Button, TextField } from "react95";

export const AddPeopleContainer = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <main>
      <h1>Add People</h1>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <TextField id="name" {...register("name")} />

        <label htmlFor="email">Email</label>
        <TextField id="email" {...register("email")}/>

        <label htmlFor="timezone">Timezone</label>
        <TextField id="timezone" {...register("timezone")}/>


        <Checkbox id="office" label="Will they be in the office?" {...register("office")}/>

        <Button type="submit">Add to Rota</Button>
      </FormContainer>
    </main>);
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`